// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

/* eslint-disable lit/binding-positions, lit/no-invalid-html */

// ---------------------------------------------------------------------
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';
import styleCss from "./style-css.js";

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';

import { AuroButton } from '@aurodesignsystem/auro-button/src/auro-button.js';
import buttonVersion from './buttonVersion.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-backtotop element provides users a way to quickly return to page top.
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
        type: Boolean,
        reflect: true
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

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.iconTag = versioning.generateTag('auro-icon', iconVersion, AuroIcon);

    /**
     * @private
     */
    this.buttonTag = versioning.generateTag('auro-button', buttonVersion, AuroButton);


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

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
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
    this.runtimeUtils.handleComponentTagRename(this, 'auro-backtotop');

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

    this.addEventListener('touchend', () => {
      this.onTriggerClick();
    });
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <${this.buttonTag}
        aria-label="arrow-up"
        rounded
        .disabled="${this.disabled}"
        .secondary="${this.secondary}"
        ?iconOnly=${!this.lastScrollDirectionUp && !this.interactionActive}
        part="button"
        @click=${this.onTriggerClick}
        tabindex="-1">
        <slot></slot>
        <${this.iconTag} customColor category="interface" name="arrow-up" slot="icon" part="icon"></${this.iconTag}>
      </${this.buttonTag}>
    `;
  }
}
