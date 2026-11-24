import { expect, fixture, html } from "@open-wc/testing";
import "../src/registered";

describe("auro-backtotop", () => {
  it("auro-backtotop is accessible", async () => {
    const el = await fixture(html`
      <auro-backtotop cssclass="testClass"></auro-backtotop>
    `);

    await expect(el).to.be.accessible();
  });

  it("auro-backtotop custom element is defined", async () => {
    const el = await Boolean(customElements.get("auro-backtotop"));

    await expect(el).to.be.true;
  });

  it("tests scroll-related events", async () => {
    window.innerHeight = 2500;
    const el = await fixture(html`
      <auro-backtotop cssclass="testClass"></auro-backtotop>
    `);

    simulateScroll(0, 500);
    await el.updateComplete;
    expect(el.hidden).to.be.false;
    expect(el.hasAttribute("hidden")).to.be.false;
    expect(getComputedStyle(el).display).to.not.equal("none");

    simulateScroll(0, 0);
    await el.updateComplete;
    expect(el.hidden).to.be.true;
    expect(el.hasAttribute("hidden")).to.be.true;
    expect(getComputedStyle(el).display).to.equal("none");
  });

  it("is hidden on load while the page is at the top", async () => {
    const el = await fixture(html`
      <auro-backtotop>Back to top</auro-backtotop>
    `);

    expect(el.hasAttribute("hidden")).to.be.true;
    expect(getComputedStyle(el).display).to.equal("none");
  });

  it("is shown on load when the page is already scrolled past the threshold", async () => {
    window.scrollY = 800;
    const el = await fixture(html`
      <auro-backtotop>Back to top</auro-backtotop>
    `);
    await el.updateComplete;

    expect(el.hasAttribute("hidden")).to.be.false;
    expect(getComputedStyle(el).display).to.not.equal("none");

    window.scrollY = 0;
  });

  it("stays shown just past the threshold and hides just below it", async () => {
    const el = await fixture(html`
      <auro-backtotop>Back to top</auro-backtotop>
    `);

    simulateScroll(0, 400);
    await el.updateComplete;
    expect(el.hasAttribute("hidden")).to.be.false;

    simulateScroll(0, 399);
    await el.updateComplete;
    expect(el.hasAttribute("hidden")).to.be.true;
  });

  it("tests click event", async () => {
    const el = await fixture(html`
      <auro-backtotop cssclass="testClass"></auro-backtotop>
    `);
    simulateScroll(0, 500);
    el.shadowRoot.querySelector("[part=button]").click();
    expect(document.documentElement.scrollTop).to.equal(0);
  });

  it("tests mouse-related events", async () => {
    const el = await fixture(html`
      <auro-backtotop cssclass="testClass"></auro-backtotop>
    `);

    el.dispatchEvent(new Event("mouseover"));
    expect(el.interactionActive).to.be.true;

    el.dispatchEvent(new Event("mouseout"));
    expect(el.interactionActive).to.be.false;
  });

  it("tests focus-related events", async () => {
    const el = await fixture(html`
      <auro-backtotop cssclass="testClass"></auro-backtotop>
    `);

    el.dispatchEvent(new Event("focusin"));
    expect(el.interactionActive).to.be.true;

    el.dispatchEvent(new Event("focusout"));
    expect(el.interactionActive).to.be.false;
  });

  it("auro-backtotop event triggering event click", async () => {
    const el = await fixture(html`
      <auro-backtotop cssclass="testClass"></auro-backtotop>
    `);
    el.shadowRoot.querySelector("[part=button]").click();
    el.shadowRoot
      .querySelector("[part=button]")
      .dispatchEvent(new Event("mouseover"));
  });

  function simulateScroll(x, y) {
    const scrollEvent = new CustomEvent("scroll", { detail: { x, y } });
    window.scrollX = x;
    window.scrollY = y;
    document.dispatchEvent(scrollEvent);
  }
});
