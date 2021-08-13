import { theme } from '../styles/theme'
import { border } from './border'

const stringValue = '1px'
const numberValue = 1
const colorToken = 'primary1'
const color = theme.colors.primary1
const style = 'solid'
const bt = `border-top-color: ${color};border-top-style: ${style};border-top-width: ${stringValue};`
const br = `border-right-color: ${color};border-right-style: ${style};border-right-width: ${stringValue};`
const bb = `border-bottom-color: ${color};border-bottom-style: ${style};border-bottom-width: ${stringValue};`
const bl = `border-left-color: ${color};border-left-style: ${style};border-left-width: ${stringValue};`
const b = `border-color: ${color};border-style: ${style};border-width: ${stringValue};`

//ToDo: unit testing for a html element

//Check string
test('check-bt-string', () => {
  expect(
    border({
      theme,
      bt: stringValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(bt)
})
test('check-br-string', () => {
  expect(
    border({
      theme,
      br: stringValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(br)
})
test('check-bb-string', () => {
  expect(
    border({
      theme,
      bb: stringValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(bb)
})
test('check-bl-string', () => {
  expect(
    border({
      theme,
      bl: stringValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(bl)
})
test('check-b-string', () => {
  expect(
    border({
      theme,
      b: stringValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(b)
})
// test('combine-props-string-check', () => {
//   expect(
//     border({
//       theme,
//       borderColor: colorToken,
//       borderStyle: style,
//       bt: stringValue,
//       br: stringValue,
//       bb: stringValue,
//       bl: stringValue,
//       b: stringValue,
//     })
//   ).toBe(`${borderColor}${borderStyle}${bt}${br}${bb}${bl}${b}`);
// })

//Check number
test('check-bt-number', () => {
  expect(
    border({
      theme,
      bt: numberValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(bt)
})
test('check-br-number', () => {
  expect(
    border({
      theme,
      br: numberValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(br)
})
test('check-bb-number', () => {
  expect(
    border({
      theme,
      bb: numberValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(bb)
})
test('check-bl-number', () => {
  expect(
    border({
      theme,
      bl: numberValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(bl)
})
test('check-b-number', () => {
  expect(
    border({
      theme,
      b: numberValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(b)
})
// test('combine-props-number-check', () => {
//   expect(
//     border({
//       theme,
//       borderColor: colorToken,
//       borderStyle: style,
//       bt: numberValue,
//       br: numberValue,
//       bb: numberValue,
//       bl: numberValue,
//       b: numberValue,
//     })
//   ).toBe(`${borderColor}${borderStyle}${bt}${br}${bb}${bl}${b}`);
// })