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