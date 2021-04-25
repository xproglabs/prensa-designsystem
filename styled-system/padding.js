import {get} from 'lodash';

export const padding = ({
  theme = {},
  px = '',
  py = '',
  pt = '',
  pr = '',
  pb = '',
  pl = '',
  p = '',
}) => {

  const unit = get(theme, 'factors.padding', 8);
  let object = [];

  pt !== undefined && isNaN(pt) ?
    object.push(`padding-top: ${pt};`) :
    pt && object.push(`padding-top: ${unit * pt}px;`);

  pr !== undefined && isNaN(pr) ?
    object.push(`padding-right: ${pr};`) :
    pr && object.push(`padding-right: ${unit * pr}px;`);

  pb !== undefined && isNaN(pb) ?
    object.push(`padding-bottom: ${pb};`) :
    pb && object.push(`padding-bottom: ${unit * pb}px;`);

  pl !== undefined && isNaN(pl) ?
    object.push(`padding-left: ${pl};`) :
    pl && object.push(`padding-left: ${unit * pl}px;`);

  px !== undefined && isNaN(px) ?
    object.push(`padding-left: ${px};padding-right: ${px};`) :
    px && object.push(`padding-left: ${unit * px}px;padding-right: ${unit * px}px;`);

  py !== undefined && isNaN(py) ?
    object.push(`padding-top: ${py};padding-bottom: ${py};`) :
    py && object.push(`padding-top: ${unit * py}px;padding-bottom: ${unit * py}px;`);

  p !== undefined && isNaN(p) ?
    object.push(`padding: ${p};`) :
    p && object.push(`padding: ${p * unit}px;`);

  return object.join('');
};