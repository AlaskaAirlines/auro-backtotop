<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-backtotop

A button that takes people back to the top of a long page.

Key capabilities:
- **Appears after scrolling**: The button always stays hidden near the top of the page and appears in the bottom-right corner once the page is scrolled 400 pixels or more.
- **Expands on hover**: The button always shows only an arrow-up icon until a pointer moves over it, then shows its text.
- **Quieter style**: Set `variant="secondary"` for a less prominent button.

### Properties and attributes

| Properties | Attributes | Modifiers | Type                     | Default   | Description                                                                                                                                                      |
| ---------- | ---------- | --------- | ------------------------ | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| disabled   | disabled   |           | boolean                  |           | Turns the button off, so it's shown in a muted style and can't be clicked. Doesn't currently stop a tap on a touch screen from scrolling to the top of the page. |
| variant    | variant    |           | `primary` \| `secondary` | `primary` | Sets the button's visual emphasis. `primary` uses auro-button's strongest style, and `secondary` a quieter one.                                                  |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name      | Description                                                                                                                                                                                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default) | Text shown beside the icon while a pointer is over the button, such as "Back to top". Screen readers read the `ariaLabel` slot instead.                                                       |
| ariaLabel | Text read by screen readers in place of the visible label, such as "Back to top". Set it on every back-to-top button, because the fallback, "arrow-up", names the icon instead of the action. |

### CSS shadow parts

| Name   | Description                                                                                |
| ------ | ------------------------------------------------------------------------------------------ |
| button | The `auro-button` element that holds the arrow-up icon and text.                           |
| icon   | The `auro-icon` element that shows the arrow-up icon.                                      |
| text   | The `<span>` that holds the text shown beside the icon while a pointer is over the button. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic.html -->
<auro-backtotop>
<span slot="ariaLabel">Back to top</span>
    Back to top
</auro-backtotop>
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic_button-only.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic_button-only.html -->
<auro-button
    aria-label="Back to top"
    shape="pill"
    size="lg">
    Back to top
<auro-icon customcolor category="interface" name="arrow-up"></auro-icon>
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-backtotop&gt;
  &lt;span slot="ariaLabel"&gt;Back to top&lt;/span&gt;
  Back to top
&lt;/auro-backtotop&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Disabled

Set `disabled` to turn the button off.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled_button-only.html) -->
<!-- The below content is automatically added from ./../apiExamples/disabled_button-only.html -->
<auro-button
    aria-label="Back to top"
    disabled
    shape="pill"
    size="lg">
    Back to top
<auro-icon customcolor category="interface" name="arrow-up"></auro-icon>
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabled.html -->

<pre class="language-html"><code class="language-html">&lt;auro-backtotop disabled&gt;
  &lt;span slot="ariaLabel"&gt;Back to top&lt;/span&gt;
  Back to top
&lt;/auro-backtotop&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Variant

Set `variant="secondary"` for a quieter button. The default is `primary`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/variant_button-only.html) -->
<!-- The below content is automatically added from ./../apiExamples/variant_button-only.html -->
<auro-button
    aria-label="Back to top"
    variant="secondary"
    shape="pill"
    size="lg">
    Back to top
<auro-icon customcolor category="interface" name="arrow-up"></auro-icon>
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/variant.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/variant.html -->

<pre class="language-html"><code class="language-html">&lt;auro-backtotop variant="secondary"&gt;
  &lt;span slot="ariaLabel"&gt;Back to top&lt;/span&gt;
  Back to top
&lt;/auro-backtotop&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot examples

### ARIA label

Use the `ariaLabel` slot to set the text screen readers read for the button, such as "Back to top". Without it, screen readers read "arrow-up", which names the icon instead of the action.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label_button-only.html) -->
<!-- The below content is automatically added from ./../apiExamples/aria-label_button-only.html -->
<auro-button
    aria-label="Back to top"
    shape="pill"
    size="lg">
    Back to top
<auro-icon customcolor category="interface" name="arrow-up"></auro-icon>
</auro-button>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/aria-label.html -->

<pre class="language-html"><code class="language-html">&lt;auro-backtotop&gt;
  &lt;span slot="ariaLabel"&gt;Back to top&lt;/span&gt;
  Back to top
&lt;/auro-backtotop&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
