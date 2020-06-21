import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Grid from '../Grid';
import {TeaserFeatured} from '../Teasers';

const BreakingNews = props => {
  const {content, image, status} = props.blockData;
  return (
    <Block row style='breaking-news'>
      <Grid columns={12}>
        <TeaserFeatured 
          content={content}
          status={status}
          image={image}
        />
      </Grid>
    </Block>
  );
};

BreakingNews.propTypes = {
  blockData: PropTypes.shape({
    content: PropTypes.object,
    image: PropTypes.object,
    status: PropTypes.object,
  })
};

export default BreakingNews;