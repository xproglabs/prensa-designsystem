import { getColor, padding } from 'prensa/styled-system'
import styled, { css } from 'styled-components'

import { CONFIGS } from './consts'

const Hyperlink = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.neutral5};
  &:hover {
    opacity: 0.8;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid;
  border-color: ${props => props.theme.colors.neutral9};
`

const GroupSection = styled.section`
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
`

const getGroupBorder = ({ removeBorders }) => {
  if (removeBorders) return ''
  return css`
    border-left-width: 4px;
    border-left-style: solid;
    border-left-color: ${props => props.theme.colors[props.$color]};
  `
}


const GroupTitleContainer = styled.div`
  ${getGroupBorder};
  ${padding};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .${CONFIGS.GROUP_ICON_CLASS} {
    fill: ${props => getColor({ ...props, $color: props.iconColor })};
  }
`

const GroupContent = styled.div`
  margin-top: 8px;
`

export {
  GroupContent,
  GroupSection,
  GroupTitleContainer,
  Hyperlink,
  HeaderContainer,
}