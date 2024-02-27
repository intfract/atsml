type Subscriber<T> = ((value: T) => any)

export class Reactive<T> {
  _value: T
  subscribers: Subscriber<T>[] = []
  constructor(value: T) {
    this._value = value
  }

  subscribe(subscriber: Subscriber<T>): this {
    this.subscribers.push(subscriber)
    return this
  }

  broadcast() {
    this.subscribers.forEach(subscriber => subscriber(this.value))
  }

  get value(): T {
    return this._value
  }

  set value(newValue: T) {
    this._value = newValue
    this.subscribers.forEach(subscriber => subscriber(newValue))
  }
}

export function tag(name: string, innerHTML: string, attributes?: Record<string, string>): string {
  return `<${name}${attributes ? Object.keys(attributes).map(k => ` ${k}="${attributes[k]}"`) : ''}>${innerHTML}</${name}>`
}

export function h(level: 1 | 2 | 3 | 4 | 5 | 6, innerHTML: string, attributes?: Record<string, string>) {
  return tag(`h${level}`, innerHTML, attributes)
}

export function img(attributes?: Record<string, string>) {
  return `<img${attributes ? Object.keys(attributes).map(k => ` ${k}="${attributes[k]}"`) : ''}/>`
}

export function input(attributes?: Record<string, string>) {
  return `<input${attributes ? Object.keys(attributes).map(k => ` ${k}="${attributes[k]}"`) : ''}/>`
}

export function style(declarations: Record<string, string>): string {
  let s: string = ''
  for (const [key, value] of Object.entries(declarations)) {
    s += `${key}: ${value};`
  }
  return s
}