import {get} from 'lodash';

export const margin = ({
  theme = {},
  mx = '',
  my = '',
  mt = '',
  mr = '',
  mb = '',
  ml = '',
  m = '',
}) => {

  const unit = get(theme, 'factors.margin', 8);
  let object = [];

  mt !== undefined && isNaN(mt) ?
    object.push(`margin-top: ${mt};`) :
    mt && object.push(`margin-top: ${unit * mt}px;`);

  mr !== undefined && isNaN(mr) ?
    object.push(`margin-right: ${mr};`) :
    mr && object.push(`margin-right: ${unit * mr}px;`);

  mb !== undefined && isNaN(mb) ?
    object.push(`margin-bottom: ${mb};`) :
    mb && object.push(`margin-bottom: ${unit * mb}px;`);

  ml !== undefined && isNaN(ml) ?
    object.push(`margin-left: ${ml};`) :
    ml && object.push(`margin-left: ${unit * ml}px;`);

  mx !== undefined && isNaN(mx) ?
    object.push(`margin-left: ${mx};margin-right: ${mx};`) :
    mx && object.push(`margin-left: ${unit * mx}px;margin-right: ${unit * mx}px;`);

  my !== undefined && isNaN(my) ?
    object.push(`margin-top: ${my};margin-bottom: ${my};`) :
    my && object.push(`margin-top: ${unit * my}px;margin-bottom: ${unit * my}px;`);

  m !== undefined && isNaN(m) ?
    object.push(`margin: ${m};`) :
    m && object.push(`margin: ${m * unit}px;`);

  return object.join('');
};