import React from 'react';
import styled from 'styled-components';

import {numberToString} from '../Util';

// const parseWidth = props => {
//   const hasMarginLeft = getFromProps(props, 'marginLeft')
//   const hasMarginRight = getFromProps(props, 'marginRight')
//   const hasWidth = getFromProps(props, 'size')
//   return `calc(${hasWidth ? hasWidth : '100%'} - )`
// }

const Space = styled.div`
  width: ${props => `calc(100% - ${numberToString(props.marginLeft)} - ${numberToString(props.marginRight)})`};
  margin-left: ${props => numberToString(props.marginLeft)};
  margin-right: ${props => numberToString(props.marginRight)};
  margin-top: ${props => numberToString(props.marginTop)};
  margin-bottom: ${props => numberToString(props.marginBottom)};
`;

const RelatedContent = props => {
  return (
    <Space {...props}>
      <pre>testando</pre>
    </Space>
  );
};

RelatedContent.defaultProps = {
  marginTop: 32,
  marginBottom: 32,
  marginLeft: 24,
  marginRight: 24
};

export default RelatedContent;