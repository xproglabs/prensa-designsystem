import {map} from 'lodash';
import {Block, Typography} from 'prensa';
import PropTypes from 'prop-types';
import React, {useState} from 'react';

import ChevronRightIcon from '../assets/ChevronRight';
import ExpandLessIcon from '../assets/ExpandLess';
import ExpandMoreIcon from '../assets/ExpandMoreIcon';
import {GroupSection, GroupTitleContainer, GroupContent, Hyperlink} from '../styled';

const SideMenuItem = ({content}) => {
  const [open, setOpenStatus] = useState(false);
  const {contentId, color, name, path, subitems} = content;
  const isGroup = subitems.length > 0;

  const handleItemClick = () => {
    setOpenStatus(!open);
  };

  const GroupTitle = () => (
    <Typography 
      color='neutral2'
      element='h4' 
      lineHeight='40px' 
      fontFamily='secondary' 
      fontSize='20px' >
      {name}
    </Typography>
  );

  const HyperlinkGroup = () => (
    <Hyperlink href={path}>
      <GroupTitleContainer $color={color}>
        <GroupTitle/>
        <ChevronRightIcon/>
      </GroupTitleContainer>
    </Hyperlink>
  );

  const Group = () => (
    <div>
      <GroupTitleContainer id={contentId} onClick={handleItemClick} $color={color}>
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

SideMenuItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default SideMenuItem;