import {dimensions} from './dimensions';

const stringValue = '550px';
const numberValue = 55;
const width = `width: ${stringValue};`;
const maxWidth = `max-width: ${stringValue};`;
const minWidth = `min-width: ${stringValue};`;

//ToDo: unit testing for a html element

//String check
test('check-string-width', () => {
  expect(dimensions({$width: stringValue})).toBe(width);
});
test('check-string-maxWidth', () => {
  expect(dimensions({maxWidth: stringValue})).toBe(maxWidth);
});
test('check-string-minWidth', () => {
  expect(dimensions({minWidth: stringValue})).toBe(minWidth);
});
test('combine-prop-string-check', () => {
  expect(
    dimensions({
      $width: stringValue,
      maxWidth: stringValue,
      minWidth: stringValue,
    })
  ).toBe(`${maxWidth}${minWidth}${width}`);
});

// //Number check
test('check-number-width', () => {
  expect(dimensions({$width: numberValue})).toBe(width);
});
test('check-number-maxWidth', () => {
  expect(dimensions({maxWidth: numberValue})).toBe(maxWidth);
});
test('check-number-minWidth', () => {
  expect(dimensions({minWidth: numberValue})).toBe(minWidth);
});
test('combine-prop-number-check', () => {
  expect(
    dimensions({
      $width: numberValue,
      maxWidth: numberValue,
      minWidth: numberValue,
    })
  ).toBe(`${maxWidth}${minWidth}${width}`);
});