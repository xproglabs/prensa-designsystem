import styled from 'styled-components';

import {padding} from '../../../styled-system/padding';

const Content = styled.div`
  ${padding}
`;

const StyledContainer = styled.div`
  amp-sidebar {
    background-color: ${props => props.theme.colors[props.$backgroundColor]};
  }
`;

export {Content, StyledContainer};