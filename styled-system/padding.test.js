import {padding} from './padding';

const stringValue = '24px';
const numberValue = 3;
const p = `padding: ${stringValue};`;
const pt = `padding-top: ${stringValue};`;
const pr = `padding-right: ${stringValue};`;
const pb = `padding-bottom: ${stringValue};`;
const pl = `padding-left: ${stringValue};`;
const px = `${pl}${pr}`;
const py = `${pt}${pb}`;

//String check
test('check-string-p', () => {
  expect(padding({p: stringValue})).toBe(p);
});
test('check-string-pt', () => {
  expect(padding({pt: stringValue})).toBe(pt);
});
test('check-string-pr', () => {
  expect(padding({pr: stringValue})).toBe(pr);
});
test('check-string-pb', () => {
  expect(padding({pb: stringValue})).toBe(pb);
});
test('check-string-pl', () => {
  expect(padding({pl: stringValue})).toBe(pl);
});
test('check-string-px', () => {
  expect(padding({px: stringValue})).toBe(px);
});
test('check-string-py', () => {
  expect(padding({py: stringValue})).toBe(py);
});
test('combine-prop-string-check', () => {
  expect(
    padding({
      pt: stringValue,
      pr: stringValue,
      pb: stringValue,
      pl: stringValue,
      px: stringValue,
      py: stringValue,
      p: stringValue,
    })
  ).toBe(`${pt}${pr}${pb}${pl}${px}${py}${p}`);
});

//Number check
test('check-number-p', () => {
  expect(padding({p: numberValue})).toBe(p);
});
test('check-number-pt', () => {
  expect(padding({pt: numberValue})).toBe(pt);
});
test('check-number-pr', () => {
  expect(padding({pr: numberValue})).toBe(pr);
});
test('check-number-pb', () => {
  expect(padding({pb: numberValue})).toBe(pb);
});
test('check-number-pl', () => {
  expect(padding({pl: numberValue})).toBe(pl);
});
test('check-number-px', () => {
  expect(padding({px: numberValue})).toBe(px);
});
test('check-number-py', () => {
  expect(padding({py: numberValue})).toBe(py);
});
test('combine-prop-number-check', () => {
  expect(
    padding({
      pt: numberValue,
      pr: numberValue,
      pb: numberValue,
      pl: numberValue,
      px: numberValue,
      py: numberValue,
      p: numberValue,
    })
  ).toBe(`${pt}${pr}${pb}${pl}${px}${py}${p}`);
});