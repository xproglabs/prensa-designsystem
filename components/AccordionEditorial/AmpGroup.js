import { map, get, replace } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import Block from '../Block'
import Link from '../Link/index.tsx'
import Typography from '../Typography'
import ChevronRightIcon from './assets/ChevronRight'
import ExpandLessIcon from './assets/ExpandLess'
import ExpandMoreIcon from './assets/ExpandMoreIcon'
import { CONFIGS } from './consts'
import { GroupSection, GroupTitleContainer, Hyperlink } from './styled'

const GroupTitle = ({ name, ...otherProps }) => (
  <Typography {...CONFIGS.GROUP_TITLE_DEFAULT_PROPS} {...otherProps}>
    {name}
  </Typography>
)

const GroupTitleWithPath = ({ name, path, target, ...otherProps }) => (
  <Typography {...CONFIGS.GROUP_TITLE_DEFAULT_PROPS} {...otherProps}>
    <Link href={path} target={target}>
      {name}
    </Link>
  </Typography>
)

const MenuItem = ({
  color,
  content,
  groupItemProps,
  groupSubItemProps,
  groupTitleProps,
  removeBorders
}) => {
  
  // 1. Creates one state for each item in list | state name is polopoly prefix + stateId
  // 2. State does not accept special chars or Numbers as key, so we use a prefix to identify it (state L.14)
  // 3. To make state work it is necessary a user click to activate initialState. Before this the values submitted to client are the ones in HTML props
  // 4. In this context the state trigger is everytime user click on MenuButton
  // 5. Subgroup is not displayed when it is rendered with class 'group-closed'

  let itemColor = color
  if (color === 'unique' && content.color) itemColor = content.color

  const { contentId, name, path, subitems, target } = content

  const parsedContentId = replace(contentId, '.', '')
  
  const isGroup = subitems.length > 0
  const stateId = `state${parsedContentId}`
  const initialState = `{ "${stateId}": { "status": true } }`
  const newState = `tap:AMP.setState({ ${stateId}: {status: !${stateId}.status} })`
  const contentClass = `${stateId}.status ? 'group-open' : 'group-closed'`
  const expandMoreIconClass = `${stateId}.status ? "${CONFIGS.GROUP_ICON_CLASS} hidden" : "${CONFIGS.GROUP_ICON_CLASS} visible"`
  const expandLessIconClass = `${stateId}.status ? "${CONFIGS.GROUP_ICON_CLASS} visible" : "${CONFIGS.GROUP_ICON_CLASS} hidden"`

  const subitem_mt = get(groupSubItemProps, 'mt', 2)
  const subitem_mr = get(groupSubItemProps, 'mr', undefined)
  const subitem_mb = get(groupSubItemProps, 'mb', 2)
  const subitem_ml = get(groupSubItemProps, 'ml', '20px')
  const subitem_color = get(groupSubItemProps, 'color', 'neutral2')
  const subitem_element = get(groupSubItemProps, 'element', 'a')
  const subitem_fontSize = get(groupSubItemProps, 'fontSize', '16px')
  const subitem_fontFamily = get(groupSubItemProps, 'fontFamily', 'secondary')

  const iconColor = get(groupItemProps, 'iconColor', 'neutral3')
  const itemId = `accordion-item-${parsedContentId}`
  const HyperlinkGroup = () => (
    <Hyperlink href={path} id={itemId} target={target}>
      <GroupTitleContainer removeBorders={removeBorders} $color={itemColor} {...groupItemProps}>
        <GroupTitle name={name} {...groupTitleProps}/>
        <ChevronRightIcon $color={iconColor} />
      </GroupTitleContainer>
    </Hyperlink>
  )

  const Group = () => (
    <div>
      <GroupTitleContainer
        iconColor={iconColor}
        removeBorders={removeBorders}
        $color={itemColor}
        {...groupItemProps}
      >
        <GroupTitleWithPath
          name={name}
          path={path}
          target={target}
          {...groupTitleProps}
        />
        <ExpandMoreIcon
          data-amp-bind-class={expandMoreIconClass}
          on={newState}
          role='setMenuItemState'
          tabIndex='0'
        />
        <ExpandLessIcon
          data-amp-bind-class={expandLessIconClass}
          on={newState}
          role='setMenuItemState'
          tabIndex='0'
        />
      </GroupTitleContainer>
      <div data-amp-bind-class={contentClass}>
        {map(subitems, ({ contentId, path, name }, key) => (
          <Block
            key={key}
            mt={subitem_mt}
            mr={subitem_mr}
            mb={subitem_mb}
            ml={subitem_ml}
          >
            <Typography
              color={subitem_color}
              element={subitem_element}
              fontFamily={subitem_fontFamily}
              fontSize={subitem_fontSize}
              href={path}
              id={`accordion-item-${replace(contentId, '.', '')}`}
            >
              {name}
            </Typography>
          </Block>
        ))}
      </div>
    </div>
  )

  return (
    <GroupSection>
      <amp-state id={stateId}>
        <script type="application/json" dangerouslySetInnerHTML={{ __html: `${JSON.stringify(initialState)}` }} />
      </amp-state>
      {!isGroup ? <HyperlinkGroup/> : <Group/>}
    </GroupSection>
  )
}

GroupTitle.propTypes = {
  name: PropTypes.string
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