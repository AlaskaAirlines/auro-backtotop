import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-backtotop';

describe('auro-backtotop', () => {
  it('auro-backtotop is accessible', async () => {
    const el = await fixture(html`
      <auro-backtotop cssclass="testClass"></auro-backtotop>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-backtotop custom element is defined', async () => {
    const el = await !!customElements.get("auro-backtotop");

    await expect(el).to.be.true;
  });
});
