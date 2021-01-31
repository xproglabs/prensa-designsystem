export const parseAlign = (props) => {

  if (!props) return '';
  const {align, alignx, aligny} = props;

  let object = [];
  let ai = '';
  let di = 'flex';
  let fd = '';
  let jc = '';
  
  // check if is column
  if(align.includes('column')) {
    fd = align;
    // x axys
    if(alignx === 'left') {
      ai = 'flex-start';
    }
    if(alignx === 'center') {
      ai = 'center';
    }
    if(alignx === 'right') {
      ai = 'flex-end';
    }
    if(alignx === 'evenly') {
      jc = 'space-evenly';
    }
    if(alignx === 'between') {
      jc = 'space-between';
    }
    // y axis
    if(aligny === 'top') {
      jc = 'flex-start';
    }
    if(aligny === 'middle') {
      jc = 'center';
    }
    if(aligny === 'bottom') {
      jc = 'flex-end';
    }
    if(aligny === 'evenly') {
      jc = 'space-evenly';
    }
    if(aligny === 'between') {
      jc = 'space-between';
    }
  }
  // check if is row
  if(align.includes('row')) {
    fd = align;
    if(alignx === 'left') {
      ai = 'flex-start';
    }
    if(alignx === 'center') {
      jc = 'center';
    }
    if(alignx === 'right') {
      jc = 'flex-end';
    }
    if(alignx === 'evenly') {
      jc = 'space-evenly';
    }
    if(alignx === 'between') {
      jc = 'space-between';
    }
    if(aligny === 'top') {
      ai = 'flex-start';
    }
    if(aligny === 'middle') {
      ai = 'center';
    }
    if(aligny === 'bottom') {
      ai = 'flex-end';
    }
    if(aligny === 'evenly') {
      jc = 'space-evenly';
    }
    if(aligny === 'between') {
      jc = 'space-between';
    }
  }
  // define strings
  ai !== '' && object.push(`align-items: ${ai};`);
  di !== '' && object.push(`display: ${di};`);
  fd !== '' && object.push(`flex-direction: ${fd};`);
  jc !== '' && object.push(`justify-content: ${jc};`);
  // end
  return object.join('');
};