import { AuroBackToTop } from './dist/auro-backtotop.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
const registerComponent = (name = 'custom-backtotop') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroBackToTop {});
  }
};

export { registerComponent };
