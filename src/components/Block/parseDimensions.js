import { get } from 'lodash'

//ToDo: Deprecate parseDimensions
// export const parseWidth = (props, theme) => {
//   const unit = theme.factors.padding;
//   const width = get(props, '$width', undefined);
//   const fullWidth = get(props, 'fullWidth', undefined);
//   const px = get(props, 'px', undefined);
//   const pl = get(props, 'pl', undefined);
//   const pr = get(props, 'pr', undefined);
//   if (fullWidth) {
//     if (px) {
//       if (typeof px === 'string') return `width: calc(100% - ${px} - ${px})`;
//       return `width: calc(100% - ${px * unit}px - ${px * unit}px)`;
//     }
//     if (pl && pr) {
//       if (typeof pl === 'string' && typeof pr === 'string') return `width: calc(100% - ${pl} - ${pr})`;
//       return `width: calc(100% - ${pl * unit}px - ${pr * unit}px)`;
//     }
//     if (pl) {
//       if (typeof pl === 'string') return `width: calc(100% - ${pl})`;
//       return `width: calc(100% - ${pl * unit}px)`;
//     }
//     if (pr) {
//       if (typeof pr === 'string') return `width: calc(100% - ${pr})`;
//       return `width: calc(100% - ${pr * unit}px)`;
//     }
//     return 'width: 100%';
//   } else if (!width) {
//     return '';
//   } else if (typeof width === 'string') {
//     return `width: ${width}`;
//   } else {
//     return `width: ${width * theme.factors.dimensions}px`;
//   }
// };

export const parseHeight = (props, theme) => {
  const unit = theme.factors.padding
  const height = get(props, '$height', undefined)
  const fullHeight = get(props, 'fullHeight', undefined)
  const py = get(props, 'py', undefined)
  const pt = get(props, 'pt', undefined)
  const pb = get(props, 'pb', undefined)
  if (fullHeight) {
    if (py) {
      if (typeof py === 'string') return `height calc(100% - ${py} - ${py})`
      return `height: calc(100% - ${py * unit}px - ${py * unit}px)`
    }
    if (py && pb) {
      if (typeof pt === 'string' && typeof pb === 'string') return `height calc(100% - ${pt} - ${pb})`
      return `height: calc(100% - ${pt * unit}px - ${pb * unit}px)`
    }
    if (pt) {
      if (typeof pt === 'string') return `height calc(100% - ${pt})`
      return `height: calc(100% - ${pt * unit}px)`
    }
    if (pb) {
      if (typeof pb === 'string') return `height calc(100% - ${pb})`
      return `height calc(100% - ${pb * unit}px)`
    }
    return 'height: 100%'
  } else if (!height) {
    return ''
  } else if (typeof height === 'string') {
    if (py && fullHeight) return `height: calc(100% - ${py} - ${py})`
    return `height: ${height}`
  } else {
    if (py && fullHeight) return `height: calc(100% - ${height * theme.factors.dimensions}px)`
    return `height: ${height * theme.factors.dimensions}px`
  }
}