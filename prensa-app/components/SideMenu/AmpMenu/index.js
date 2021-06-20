import {map} from 'lodash';
import {Block, Typography} from 'prensa';
import PropTypes from 'prop-types';
import React from 'react';

import MenuItem from './MenuItem';

const AmpMenu = ({content, className, id, layout}) => {
  return (
    <amp-sidebar className={className} id={id} layout={layout}>
      <Block px='20px' py='20px'>
        <Typography
          element='p'
          color='neutral3'
          fontFamily='secondary'
          fontSize='14px'
          transform='uppercase'
          mb={3}
        >
          Editorias
        </Typography>
        {map(content, (item, key) => <MenuItem content={item} key={key} />)}
      </Block>
    </amp-sidebar>
  );
};

AmpMenu.defaultProps = {
  layout: 'nodisplay'
};

AmpMenu.propTypes = {
  content: PropTypes.array.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  layout: PropTypes.string,
};

export default AmpMenu;