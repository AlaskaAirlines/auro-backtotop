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
    const el = await Boolean(customElements.get("auro-backtotop"));

    await expect(el).to.be.true;
  });
  
  it('tests scroll-related events', async () => {
    window.innerHeight = 2500;
    const el = await fixture(html`
      <auro-backtotop cssclass="testClass"></auro-backtotop>
    `);

    simulateScroll(0, 500);
    expect(el.hidden).to.be.false;

    simulateScroll(0, 0);
    expect(el.hidden).to.be.true;
  });

  it('tests click event', async () => {
    const el = await fixture(html`
      <auro-backtotop cssclass="testClass"></auro-backtotop>
    `);
    simulateScroll(0, 500);
    el.shadowRoot.querySelector('auro-button').click();
    expect(document.documentElement.scrollTop).to.equal(0);
  });

  it('tests mouse-related events', async () => {
    const el = await fixture(html`
      <auro-backtotop cssclass="testClass"></auro-backtotop>
    `);

    el.dispatchEvent(new Event('mouseover'));
    expect(el.interactionActive).to.be.true;

    el.dispatchEvent(new Event('mouseout'));
    expect(el.interactionActive).to.be.false;
  });

  it('tests focus-related events', async () => {
    const el = await fixture(html`
      <auro-backtotop cssclass="testClass"></auro-backtotop>
    `);
    
    el.dispatchEvent(new Event('focusin'));
    expect(el.interactionActive).to.be.true;

    el.dispatchEvent(new Event('focusout'));
    expect(el.interactionActive).to.be.false;
  });

  it('auro-backtotop event triggering event click', async () => {
    const el = await fixture(html`
      <auro-backtotop cssclass="testClass"></auro-backtotop>
    `);
    el.shadowRoot.querySelector('auro-button').click()
    el.shadowRoot.querySelector('auro-button').dispatchEvent(new Event('mouseover'));
  });

  function simulateScroll(x, y) {
    const scrollEvent = new CustomEvent('scroll', { detail: { x, y } });
    window.scrollX = x;
    window.scrollY = y;
    document.dispatchEvent(scrollEvent);
  }
});
