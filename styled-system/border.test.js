import {border} from './border';
import {theme} from '../styles/theme';

const stringValue = '1px';
const numberValue = 1;
const colorToken = 'primary1';
const color = theme.colors.primary1;
const style = 'solid';
const bt = `border-top-color: ${color};border-top-style: ${style};border-top-width: ${stringValue};`;
const br = `border-right-color: ${color};border-right-style: ${style};border-right-width: ${stringValue};`;
const bb = `border-bottom-color: ${color};border-bottom-style: ${style};border-bottom-width: ${stringValue};`;
const bl = `border-left-color: ${color};border-left-style: ${style};border-left-width: ${stringValue};`;
const b = `border-color: ${color};border-style: ${style};border-width: ${stringValue};`;

//Check string
test('check-bt', () => {
  expect(
    border({
      theme,
      bt: stringValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(bt);
})
test('check-br', () => {
  expect(
    border({
      theme,
      br: stringValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(br);
})
test('check-bb', () => {
  expect(
    border({
      theme,
      bb: stringValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(bb);
})
test('check-bl', () => {
  expect(
    border({
      theme,
      bl: stringValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(bl);
})
test('check-b', () => {
  expect(
    border({
      theme,
      b: stringValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(b);
})

//Check number
test('check-bt', () => {
  expect(
    border({
      theme,
      bt: numberValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(bt);
})
test('check-br', () => {
  expect(
    border({
      theme,
      br: numberValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(br);
})
test('check-bb', () => {
  expect(
    border({
      theme,
      bb: numberValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(bb);
})
test('check-bl', () => {
  expect(
    border({
      theme,
      bl: numberValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(bl);
})
test('check-b', () => {
  expect(
    border({
      theme,
      b: numberValue,
      borderColor: colorToken,
      borderStyle: style
    })
  ).toBe(b);
})