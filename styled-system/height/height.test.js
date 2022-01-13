import { theme } from 'storybook/theme'

import { height } from './index'

const numberValue = `height: ${theme.factors.dimensions} * 1;`
const responsiveStringValue = `@media(min-width:${theme.queries.lg}){height: 300px;}`

test('check-$height-string', () => {
  expect(
    height({
      theme,
      $height: '300px'
    })
  ).toBe('height: 300px;')
})

test('check-$height-number', () => {
  expect(
    height({
      theme,
      $height: 1
    })
  ).toBe(numberValue)
})

test('check-$height-string-responsive-lg', () => {
  expect(
    height({
      theme,
      $height: [null, null, null, '300px']
    })
  ).toBe(responsiveStringValue)
})

// test('check-$height-string-responsive', () => {
//   expect(
//     height({
//       theme,
//       $height: 1
//     })
//   ).toBe(numberValue)
// })

// test('check-$height-number-responsive', () => {
//   expect(
//     height({
//       theme,
//       $height: [2, 2]
//     })
//   ).toBe(numberValue)
// })