import PropTypes from 'prop-types';
import React from 'react';

import {StyledContainer} from './styled';

const AmpMenu = ({backgroundColor, children, id, layout, menuAnchor}) => {
  return (
    <StyledContainer $backgroundColor={backgroundColor}>
      <amp-sidebar id={id} layout={layout} side={menuAnchor}>
        {children}
      </amp-sidebar>
    </StyledContainer>
  );
};

AmpMenu.defaultProps = {
  backgroundColor: 'white',
  layout: 'nodisplay',
  menuAnchor: 'left'
};

AmpMenu.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
  layout: PropTypes.string,
  menuAnchor: PropTypes.oneOf(['left', 'right'])
};

export default AmpMenu;