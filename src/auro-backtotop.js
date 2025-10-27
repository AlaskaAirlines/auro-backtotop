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
 * The auro-backtotop element provides users a way to quickly return to page top.
 *
 * @slot - Default slot for the text of the button.
 * @slot ariaLabel - Use this slot to pass an aria-label to the HTML5 button.
 * @csspart button - Apply CSS to HTML5 button.
 * @csspart icon - Apply CSS to arrow up icon.
 */
export class AuroBackToTop extends LitElement {

    constructor() {
    super();

    this.initializeProperties();
  }

  initializeProperties() {

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

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  static get properties() {
    return {

      /**
       * Render the trigger inline, will always be visible.
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      hidden: {
        type: Boolean,
        reflect: true,
      },
      iconOnly: {
        type: Boolean,
        reflect: true,
      },
      interactionActive: {
        type: Boolean,
      },
      lastScrollDirectionUp: {
        type: Boolean,
      },

      /**
       * The variant attribute allows for rendering the button using the primary (default) or secondary styles.
       * @type { 'primary' | 'secondary' | String }
       * @default "primary"
       */
      variant: {
        type: String,
        reflect: true,
      },
    };
  }


  static get styles() {
    return [styleCss];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-backtotop"] - The name of element that you want to register to.
   *
   * @example
   * AuroBackToTop.register("custom-backtotop") // this will register this element to <custom-backtotop/>
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

      if (this.lastKnownScrollPosition < this.yPosShowButton) {
        this.hidden = true;
      } else {
        this.hidden = false;
      }
    });

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
        rounded
        .disabled="${this.disabled}"
        variant="${this.variant}"
        ?iconOnly=${!this.lastScrollDirectionUp && !this.interactionActive}
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
