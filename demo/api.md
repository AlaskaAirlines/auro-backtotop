<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-backtotop

The auro-backtotop element provides users a way to quickly return to page top.

### Properties & Attributes

| Properties | Attributes | Type                               | Default   | Description                                                                                            |
| ---------- | ---------- | ---------------------------------- | --------- | ------------------------------------------------------------------------------------------------------ |
| disabled   | disabled   | boolean                            |           | Render the trigger inline, will always be visible.                                                     |
| variant    | variant    | 'primary' \| 'secondary' \| String | "primary" | The variant attribute allows for rendering the button using the primary (default) or secondary styles. |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

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

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-backtotop>Back to top</auro-backtotop>
  <!-- AURO-GENERATED-CONTENT:END -->
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicButtonOnly.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basicButtonOnly.html -->
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

### Attribute Examples

#### disabled

This example demonstrates auro-backtotop in its disabled state.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabledButtonOnly.html) -->
  <!-- The below content is automatically added from ./../apiExamples/disabledButtonOnly.html -->
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

#### variant

The `variant` attribute allows for rendering the button using the `primary` (default) or `secondary` styles.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/secondaryButtonOnly.html) -->
  <!-- The below content is automatically added from ./../apiExamples/secondaryButtonOnly.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/secondary.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/secondary.html -->

```html
<auro-backtotop variant="secondary">Back to top</auro-backtotop>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Slot Examples

#### default

The default slot defines the content of the button.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicButtonOnly.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basicButtonOnly.html -->
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

## Page Content For Demo

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/pageContent.html) -->
<!-- The below content is automatically added from ./../apiExamples/pageContent.html -->
<p>
  This component requires page content that is taller than the window. Below is `lorem ipsum` content to force a large document. A `back to top` button will appear when you begin to scroll down the page.
</p>
<i>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</i>
<!-- AURO-GENERATED-CONTENT:END -->
