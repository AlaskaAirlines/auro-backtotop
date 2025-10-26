# auro-backtotop

The auro-backtotop element provides users a way to quickly return to page top.

## Properties

| Property   | Attribute  | Type      | Default   | Description                                      |
|------------|------------|-----------|-----------|--------------------------------------------------|
| `disabled` | `disabled` | `Boolean` | false     | Render the trigger inline, will always be visible. |
| `variant`  | `variant`  | `Boolean` | "primary" | Allows for the primary and secondary button styles. |

## Slots

| Name        | Description                                      |
|-------------|--------------------------------------------------|
|             | Default slot for the text of the button.         |
| `ariaLabel` | Use this slot to pass an aria-label to the HTML5 button. |

## CSS Shadow Parts

| Part     | Description                 |
|----------|-----------------------------|
| `button` | Apply CSS to HTML5 button.  |
| `icon`   | Apply CSS to arrow up icon. |
