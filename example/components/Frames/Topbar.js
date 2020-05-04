import React from 'react';
import {Frame} from '../../..';

const Topbar = () => {
  const {
    ButtonPrimary,
    ButtonSecondary,
    FlexBtwn,
    FlexEnd,
    FlexStart,
    Logo,
    Topbar
  } = Frame
  return (
    <Topbar>
      <FlexBtwn>
        <FlexStart>
          <Logo goTo={'/frames'} />
        </FlexStart>
        <FlexEnd>
          <ButtonSecondary goTo={'/frames/filter'} />
          <ButtonSecondary goTo={'/frames'} />
          <ButtonPrimary goTo={'/frames/filter'} />
        </FlexEnd>
      </FlexBtwn>
    </Topbar>
  )
}
export default Topbar