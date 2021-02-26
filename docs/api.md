# auro-back-to-top

auro-back-to-top provides helps users quickly return to page top.

## Properties

| Property    | Attribute   | Type         | Default      | Description                                      |
|-------------|-------------|--------------|--------------|--------------------------------------------------|
| `arialabel` | `arialabel` | `String`     |              | Customize `title` element of the default icon, viewed on tooltip and read by screenreaders |
| `inline`    | `inline`    | `Boolean`    | false        | Render the trigger inline, will always be visible |
| `offset`    | `offset`    | `String`     | "100vh"      | Adjust how far the user scrolls before the fixed button appears, expressed in CSS measurement units (`vh` recommended) |
| `svg`       |             | `any \| any` | "firstChild" |                                                  |
| `visible`   | `visible`   | `Boolean`    | false        | Indicates trigger visibility                     |

## Methods

| Method      | Type       |
|-------------|------------|
| `scrollTop` | `(): void` |

## Slots

| Name | Description               |
|------|---------------------------|
|      | Customize trigger content |
