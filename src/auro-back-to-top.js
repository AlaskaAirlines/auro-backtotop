// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import { LitElement, html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';
import arrowUp from "@alaskaairux/icons/dist/icons/interface/arrow-up_es6";
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

const
  DEFAULT_MESSAGE = 'back to top',
  HIDDEN_INTERSECTION_RATIO = 0.0,
  VISIBLE_INTERSECTION_RATIO = 1.0,
  WINDOW_SCROLL_TOP = 0;

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-back-to-top provides helps users quickly return to page top.
 *
 * @attr {String}   focus - Id attribute of the element to receive focus when trigger is clicked
 * @attr {Boolean}  inline - Render the trigger inline, will always be visible
 * @attr {String}   offset - Adjust how far the user scrolls before the fixed button appears, expressed in CSS measurement units (`vh` recommended)
 *
 * @slot - Customize trigger message
 */
class AuroBackToTop extends LitElement {

  static get properties() {
    return {
      focus: {
        type: String,
      },
      inline: {
        type: Boolean,
      },
      offset: {
        type: String,
      },
      visible: {
        attribute: false,
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.inline = false;
    this.offset = '100vh';

    /**
     * @private
     * Whether the trigger button is visible, does not apply to inline trigger.
     */
    this.visible = false;

    const dom = new DOMParser().parseFromString(arrowUp.svg, 'text/html'),
     svg = dom.body.firstChild;

    svg.classList.add('icon');

      /**
       * @private
       * Reference to arrow-up svg icon
       */
    this.svg = svg;
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  /**
   * @private
   * Set focus by element id for accessibility of keyboard users
   * @returns {void}
   */
  setFocus() {
    if (!this.focus) {
      console.warn('Required `focus` attribute missing, this will harm accessibility.'); // eslint-disable-line no-console

      return;
    }

    const focusEl = document.getElementById(this.focus);

    if (!focusEl) {
      console.warn(`No element found with id ${this.focus}, check that the element exists and has the expected id attribute.`); // eslint-disable-line no-console

      return;
    }

    focusEl.focus({ preventScroll: true });

    if (document.activeElement !== focusEl) {
      console.warn(`Element with id ${this.focus}, check this is a focusable element or assign tabindex value of -1 so it can programmatically receive focus.`); // eslint-disable-line no-console
    }
  }

  /**
   * @private
   * Handle trigger click by scrolling to window top and setting focus
   * @returns {void}
   */
  onTriggerClick() {
    window.scrollTo(window.scrollX, WINDOW_SCROLL_TOP);
    this.setFocus();
  }

  firstUpdated() {
    this.visible = !('IntersectionObserver' in window) || this.inline;
    if (!('IntersectionObserver' in window) || this.inline) {
      return
    }
    const observer = new IntersectionObserver((entries) => {
      this.visible = entries.some((entry) => entry.intersectionRatio === HIDDEN_INTERSECTION_RATIO);
    }, {
      root: null,
      rootMargin: `0px 0px 0px 0px`,
      threshold: [
        HIDDEN_INTERSECTION_RATIO,
        VISIBLE_INTERSECTION_RATIO
      ],
    });

    observer.observe(this.shadowRoot.querySelector('.reference'));
  }

  render() {

    const buttonClasses = {
        'trigger': true,
        'trigger--visible': this.visible,
        'trigger--inline': this.inline,
        'trigger--fixed': !this.inline,
      },
      referenceStyles = {
        'height': this.offset,
      };

    return html`
      ${
        this.inline
          ? html``
          : html`<div class="reference" style=${styleMap(referenceStyles)}></div>`
      }
      <button @click=${this.onTriggerClick} class=${classMap(buttonClasses)}>
        <div class="message"><slot>${DEFAULT_MESSAGE}</slot></div>
        ${this.svg}
      </button>
    `;
  }
}

/* istanbul ignore else */
if (!customElements.get("auro-back-to-top")) {
  customElements.define("auro-back-to-top", AuroBackToTop);
}
