// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import { LitElement, html } from "lit";
import styleCss from "./style-css.js";

import '@aurodesignsystem/auro-button';
import '@aurodesignsystem/auro-icon';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-backtotop provides helps users quickly return to page top.
 *
 * @attr {Boolean} disabled - Render the trigger inline, will always be visible
 * @attr {Boolean} secondary - Adjust how far the user scrolls before the fixed button appears, expressed in CSS measurement units (`vh` recommended)
 * @slot - Default slot for the text of the button.
 * @csspart button - Apply CSS to HTML5 button.
 * @csspart icon - Apply CSS to arrow up icon.
 */
export class AuroBackToTop extends LitElement {

  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true
      },
      hidden: {
        type: Boolean,
        reflect: true
      },
      iconOnly: {
        type: Boolean
      },
      interactionActive: {
        type: Boolean
      },
      lastScrollDirectionUp: {
        type: Boolean
      },
      secondary: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super();

    this.disabled = false;
    this.secondary = false;

    /**
     * @private
     */
    this.hidden = true;

    /**
     * @private
     */
    this.iconOnly = true;

    /**
     * @private
     */
    this.lastKnownScrollPosition = 0;

    /**
     * @private
     */
    this.lastScrollDirectionUp = false;

    /**
     * @private
     */
    this.interactionActive = false;

    /**
     * @private
     */
    this.yPosShowButton = 400;
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * @private
   * Scroll up to the target focus element
   * @returns {void}
   */
  scrollTop() {
    document.documentElement.scrollTop = 0;
  }

  /**
   * @private
   * Handle trigger click by scrolling to window top and setting focus
   * @returns {void}
   */
  onTriggerClick() {
    this.scrollTop();
    this.interactionActive = false;
  }

  firstUpdated() {
    // hide/show the button and it's text based on scroll position
    document.addEventListener("scroll", () => {
      if (window.scrollY < this.lastKnownScrollPosition) {
        this.lastScrollDirectionUp = true;
      } else {
        this.lastScrollDirectionUp = false;
      }

      this.lastKnownScrollPosition = window.scrollY;

      if (this.lastKnownScrollPosition < this.yPosShowButton) {
        this.hidden = true;
      } else {
        this.hidden = false;
      }
    });

    // hide/show the button text based on mouse and keyboard interaction
    this.addEventListener('mouseover', () => {
      this.interactionActive = true;
    });

    this.addEventListener('mouseout', () => {
      this.interactionActive = false;
    });

    // The focusin and focusout events are to simulate toggling text for keyboard users
    this.addEventListener('focusin', () => {
      this.interactionActive = true;
    });

    this.addEventListener('focusout', () => {
      this.interactionActive = false;
    });
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <auro-button
        aria-label="arrow-up"
        rounded
        .disabled="${this.disabled}"
        .secondary="${this.secondary}"
        ?iconOnly=${!this.lastScrollDirectionUp && !this.interactionActive}
        part="button"
        @click=${this.onTriggerClick}
        tabindex="-1">
        <slot></slot>
        <auro-icon customSize customcolor category="interface" name="arrow-up" slot="icon" part="icon"></auro-icon>
      </auro-button>
    `;
  }
}

// default internal definition
if (!customElements.get("auro-backtotop")) {
  customElements.define("auro-backtotop", AuroBackToTop);
}
