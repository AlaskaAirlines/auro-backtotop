# auro-back-to-top

auro-back-to-top provides helps users quickly return to page top.

## Properties

| Property | Attribute | Type      | Default | Description                                      |
|----------|-----------|-----------|---------|--------------------------------------------------|
| `focus`  | `focus`   | `String`  |         | Id attribute of the element to receive focus when trigger is clicked |
| `inline` | `inline`  | `Boolean` | false   | Render the trigger inline, will always be visible |
| `offset` | `offset`  | `String`  | "100vh" | Adjust how far the user scrolls before the fixed button appears, expressed in CSS measurement units (`vh` recommended) |

## Slots

| Name | Description               |
|------|---------------------------|
|      | Customize trigger message |
