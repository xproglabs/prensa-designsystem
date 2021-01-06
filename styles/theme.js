import {parseAlign} from './parsers/parseAlign';
import {parseBgColor, parseFontColor} from './parsers/parseColors';
import {parseCustom, parseCustomDef} from './parsers/parseCustom';
import {parseDimension} from './parsers/parseDimension';
import {parseFontFamily} from './parsers/parseFontFamily';
import {parseMargin} from './parsers/parseMargin';
import {parsePadding} from './parsers/parsePadding';
import {parseProps} from './parsers/parseRender';

export const theme = {
  colors: {
    primary1: '#063F8F',
    primary2: '#446FAB',
    primary3: '#829EC7',
    secondary1: '#E5471A',
    secondary2: '#EB7553',
    secondary3: '#F2A28C',
    black: '#000000',
    neutral1: '#151515',
    neutral2: '#333333',
    neutral3: '#555555',
    neutral4: '#666666',
    neutral5: '#707070',
    neutral6: '#999999',
    neutral7: '#B5B5B5',
    neutral8: '#D7D7D7',
    neutral9: '#EAEAEA',
    neutral10: '#F2F2F2',
    neutral11: '#FAFAFA',
    white: '#FFFFFF',
    colorAds: '#5421C2',
    editorial1: '#2C1D15',
    editorial2: '#73B6D3',
    editorial3: '#00A070',
    editorial4: '#B455A0',
    editorial5: '#F37042',
    product1: '#0975B7',
    product2: '#AB001B',
    product3: '#BFA525',
    product4: '#080808',
    product5: '#09B77B',
    success1: '#3C8D40',
    success2: '#50AE55',
    success3: '#83C686',
    error1: '#D13135',
    error2: '#F1453D',
    error3: '#E37475',
  },
  fonts: {
    primary: 'PT Sans',
    secondary: 'Nunito Sans'
  },
  factors: {
    dimensions: 10,
    padding: 8,
    margin: 8,
  },
  parseAlign,
  parseBgColor,
  parseCustom,
  parseCustomDef,
  parseDimension,
  parseFontColor,
  parseFontFamily,
  parseMargin,
  parsePadding,
  parseProps, 
  queries: {
    xs: '360px', 
    sm: '460px', 
    md: '768px', 
    lg: '1016px',
    xl: '1280px'
  }
};