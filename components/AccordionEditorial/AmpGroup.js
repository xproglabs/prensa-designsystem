import {map, get} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Typography from '../Typography';
import ChevronRightIcon from './assets/ChevronRight';
import ExpandLessIcon from './assets/ExpandLess';
import ExpandMoreIcon from './assets/ExpandMoreIcon';
import {CONFIGS} from './consts';
import {GroupSection, GroupTitleContainer, GroupContent, Hyperlink} from './styled';

const GroupTitle = (props) => (
  <Typography {...CONFIGS.GROUP_TITLE_DEFAULT_PROPS} {...props}>
    {props.name}
  </Typography>
);

const MenuItem = ({color, content, groupItemProps, groupSubItemProps, groupTitleProps, removeBorders}) => {
  
  // 1. Creates one state for each item in list | state name is polopoly prefix + stateId
  // 2. State does not accept special chars or Numbers as key, so we use a prefix to identify it (state L.14)
  // 3. To make state work it is necessary a user click to activate initialState. Before this the values submitted to client are the ones in HTML props
  // 4. In this context the state trigger is everytime user click on MenuButton
  // 5. Subgroup is not displayed when it is rendered with class 'group-closed'

  let itemColor = color;
  if (color === 'unique' && content.color) itemColor = content.color;

  const {contentId, name, path, subitems, target} = content;
  
  const isGroup = subitems.length > 0;
  const stateId = `state${contentId.replace('.', '')}`;
  const initialState = `{ "${stateId}": { "status": true } }`;
  const newState = `tap:AMP.setState({ ${stateId}: {status: !${stateId}.status} })`;
  const contentClass = `${stateId}.status ? 'group-open' : 'group-closed'`;
  const expandMoreIconClass = `${stateId}.status ? "${CONFIGS.GROUP_ICON_CLASS} hidden" : "${CONFIGS.GROUP_ICON_CLASS} visible"`;
  const expandLessIconClass = `${stateId}.status ? "${CONFIGS.GROUP_ICON_CLASS} visible" : "${CONFIGS.GROUP_ICON_CLASS} hidden"`;
  const iconColor = get(groupItemProps, 'iconColor', 'neutral3');

  const HyperlinkGroup = () => (
    <Hyperlink href={path}>
      <GroupTitleContainer removeBorders={removeBorders} $color={itemColor} {...groupItemProps}>
        <GroupTitle target={target} name={name} {...groupTitleProps}/>
        <ChevronRightIcon $color={iconColor} />
      </GroupTitleContainer>
    </Hyperlink>
  );

  const Group = () => (
    <div>
      <GroupTitleContainer iconColor={iconColor} removeBorders={removeBorders} role='setMenuItemState' tabIndex='0' on={newState} $color={itemColor} {...groupItemProps}>
        <GroupTitle name={name} {...groupTitleProps} />
        <ExpandMoreIcon data-amp-bind-class={expandMoreIconClass} />
        <ExpandLessIcon data-amp-bind-class={expandLessIconClass} />
      </GroupTitleContainer>
      <GroupContent data-amp-bind-class={contentClass}>
        {map(subitems, ({id, path, name}, key) => (
          <Block id={id} ml='20px' mb={2} mt={2} key={key}>
            <Typography {...CONFIGS.GROUP_SUBITEM_DEFAULT_PROPS} href={path} {...groupSubItemProps}>
              {name}
            </Typography>
          </Block>
        ))}
      </GroupContent>
    </div>
  );

  return (
    <GroupSection>
      <amp-state id={stateId}>
        <script type="application/json" dangerouslySetInnerHTML={{__html: `${JSON.stringify(initialState)}`}} />
      </amp-state>
      {!isGroup ? <HyperlinkGroup/> : <Group/>}
    </GroupSection>
  );
};

GroupTitle.propTypes = {
  name: PropTypes.string
};

MenuItem.defaultProps = {
  color: 'product1',
};

MenuItem.propTypes = {
  color: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  groupSubItemProps: PropTypes.object,
  groupTitleProps: PropTypes.object,
  groupItemProps: PropTypes.object,
  removeBorders: PropTypes.bool
};

export default MenuItem;