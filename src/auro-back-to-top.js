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
 * @attr {Boolean}  inline - Render the trigger inline, will always be visible
 * @attr {String}   offset - Adjust how far the user scrolls before the fixed button appears, expressed in CSS measurement units (`vh` recommended)
 * @attr {Boolean}  visible - Indicates trigger visibility
 *
 * @slot - Customize trigger content
 */
class AuroBackToTop extends LitElement {

  static get properties() {
    return {
      inline: {
        type: Boolean,
      },
      offset: {
        type: String,
      },
      visible: {
        type: Boolean,
      }
    };
  }

  constructor() {
    super();

    this.inline = false;
    this.offset = '100vh';
    this.visible = false;

    const dom = new DOMParser().parseFromString(arrowUp.svg, 'text/html'),
     svg = dom.body.firstChild;

    svg.classList.add('icon');

    this.svg = svg;
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  scrollTop() {
    window.scrollTo(window.scrollX, WINDOW_SCROLL_TOP);
  }

  firstUpdated() {
    this.visible = !IntersectionObserver || this.inline;
    if (!IntersectionObserver || this.inline) {
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
      <button @click=${this.scrollTop} class=${classMap(buttonClasses)}>
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
