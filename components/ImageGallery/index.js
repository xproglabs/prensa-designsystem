import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import SvgIcArrowBack from '../../icons/IcArrowBack';
import SvgIcArrowForward from '../../icons/IcArrowForward';
import Block from '../Block';

const RenderItem = ({linkurl, name, lead, selected, on}) => {
  const propsGallerySelected = {custom: 'gallery-selected', w: '100p', mb: '2'};
  const propsGalleryItem = {custom: 'gallery-item', mr: '2', onClick: () => on({linkurl, name, lead})};
  const propsGallery = selected ? propsGallerySelected : propsGalleryItem;
  return (
    <Block {...propsGallery}>
      <img className='image-file' src={linkurl} alt={`${name}`} />
      <Block custom='image-name'>{name}</Block>
      <Block custom='image-lead'>{lead}</Block>
    </Block>
  );
};

const ImageGallery = ({items, selected, on}) => {
  if(!items || items.length === 0) return false;
  const item_selected = selected ? selected : items[0];

  return (
    <Block custom="article-image-gallery" w="100p">
      <Block align="row" custom="image-selected" w="100p">
        <RenderItem {...item_selected} selected on={on} />
      </Block>
      {(items.length > 1) && (
        <Block align="row" custom="box-list" w="100p">
          <Block align="row center middle" custom="arrow-left"><SvgIcArrowBack /></Block>
          <Block align="row" custom="image-list" w="100p">
            {map(items, (item, key) => <RenderItem {...item} key={key} on={on} />)}
          </Block>
          <Block align="row center middle" custom="arrow-right"><SvgIcArrowForward /></Block>
        </Block>
      )}
    </Block>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array,
  selected: PropTypes.shape({
    lead: PropTypes.string,
    linkUrl: PropTypes.string,
    name: PropTypes.string,
  }),
  on: PropTypes.func,  
};

RenderItem.propTypes = {
  linkurl: PropTypes.string,
  name: PropTypes.string,
  lead: PropTypes.string,
  selected: PropTypes.bool,
  on: PropTypes.func.isRequired
};

ImageGallery.defaultProps = {
  selected: false,
  items: []
};
export default ImageGallery;