import {get, map} from 'lodash';
import PropTypes from 'prop-types';
import React, {useState} from 'react';

import Block from '../Block';
import Typography from '../Typography';
import ChevronRightIcon from './assets/ChevronRight';
import ExpandLessIcon from './assets/ExpandLess';
import ExpandMoreIcon from './assets/ExpandMoreIcon';
import {CONFIGS} from './consts';
import {GroupSection, GroupTitleContainer, GroupContent, Hyperlink} from './styled';

const MenuItem = ({color, content, groupItemProps, groupSubItemProps, groupTitleProps, removeBorders}) => {
  const [open, setOpenStatus] = useState(false);
  const {contentId, name, path, subitems} = content;
  const isGroup = subitems.length > 0;
  const iconColor = get(groupItemProps, 'iconColor', 'neutral3');

  let itemColor = color;
  if (color === 'unique' && content.color) itemColor = content.color;

  const handleItemClick = () => {
    setOpenStatus(!open);
  };

  const GroupTitle = () => (
    <Typography {...CONFIGS.GROUP_TITLE_DEFAULT_PROPS} {...groupTitleProps}>
      {name}
    </Typography>
  );

  const HyperlinkGroup = () => (
    <Hyperlink href={path}>
      <GroupTitleContainer $color={itemColor} removeBorders={removeBorders} {...groupItemProps}>
        <GroupTitle />
        <ChevronRightIcon color={iconColor} />
      </GroupTitleContainer>
    </Hyperlink>
  );

  const Group = () => (
    <div>
      <GroupTitleContainer id={contentId} onClick={handleItemClick} removeBorders={removeBorders} $color={itemColor} {...groupItemProps}>
        <GroupTitle/>
        {open ? <ExpandLessIcon color={iconColor} /> : <ExpandMoreIcon color={iconColor} />}
      </GroupTitleContainer>
      <GroupContent>
        {open && 
          map(subitems, ({name, path}, key) => (
            <Block ml='20px' mb={2} mt={2} key={key}>
              <Typography {...CONFIGS.GROUP_SUBITEM_DEFAULT_PROPS} href={path} {...groupSubItemProps}>
                {name}
              </Typography>  
            </Block>
          )
          )}
      </GroupContent>
    </div>
  );

  return (
    <GroupSection>
      {!isGroup ? <HyperlinkGroup/> : <Group/>}
    </GroupSection>
  );
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