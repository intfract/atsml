import { Reactive, addChild, button, tag } from './dist/index'

let counter = new Reactive(0)
const btn = button([counter], {}, e => counter.value++)
addChild(
  document.body,
  btn,
)