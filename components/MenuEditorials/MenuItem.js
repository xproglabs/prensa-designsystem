import {map} from 'lodash';
import PropTypes from 'prop-types';
import React, {useState} from 'react';

import Block from '../Block';
import Typography from '../Typography';
import ChevronRightIcon from './assets/ChevronRight';
import ExpandLessIcon from './assets/ExpandLess';
import ExpandMoreIcon from './assets/ExpandMoreIcon';
import {GroupSection, GroupTitleContainer, GroupContent, Hyperlink} from './styled';

const groupTitleDefaultProps = {
  color: 'neutral2',
  element: 'span',
  lineHeight: '40px',
  fontFamily: 'secondary',
  fontSize: '20px',
};

const subItemDefaultProps = {
  color: 'neutral2',
  element: 'a',
  fontFamily: 'secondary',
  fontSize: '16px'
};

const MenuItem = ({color, content, groupSubItemProps, groupTitleProps, menuItemProps, removeBorders}) => {
  const [open, setOpenStatus] = useState(false);
  const {contentId, name, path, subitems} = content;
  const isGroup = subitems.length > 0;

  let itemColor = color;
  if (color === 'unique' && content.color) itemColor = content.color;

  const handleItemClick = () => {
    setOpenStatus(!open);
  };

  const GroupTitle = () => (
    <Typography {...groupTitleDefaultProps} {...groupTitleProps}>
      {name}
    </Typography>
  );

  const HyperlinkGroup = () => (
    <Hyperlink href={path}>
      <GroupTitleContainer $color={itemColor} menuItemProps={menuItemProps} removeBorders={removeBorders}>
        <GroupTitle />
        <ChevronRightIcon color={itemColor} />
      </GroupTitleContainer>
    </Hyperlink>
  );

  const Group = () => (
    <div>
      <GroupTitleContainer id={contentId} onClick={handleItemClick} menuItemProps={menuItemProps} removeBorders={removeBorders} $color={itemColor}>
        <GroupTitle/>
        {open ? <ExpandLessIcon color={itemColor}/> : <ExpandMoreIcon color={itemColor}/>}
      </GroupTitleContainer>
      <GroupContent>
        {open && 
          map(subitems, ({name, path}, key) => (
            <Block ml='20px' mb={2} mt={2} key={key}>
              <Typography href={path} {...subItemDefaultProps} {...groupSubItemProps}>
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
  groupTitleProps: PropTypes.object,
  groupSubItemProps: PropTypes.object,
  menuItemProps: PropTypes.object,
  removeBorders: PropTypes.bool
};

export default MenuItem;