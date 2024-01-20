# auro-backtotop

The auro-backtotop element provides users a way to quickly return to page top.

## Properties

| Property    | Attribute   | Type      | Default | Description                                      |
|-------------|-------------|-----------|---------|--------------------------------------------------|
| `disabled`  | `disabled`  | `Boolean` | false   | Render the trigger inline, will always be visible SEE MEE!!! |
| `secondary` | `secondary` | `Boolean` | false   | Adjust how far the user scrolls before the fixed button appears, expressed in CSS measurement units (`vh` recommended) |

## Slots

| Name | Description                              |
|------|------------------------------------------|
|      | Default slot for the text of the button. |

## CSS Shadow Parts

| Part     | Description                 |
|----------|-----------------------------|
| `button` | Apply CSS to HTML5 button.  |
| `icon`   | Apply CSS to arrow up icon. |
