const parsePadding = (theme, {px, py, pt, pr, pb, pl}) => {
  let object = [];
  let factor = 8;

  isNaN(px) ?
    object.push(`
      padding-left: ${px}; 
      padding-right: ${px};
    `) :
    px && object.push(`
      padding-left: ${factor * px}px; 
      padding-right: ${factor * px}px
    ;`);

  isNaN(py) ?
    object.push(`
      padding-top: ${py}; 
      padding-bottom: ${py};
    `) :
    py && object.push(`
      padding-top: ${factor * py}px; 
      padding-bottom: ${factor * py}px
    ;`);

  isNaN(pt) ?
    object.push(`
      padding-top: ${pt};
    `) :
    pt && object.push(`
      padding-top: ${factor * pt}px
    ;`);

  isNaN(pr) ?
    object.push(`
      padding-right: ${pr};
    `) :
    pr && object.push(`
      padding-right: ${factor * pr}px
    ;`);

  isNaN(pb) ?
    object.push(`
      padding-bottom: ${pb};
    `) :
    pb && object.push(`
      padding-bottom: ${factor * pb}px
    ;`);

  isNaN(pl) ?
    object.push(`
      padding-left: ${pl};
    `) :
    pl && object.push(`
      padding-left: ${factor * pl}px
    ;`);

  return object.join('');
};

export {parsePadding};