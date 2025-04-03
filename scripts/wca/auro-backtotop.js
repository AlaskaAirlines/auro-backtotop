
import { AuroBackToTop } from '../../src/auro-backtotop.js';

/**
 * The auro-backtotop element provides users a way to quickly return to page top.
 */
class AuroBackToTopWCA extends AuroBackToTop {}

if (!customElements.get("auro-backtotop")) {
  customElements.define("auro-backtotop", AuroBackToTopWCA);
}
