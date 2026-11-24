# auro-backtotop

A button that takes people back to the top of a long page.

Key capabilities:
- **Stays in view**: The button always sits in the bottom-right corner of the page.
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