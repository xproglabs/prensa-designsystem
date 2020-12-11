import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {withTheme} from 'styled-components';

import IcArrow from '../../icons/IcArrowForward'


const Container = styled.div`
  margin-bottom: 24px;
`;
const MenuItemContainer = styled.div`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: inherit;
    text-decoration: none;
    &:focus,
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const MenuItem = () => {
  return (
    <Container>
      <MenuItemContainer>
        <a>Economia</a>
        <IcArrow />
      </MenuItemContainer>
    </Container>
  )
};

// Button.propTypes = {
//   /**
//    * Permite a estilização do componente
//    */
//   className: PropTypes.string,
//   children: PropTypes.node,
//   disabled: PropTypes.bool,
//   fullWidth: PropTypes.bool,
//   leftIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
//   onClick: PropTypes.func,
//   variant: PropTypes.oneOf(['filled', 'outlined']),
//   color: PropTypes.oneOf(colors),
//   fontColor: PropTypes.oneOf(colors),
//   radius: PropTypes.oneOf([false, 'default', 'alternative']),
//   rightIcon: PropTypes.oneOf([PropTypes.object, PropTypes.element]),
//   size: PropTypes.oneOf([1, 2, 3, 4, 5]),
//   style: PropTypes.object,
//   weight: PropTypes.oneOf(weights)
// };

// Button.defaultProps = {
//   disabled: false,
//   variant: 'filled',
//   color: 'primary-1',
//   radius: 'default',
//   size: 1,
//   weight: 'regular'
// };

// export default Button;

export default withTheme(MenuItem);
