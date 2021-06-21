import styled from 'styled-components';

import {padding} from '../../../styled-system/padding';

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  z-index: 10;
`;

const parsePosition = ({menuAnchor}) => {
  if (menuAnchor === 'left') return 'left: 0px;';
  if (menuAnchor === 'right') return 'right: 0px;';
};

const Content = styled.div`
  ${parsePosition};
  ${padding};
  background-color: ${props => props.theme.colors[props.$backgroundColor]};
  display: block;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 11;
  @media (min-width: ${props => props.theme.queries.md}) {
    width: max-content;
  }
`;

export {Backdrop, Content};