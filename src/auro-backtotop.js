// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

import { AuroButton } from "@aurodesignsystem/auro-button/class";
import { AuroIcon } from "@aurodesignsystem/auro-icon/class";
import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
// ---------------------------------------------------------------------
import { LitElement } from "lit";
import { html } from "lit/static-html.js";
import buttonVersion from "./buttonVersion";
import iconVersion from "./iconVersion";
import styleCss from "./styles/style.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * A button that takes people back to the top of a long page.
 *
 * Key capabilities:
 * - **Appears after scrolling**: The button always stays hidden near the top of the page and appears in the bottom-right corner once the page is scrolled 400 pixels or more.
 * - **Expands on hover**: The button always shows only an arrow-up icon until a pointer moves over it, then shows its text.
 * - **Quieter style**: Set `variant="secondary"` for a less prominent button.
 *
 * @example
 * <auro-backtotop>
 *   <span slot="ariaLabel">Back to top</span>
 *   Back to top
 * </auro-backtotop>
 *
 * @summary A fixed button that returns people to the top of a long page.
 * @customElement auro-backtotop
 *
 * @slot - Text shown beside the icon while a pointer is over the button, such as "Back to top". Screen readers read the `ariaLabel` slot instead.
 * @slot ariaLabel - Text read by screen readers in place of the visible label, such as "Back to top". Set it on every back-to-top button, because the fallback, "arrow-up", names the icon instead of the action.
 * @csspart button - The `auro-button` element that holds the arrow-up icon and text.
 * @csspart icon - The `auro-icon` element that shows the arrow-up icon.
 * @csspart text - The `<span>` that holds the text shown beside the icon while a pointer is over the button.
 */
export class AuroBackToTop extends LitElement {

    constructor() {
    super();

    this._initializeDefaults();
  }

  _initializeDefaults() {
    const versioning = new AuroDependencyVersioning();

    this.disabled = false;
    this.variant = "primary";

    /**
     * @private
     */
    this.iconTag = versioning.generateTag("auro-icon", iconVersion, AuroIcon);

    /**
     * @private
     */
    this.buttonTag = versioning.generateTag(
      "auro-backtotop-button",
      buttonVersion,
      AuroButton,
    );

    /**
     * @private
     */
    this.shape = "circle";

    /**
     * @private
     */
    this.size = "lg";

    /**
     * @private
     */
    this.hidden = true;

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

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  static get properties() {
    return {

      /**
       * Turns the button off, so it's shown in a muted style and can't be clicked. Doesn't currently stop a tap on a touch screen from scrolling to the top of the page.
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      hidden: {
        type: Boolean,
        reflect: true
      },
      interactionActive: {
        type: Boolean
      },
      lastScrollDirectionUp: {
        type: Boolean
      },

      /**
       * Sets the button's visual emphasis. `primary` uses auro-button's strongest style, and `secondary` a quieter one.
       * @type {'primary' | 'secondary'}
       * @default 'primary'
       */
      variant: {
        type: String,
        reflect: true
      }
    };
  }


  static get styles() {
    return [styleCss];
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-backtotop"] - The tag name to register the element under.
   *
   * @example
   * AuroBackToTop.register("custom-backtotop") // Registers the element as <custom-backtotop>
   *
   */
  static register(name = "auro-backtotop") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroBackToTop);
  }

  /**
   * @private
   * @returns {void}
   */
  scrollTop() {
    document.documentElement.scrollTop = 0;
  }

  /**
   * @private
   * @returns {void}
   */
  onTriggerClick() {
    this.scrollTop();
    this.interactionActive = false;
  }

  /**
   * Hides the button while the page is scrolled less than `yPosShowButton` from the top.
   * @private
   * @returns {void}
   */
  updateVisibility() {
    this.hidden = this.lastKnownScrollPosition < this.yPosShowButton;
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-backtotop");

    // hide/show the button and it's text based on scroll position
    document.addEventListener("scroll", () => {
      if (window.scrollY < this.lastKnownScrollPosition) {
        this.lastScrollDirectionUp = true;
      } else {
        this.lastScrollDirectionUp = false;
      }

      this.lastKnownScrollPosition = window.scrollY;
      this.updateVisibility();
    });

    // Set the starting state too, so a page that loads already scrolled
    // (a reload or an anchor link) shows the button without waiting for a scroll.
    this.lastKnownScrollPosition = window.scrollY;
    this.updateVisibility();

    // hide/show the button text based on mouse and keyboard interaction
    this.addEventListener("mouseover", () => {
      this.shape = "pill";
      this.interactionActive = true;
    });

    this.addEventListener("mouseout", () => {
      this.shape = "circle";
      this.interactionActive = false;
    });

    // The focusin and focusout events are to simulate toggling text for keyboard users
    this.addEventListener("focusin", () => {
      this.interactionActive = true;
    });

    this.addEventListener("focusout", () => {
      this.interactionActive = false;
    });

    this.addEventListener("touchend", () => {
      this.onTriggerClick();
    });
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <!-- Hidden slot for aria-label -->
      <slot name="ariaLabel" hidden></slot>

      <${this.buttonTag}
        aria-label="${this.runtimeUtils.getSlotText(this, "ariaLabel") || "arrow-up"}"
        .disabled="${this.disabled}"
        variant="${this.variant}"
        part="button"
        shape="${this.shape}"
        size="${this.size}"
        @click=${this.onTriggerClick}
        tabindex="-1">
        <span class="text" part="text">
          <slot></slot>
        </span>
        <${this.iconTag} customColor category="interface" name="arrow-up" part="icon"></${this.iconTag}>
      </${this.buttonTag}>
    `;
  }
}
