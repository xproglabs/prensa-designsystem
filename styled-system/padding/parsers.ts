export function generatePT(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `padding-top: ${value};`
  if (typeof value === 'number') return `padding-top: ${value * factor};`
}
export function generatePR(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `padding-right: ${value};`
  if (typeof value === 'number') return `padding-right: ${value * factor};`
}
export function generatePB(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `padding-bottom: ${value};`
  if (typeof value === 'number') return `padding-bottom: ${value * factor};`
}
export function generatePL(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `padding-left: ${value};`
  if (typeof value === 'number') return `padding-left: ${value * factor};`
}
export function generatePX(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `
    padding-left: ${value};
    padding-right: ${value};
  `
  if (typeof value === 'number') return `
    padding-left: ${value * factor};
    padding-right: ${value * factor};
  `
}
export function generatePY(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `
    padding-top: ${value};
    padding-bottom: ${value};
  `
  if (typeof value === 'number') return `
    padding-top: ${value * factor};
    padding-bottom: ${value * factor};
  `
}
export function generateP(value, factor) {
  if (!value) return ''
  if (typeof value === 'string') return `
    padding-top: ${value};
    padding-right: ${value};
    padding-bottom: ${value};
    padding-left: ${value};
  `
  if (typeof value === 'number') return `
    padding-top: ${value * factor};
    padding-right: ${value * factor};
    padding-bottom: ${value * factor};
    padding-left: ${value * factor};
  `
}