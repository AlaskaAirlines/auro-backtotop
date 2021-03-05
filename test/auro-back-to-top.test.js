import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-back-to-top.js';

/* eslint-disable no-magic-numbers */

describe('auro-back-to-top', () => {
  const sandbox = sinon.createSandbox();
  let consoleWarnStub, intersectionStub, observeStub; // eslint-disable-line init-declarations

  beforeEach(() => {
    consoleWarnStub = sandbox.stub(console, 'warn');
    observeStub = sandbox.stub();
    intersectionStub = sandbox.stub(window, 'IntersectionObserver').callsFake(() => ({
      observe: observeStub,
    }));
  });
  afterEach(() => {
    sandbox.restore();
  });

  it('is accessible', async () => {
    const el = await fixture(html`
      <auro-back-to-top></auro-back-to-top>
    `);

    await expect(el).to.be.accessible();
  });

  it('defines fixed trigger and Intersection Observer', async () => {
    const el = await fixture(html`
      <auro-back-to-top></auro-back-to-top>
    `),
     root = el.shadowRoot,
     iconEl = root.querySelector('.icon'), // eslint-disable-line sort-vars
     referenceEl = root.querySelector('.reference'), // eslint-disable-line sort-vars
     triggerEl = root.querySelector('.trigger');

    await elementUpdated(el);

    await expect(iconEl, 'Expect icon element to exist').to.exist;
    await expect(referenceEl, 'Expect reference element to exist').to.exist;
    await expect(triggerEl, 'Expect trigger element to exist').to.exist;
    await expect(triggerEl.classList.contains('trigger--inline')).to.be.false;
    await expect(triggerEl.classList.contains('trigger--visible')).to.be.false;
    await expect(triggerEl.textContent).to.match(/back to top/iu);
  });

  it('defines fixed trigger and is always visible when Intersection Observers are not supported', async () => {
    Reflect.deleteProperty(window, 'IntersectionObserver');

    // eslint-disable-next-line one-var
    const el = await fixture(html`
      <auro-back-to-top></auro-back-to-top>
    `),
     root = el.shadowRoot,
     triggerEl = root.querySelector('.trigger');

    await elementUpdated(el);

    await expect(triggerEl, 'Expect trigger element to exist').to.exist;
    await expect(triggerEl.classList.contains('trigger--visible')).to.be.true;
  });

  it('sets up an Intersection Observer', async () => {
    const el = await fixture(html`
      <auro-back-to-top></auro-back-to-top>
    `),
     root = el.shadowRoot,
     referenceEl = root.querySelector('.reference'); // eslint-disable-line sort-vars

    await elementUpdated(el);

    await expect(intersectionStub).to.have.been.calledOnce;
    await expect(intersectionStub).to.have.been.calledWithNew;
    await expect(intersectionStub).to.have.been.calledWith(sinon.match.func, sinon.match({
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [
        0.0,
        1.0
      ],
    }));
    await expect(observeStub).to.have.been.calledOnce;
    await expect(observeStub).to.have.been.calledWith(referenceEl);
  });

  it('scrolls to top on trigger click', async () => {
    sandbox.spy(window, 'scrollTo');
    const el = await fixture(html`
      <auro-back-to-top></auro-back-to-top>
    `),
     triggerEl = el.shadowRoot.querySelector('.trigger');

     await elementUpdated(el);

     await triggerEl.click();
     await expect(window.scrollTo).to.have.been.calledOnce;
     await expect(window.scrollTo).to.have.been.calledWith(0, 0);
  });

  describe('properties', () => {
    it('defines only inline element with `inline` property', async () => {
      const el = await fixture(html`
      <auro-back-to-top inline></auro-back-to-top>
      `),
      root = el.shadowRoot,
      iconEl = root.querySelector('.icon'), // eslint-disable-line sort-vars
      referenceEl = root.querySelector('.reference'), // eslint-disable-line sort-vars
      triggerEl = root.querySelector('.trigger');

      await elementUpdated(el);

      await expect(iconEl, 'Expect icon element to exist').to.exist;
      await expect(referenceEl, 'Expect reference element to not exist').to.not.exist;
      await expect(triggerEl, 'Expect trigger element to exist').to.exist;
      await expect(triggerEl.classList.contains('trigger--inline')).to.be.true;
      await expect(triggerEl.classList.contains('trigger--visible')).to.be.true;
      await expect(triggerEl.textContent).to.match(/back to top/iu);
      await expect(intersectionStub).to.not.have.been.called;
    });

    it('customizes offset where intersection occurs with `offset` property', async () => {
      const el = await fixture(html`
        <auro-back-to-top offset="42vh"></auro-back-to-top>
      `),
      root = el.shadowRoot;

      await elementUpdated(el);

      await expect(intersectionStub).to.have.been.calledWith(sinon.match.func, sinon.match({
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [
          0.0,
          1.0
        ],
      }));
      expect(root.querySelector('.reference').style.height).to.equal('42vh');
    });
    it('assigns focus to element with id matching `focus` property', async() => {
      const parentNode = document.createElement('main');

       parentNode.setAttribute('id', 'top');
       parentNode.setAttribute('tabindex', '-1');
       sandbox.spy(parentNode, 'focus');

      // eslint-disable-next-line one-var
      const el = await fixture(html`
        <auro-back-to-top inline focus="top"></auro-back-to-top>
      `, { parentNode });

      await elementUpdated(el);
      await el.shadowRoot.querySelector('.trigger').click();

      expect(document.activeElement).to.equal(parentNode);
      expect(parentNode.focus).to.be.calledWith({ preventScroll: true });
      expect(consoleWarnStub).not.to.have.been.called;
    });
    it('warns when `focus` property not set', async() => {
      const parentNode = document.createElement('main');

      parentNode.setAttribute('id', 'top');
      parentNode.setAttribute('tabindex', '-1');

      // eslint-disable-next-line one-var
      const el = await fixture(html`
        <auro-back-to-top inline></auro-back-to-top>
      `, { parentNode });

      await elementUpdated(el);
      await el.shadowRoot.querySelector('.trigger').click();
      
      expect(document.activeElement).not.to.equal(parentNode);
      expect(consoleWarnStub).to.have.been.calledOnce;
      expect(consoleWarnStub).to.have.been.calledWith(sinon.match(/required `focus` attribute missing/iu));
    });
    it('warn when element with id matching `focus` property cannot be found', async() => {
      const parentNode = document.createElement('main');

      parentNode.setAttribute('id', 'top');
      parentNode.setAttribute('tabindex', '-1');

      // eslint-disable-next-line one-var
      const el = await fixture(html`
        <auro-back-to-top inline focus="broken"></auro-back-to-top>
      `, { parentNode });

      await elementUpdated(el);
      await el.shadowRoot.querySelector('.trigger').click();

      expect(document.activeElement).not.to.equal(parentNode);
      expect(consoleWarnStub).to.have.been.calledOnce;
      expect(consoleWarnStub).to.have.been.calledWith(sinon.match(/check that the element exists/iu));
    });
    it('warns when element with id matching `focus` property cannot receive focus', async() => {
      const parentNode = document.createElement('main');

      parentNode.setAttribute('id', 'top');

      // eslint-disable-next-line one-var
      const el = await fixture(html`
        <auro-back-to-top inline focus="top"></auro-back-to-top>
      `, { parentNode });

      await elementUpdated(el);
      await el.shadowRoot.querySelector('.trigger').click();

      expect(document.activeElement).not.to.equal(parentNode);
      expect(consoleWarnStub).to.have.been.calledOnce;
      expect(consoleWarnStub).to.have.been.calledWith(sinon.match(/check this is a focusable element/iu));
    });
  });
});

/* eslint-enable no-magic-numbers */