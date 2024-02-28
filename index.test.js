import { Reactive, addChild, button, tag } from './dist/index'

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