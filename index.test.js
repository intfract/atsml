import { Reactive, addChild, input, tag } from './dist/index'

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