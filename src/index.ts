export function tag(name: string, innerHTML: string, attributes?: Record<string, string>): string {
  return `<${name}${attributes ? Object.keys(attributes).map(k => ` ${k}="${attributes[k]}"`) : ''}>${innerHTML}</${name}>`
}

export function style(declarations: Record<string, string>): string {
  let s: string = ''
  for (const [key, value] of Object.entries(declarations)) {
    s += `${key}: ${value};`
  }
  return s
}