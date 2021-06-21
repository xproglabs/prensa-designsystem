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
  element: 'h4',
  lineHeight: '40px',
  fontFamily: 'secondary',
  fontSize: '20px',
};

const MenuItem = ({color, content, groupTitleProps, removeBorders}) => {
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
      <GroupTitleContainer removeBorders={removeBorders} $color={itemColor}>
        <GroupTitle/>
        <ChevronRightIcon/>
      </GroupTitleContainer>
    </Hyperlink>
  );

  const Group = () => (
    <div>
      <GroupTitleContainer id={contentId} onClick={handleItemClick} removeBorders={removeBorders} $color={itemColor} >
        <GroupTitle/>
        {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
      </GroupTitleContainer>
      <GroupContent>
        {open && 
          map(subitems, ({path, name}, key) => (
            <Block ml='20px' mb={2} mt={2} key={key}>
              <Hyperlink href={path}>
                {name}
              </Hyperlink>
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
  removeBorders: PropTypes.bool
};

export default MenuItem;