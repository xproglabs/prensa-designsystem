import { get, map } from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import Block from '../Block'
import Link from '../Link/index.tsx'
import Typography from '../Typography'
import ChevronRightIcon from './assets/ChevronRight'
import ExpandLessIcon from './assets/ExpandLess'
import ExpandMoreIcon from './assets/ExpandMoreIcon'
import { CONFIGS } from './consts'
import { GroupSection, GroupTitleContainer, Hyperlink } from './styled'

const MenuItem = ({
  color,
  content,
  groupItemProps,
  groupSubItemProps,
  groupTitleProps,
  removeBorders
}) => {
  const [open, setOpenStatus] = useState(false)
  const { contentId, name, path, subitems, target } = content
  const isGroup = subitems.length > 0
  const iconColor = get(groupItemProps, 'iconColor', 'neutral3')
  const subitem_mt = get(groupSubItemProps, 'mt', 2)
  const subitem_mr = get(groupSubItemProps, 'mr', undefined)
  const subitem_mb = get(groupSubItemProps, 'mb', 2)
  const subitem_ml = get(groupSubItemProps, 'ml', '20px')
  const subitem_color = get(groupSubItemProps, 'color', 'neutral2')
  const subitem_element = get(groupSubItemProps, 'element', 'a')
  const subitem_fontSize = get(groupSubItemProps, 'fontSize', '16px')
  const subitem_fontFamily = get(groupSubItemProps, 'fontFamily', 'secondary')

  let itemColor = color
  if (color === 'unique' && content.color) itemColor = content.color

  const handleItemClick = () => {
    setOpenStatus(!open)
  }

  const GroupTitle = () => (
    <Typography {...CONFIGS.GROUP_TITLE_DEFAULT_PROPS} {...groupTitleProps}>
      {name}
    </Typography>
  )

  const GroupTitleWithPath = () => (
    <Typography {...CONFIGS.GROUP_TITLE_DEFAULT_PROPS} {...groupTitleProps}>
      <Link href={path} target={target}>
        {name}
      </Link>
    </Typography>
  )

  const HyperlinkGroup = () => (
    <Hyperlink href={path}>
      <GroupTitleContainer $color={itemColor} removeBorders={removeBorders} {...groupItemProps}>
        <GroupTitle />
        <ChevronRightIcon color={iconColor} />
      </GroupTitleContainer>
    </Hyperlink>
  )

  const Group = () => (
    <div>
      <GroupTitleContainer
        removeBorders={removeBorders}
        $color={itemColor}
        {...groupItemProps}
      >
        <GroupTitleWithPath/>
        {open ?
          <ExpandLessIcon
            color={iconColor}
            id={contentId}
            onClick={handleItemClick}
          /> 
          :
          <ExpandMoreIcon
            color={iconColor}
            id={contentId}
            onClick={handleItemClick}
          />
        }
      </GroupTitleContainer>
      <div>
        {open && 
          map(subitems, ({ name, path }, key) => (
            <Block
              mt={subitem_mt}
              mr={subitem_mr}
              mb={subitem_mb}
              ml={subitem_ml}
              key={key}
            >
              <Typography
                color={subitem_color}
                element={subitem_element}
                fontFamily={subitem_fontFamily}
                fontSize={subitem_fontSize}
                href={path}
              >
                {name}
              </Typography>  
            </Block>
          ))
        }
      </div>
    </div>
  )

  return (
    <GroupSection>
      {!isGroup ? <HyperlinkGroup/> : <Group/>}
    </GroupSection>
  )
}

MenuItem.defaultProps = {
  color: 'product1',
}

MenuItem.propTypes = {
  color: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  groupSubItemProps: PropTypes.object,
  groupTitleProps: PropTypes.object,
  groupItemProps: PropTypes.object,
  removeBorders: PropTypes.bool
}

export default MenuItem