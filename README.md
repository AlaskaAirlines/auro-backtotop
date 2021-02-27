# Back-to-top

`<auro-back-to-top>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of helping visitors quickly return to page top.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/workflow/status/AlaskaAirlines/auro-back-to-top/Test%20and%20publish?branch=master&style=for-the-badge)](https://github.com/AlaskaAirlines/auro-back-to-top/actions?query=workflow%3A%22test+and+publish%22)
[![See it on NPM!](https://img.shields.io/npm/v/@aurolabs/auro-back-to-top?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurolabs/auro-back-to-top)
[![License](https://img.shields.io/npm/l/@aurolabs/auro-back-to-top?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @aurolabs/auro-back-to-top
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-back-to-top>` component.

```javascript
import "@aurolabs/auro-back-to-top";
```

**Reference component in HTML**

```html
<auro-back-to-top></auro-back-to-top>
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use. Two bundles are available -- `auro-back-to-top__bundled.js` for modern browsers and `auro-back-to-top__bundled.es5.js` for legacy browsers (including IE11).

Since the legacy bundle includes many polyfills that are not needed by modern browsers, we recommend you load these bundles using [differential serving](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) so that the browser only loads the bundle it needs. To accomplish this, the script tag for the modern bundle should have `type="module"` and the script tag for the legacy bundle should have the `nomodule` attribute. See the example below.

**NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any MAJOR releases, use at your own risk.

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />

<script src="https://unpkg.com/@aurolabs/auro-back-to-top@latest/dist/auro-back-to-top__bundled.js" type="module"></script>
<script src="https://unpkg.com/@aurolabs/auro-back-to-top@latest/dist/auro-back-to-top__bundled.es5.js" nomodule></script>
```

## auro-back-to-top use cases

The `<auro-back-to-top>` element should be used in situations where users may:

* informational pages with many sections
* pages with infinite scroll

## API Code Examples

Default (fixed positioning):

```html
<auro-back-to-top></auro-back-to-top>
```

Adjust how soon or delayed the button shows either by where you include the element in your document or with the `rootmargintop` property:

```html
<!-- delay showing the button by 120px -->
<auro-back-to-top rootmargintop="120px"></auro-back-to-top>
```

To display inline:

```html
<auro-back-to-top inline></auro-back-to-top>
```

For i18n support:

```html
<auro-back-to-top arialabel="volver arriba">volver arriba</auro-back-to-top>
```

You can customize what renders in the button:

```html
<auro-back-to-top inline arialabel="zoom back to top">zoom zoom! 🚀</auro-back-to-top>
```

## Known issues and workarounds

Known issues with `auro-back-to-top` element and its fixed-position button trace back to stacking context. The [MDN documentation on `position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) explains how this works in more detail.

#### **The button does not become visible at the expected scroll height**

To know when to show and hide the fixed button, `auro-back-to-top` uses a reference element positioned absolutely to `top`. Placing the `auro-back-to-top` as the last content node in the `body` is encouraged. If not possible, look for parent nodes with `position` set other than the default, static. 

#### **The button scrolls _under_ elements on the page**

The fixed button applies a high `z-index` to improve its odds of rendering above content but it can still lose. The suggestion above can help here, too: placing the `auro-back-to-top` as the last content node in the `body`. If not possible, inspect the `position` and `z-index` styles applied to elements it scrolls under, use negative z-index if necessary to allow the button to scroll over top.

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open two different shell sessions. One is for the **npm tasks**, the second is to run the **server**.

```shell
// shell terminal one
$ npm run dev

// shell terminal two
$ npm run serve
```

Open [localhost:8000](http://localhost:8000/)

### Testing
Automated tests are required for every Auro component. See `.\test\auro-back-to-top.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.

### Demo deployment

To deploy a demo version of the component for review, run `npm run demo:build` to create a `./build` directory that can be pushed to any static server.
