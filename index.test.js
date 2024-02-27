import { Reactive, tag, style } from './dist/index.js'

let variable = new Reactive([1, 2, 3])
variable.subscribe(x => console.log(x))