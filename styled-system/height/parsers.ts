export function parseStringHeight(value) {
  return `height: ${value};`
}

export function parseNumberHeight(value, factor) {
  return `height: ${value * factor};`
}