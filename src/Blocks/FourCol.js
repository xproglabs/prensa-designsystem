import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Grid from '../Grid';
import {Teaser} from '../Teasers';

const FourCol = props => {
  const {content, status} = props.blockData;
  return (
    <Block row style='4-col'>
      {map(content, (teaser, k) => (
        <Grid xs={100} md={50} columns={3}>
          <Teaser key={k} content={teaser} status={status}/>
        </Grid>
      ))}
    </Block>
  );
};

FourCol.propTypes = {
  blockData: PropTypes.shape({
    content: PropTypes.array,
    image: PropTypes.array,
    status: PropTypes.object,
  })
};

export default FourCol;