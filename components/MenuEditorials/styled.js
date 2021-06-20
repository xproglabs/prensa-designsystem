import styled from 'styled-components';

export const Hyperlink = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.neutral5};
  &:hover {
    opacity: 0.8;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid;
  border-color: ${props => props.theme.colors.neutral9};
`;

export const GroupSection = styled.section`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${props => props.theme.colors.neutral9};
  padding-bottom: 8px;
  margin-bottom: 8px;
  .group-closed {
    display: none;
  }
  .hidden {
    display: none;
  }
  @media (min-width: ${props => props.theme.queries.md}) {
    width: 340px;
  }
`;
export const GroupTitleContainer = styled.div`
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: ${props => props.theme.colors[props.$color]};
  padding-left: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GroupContent = styled.div`
  margin-top: 8px;
`;