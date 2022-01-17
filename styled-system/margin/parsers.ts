export function generateMT(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `margin-top: ${value};`
  if (typeof value === 'number') return `margin-top: ${value * factor};`
}
export function generateMR(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `margin-right: ${value};`
  if (typeof value === 'number') return `margin-right: ${value * factor};`
}
export function generateMB(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `margin-bottom: ${value};`
  if (typeof value === 'number') return `margin-bottom: ${value * factor};`
}
export function generateML(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `margin-left: ${value};`
  if (typeof value === 'number') return `margin-left: ${value * factor};`
}
export function generateMX(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `
    margin-left: ${value};
    margin-right: ${value};
  `
  if (typeof value === 'number') return `
    margin-left: ${value * factor};
    margin-right: ${value * factor};
  `
}
export function generateMY(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `
    margin-top: ${value};
    margin-bottom: ${value};
  `
  if (typeof value === 'number') return `
    margin-top: ${value * factor};
    margin-bottom: ${value * factor};
  `
}
export function generateM(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `
    margin-top: ${value};
    margin-right: ${value};
    margin-bottom: ${value};
    margin-left: ${value};
  `
  if (typeof value === 'number') return `
    margin-top: ${value * factor};
    margin-right: ${value * factor};
    margin-bottom: ${value * factor};
    margin-left: ${value * factor};
  `
}