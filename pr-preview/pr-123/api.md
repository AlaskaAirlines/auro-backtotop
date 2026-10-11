<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-backtotop

The `auro-backtotop` element provides users a way to quickly return to page top.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                     | Default   | Description                                                                                            |
| ---------- | ---------- | --------- | ------------------------ | --------- | ------------------------------------------------------------------------------------------------------ |
| disabled   | disabled   |           | boolean                  | `false`   | Render the trigger inline, will always be visible.                                                     |
| variant    | variant    |           | `primary` \| `secondary` | `primary` | The variant attribute allows for rendering the button using the primary (default) or secondary styles. |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name      | Description                                              |
| --------- | -------------------------------------------------------- |
| (default) | Default slot for the text of the button.                 |
| ariaLabel | Use this slot to pass an aria-label to the HTML5 button. |

### CSS Shadow Parts

| Name   | Description                 |
| ------ | --------------------------- |
| button | Apply CSS to HTML5 button.  |
| icon   | Apply CSS to arrow up icon. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-backtotop>Back to top</auro-backtotop>
  <!-- AURO-GENERATED-CONTENT:END -->
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic_button-only.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic_button-only.html -->
  <auro-button
    aria-label="arrow-up"
    shape="pill"
    size="lg">
    Back to top
    <auro-icon customcolor category="interface" name="arrow-up" slot="icon" part="icon"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-backtotop>Back to top</auro-backtotop>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Disabled

This example demonstrates auro-backtotop in its disabled state.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled_button-only.html) -->
  <!-- The below content is automatically added from ./../apiExamples/disabled_button-only.html -->
  <auro-button
    aria-label="arrow-up"
    disabled
    shape="pill"
    size="lg">
    Back to top
    <auro-icon customcolor category="interface" name="arrow-up" slot="icon" part="icon"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabled.html -->

```html
<auro-backtotop disabled>Back to top</auro-backtotop>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Variant

The `variant` attribute allows for rendering the button using the `primary` (default) or `secondary` styles.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant_button-only.html) -->
  <!-- The below content is automatically added from ./../apiExamples/variant_button-only.html -->
  <auro-button
    variant="secondary"
    shape="pill"
    size="lg">
    Back to top
    <auro-icon customcolor category="interface" name="arrow-up" slot="icon" part="icon"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/variant.html -->

```html
<auro-backtotop variant="secondary">Back to top</auro-backtotop>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot Examples

### Aria Label

The `ariaLabel` slot allows you to pass an aria-label to the HTML5 button. The default value is `"arrow-up"`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label_button-only.html) -->
  <!-- The below content is automatically added from ./../apiExamples/aria-label_button-only.html -->
  <auro-button
    aria-label="Custom aria-label goes here!"
    shape="pill"
    size="lg">
    Back to top
    <auro-icon customcolor category="interface" name="arrow-up" slot="icon" part="icon"></auro-icon>
  </auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/aria-label.html -->

```html
<auro-backtotop>
  Back to top
</auro-backtotop>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
