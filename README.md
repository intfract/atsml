# ATSML
Advanced TypeScript Markup Language

## About

ATSML is a lightweight ESM library for creating reactive web applications.

> [!WARNING]
> ATSML is still under development.

## Examples

### Counter

This code creates a **reactive** button that counts the number of times it has been clicked.

```js
import { Reactive, addChild, button, tag } from 'atsml'

let counter = new Reactive(0)
const btn = button(['count: ', counter], {}, e => counter.value++)
addChild(
  document.body,
  [
    tag(
      'p',
      [
        'Click the button to increment its value!'
      ],
    ),
    btn,
  ],
)
```

## Contributing

All contributions are welcome!