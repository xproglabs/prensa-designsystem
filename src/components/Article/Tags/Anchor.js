import styled from 'styled-components'

export const AnchorTag = styled.a`
  cursor: pointer;
  height: inherit;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  text-decoration: none;
  width: calc(100% - 32px);
  &:hover {
    opacity: 0.8;
  }
`
