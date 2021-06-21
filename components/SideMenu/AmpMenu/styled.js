import styled from 'styled-components';

const StyledContainer = styled.div`
  amp-sidebar {
    background-color: ${props => props.theme.colors[props.$backgroundColor]};
  }
`;

export {StyledContainer};