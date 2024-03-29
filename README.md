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

let counter = new Reactive(0) // create a reactive object with value 0
const btn = button(
  ['count: ', counter], // children
  {}, // attributes
  e => counter.value++, // click event listener
)

addChild(
  document.body,
  [
    tag(
      'p',
      [
        'Click the button to increment its value!',
      ],
    ),
    btn,
  ],
)
```

## Input Binding

```js
import { Reactive, addChild, input, tag } from 'atsml'

let textBind = new Reactive('Hello, world!') // create a reactive object with value 'Hello, world!'

addChild(
  document.body,
  [
    tag(
      'p',
      [
        textBind,
      ],
    ),
    input(
      'text', // input type
      {}, // attributes
      textBind, // value binding
    ),
  ],
)
```

## Contributing

All contributions are welcome!