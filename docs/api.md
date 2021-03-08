# auro-back-to-top

auro-back-to-top provides helps users quickly return to page top.

## Properties

| Property  | Attribute  | Type      | Default | Description                                      |
|-----------|------------|-----------|---------|--------------------------------------------------|
| `focusId` | `focus-id` | `String`  |         | Required id of element to receive focus when trigger is clicked. Target element needs to be focusable or have a tabindex value of -1. |
| `inline`  | `inline`   | `Boolean` | false   | Render the trigger inline, will always be visible |
| `offset`  | `offset`   | `String`  | "100vh" | Adjust how far the user scrolls before the fixed button appears, expressed in CSS measurement units (`vh` recommended) |

## Slots

| Name | Description               |
|------|---------------------------|
|      | Customize trigger message |
