import { Reactive, addChild, input, tag } from './dist/index'

let textBind = new Reactive("Hello, world!")

addChild(
  document.body,
  [
    tag(
      'p',
      [
        textBind,
      ],
    ),
    input('text', {}, textBind),
  ],
)