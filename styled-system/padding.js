import {get} from 'lodash';

export const parsePadding = props => {

  if (!props) return '';
  const theme = get(props, 'theme', {});
  const {px, py, pt, pr, pb, pl} = props;

  let object = [];
  let factor = theme.factors.padding;

  px !== undefined && isNaN(px) ?
    object.push(`
      padding-left: ${px}; 
      padding-right: ${px};
    `) :
    px && object.push(`
      padding-left: ${factor * px}px; 
      padding-right: ${factor * px}px
    ;`);

  py !== undefined && isNaN(py) ?
    object.push(`
      padding-top: ${py}; 
      padding-bottom: ${py};
    `) :
    py && object.push(`
      padding-top: ${factor * py}px; 
      padding-bottom: ${factor * py}px
    ;`);

  pt !== undefined && isNaN(pt) ?
    object.push(`
      padding-top: ${pt};
    `) :
    pt && object.push(`
      padding-top: ${factor * pt}px
    ;`);

  pr !== undefined && isNaN(pr) ?
    object.push(`
      padding-right: ${pr};
    `) :
    pr && object.push(`
      padding-right: ${factor * pr}px
    ;`);

  pb !== undefined && isNaN(pb) ?
    object.push(`
      padding-bottom: ${pb};
    `) :
    pb && object.push(`
      padding-bottom: ${factor * pb}px
    ;`);

  pl !== undefined && isNaN(pl) ?
    object.push(`
      padding-left: ${pl};
    `) :
    pl && object.push(`
      padding-left: ${factor * pl}px
    ;`);

  return object.join('');
};