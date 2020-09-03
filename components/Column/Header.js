import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Image from '../Image/Background';

const ColumnHeader = ({domain, item}) => {
  if(!item)
    return null;

  const path = '';
  const image = item['column-image'] && item['column-image']['image-contentId'] && item['column-image'];
  const column_name = item['column-name'];
  const column_description = item['column-desc'];
  return (
    <Block align="row" custom="column-header" mb="3" p="3" w="100p-6">
      <Block>
        <a className='teaser-aria' href={path} aria-label={`Imagem do colunista ${column_name}`}>
          <Image domain={domain} content={image} />
        </a>
      </Block>
      <Block align="middle" ml="2">
        <Block custom="title">{column_name}</Block>
        <Block custom="subtitle">{column_description}</Block>
      </Block>
    </Block>
  );
};

ColumnHeader.propTypes = {
  domain: PropTypes.string,
  item: PropTypes.object
};
ColumnHeader.defaultProps = {
  item: []
};
export default ColumnHeader;