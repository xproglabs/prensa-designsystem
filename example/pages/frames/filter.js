import React from 'react';
import {Frame} from '../../../';
import Footer from '../../components/Frames/Footer'
import Topbar from '../../components/Frames/Topbar'

const Example = () => {
  const {
    Block,
    ButtonPrimary,
    Card,
    Container,
    FX, FY,
    FlexEnd,
    ListView,
    Slide,
    SlideTitle,
    SlideText
  } = Frame

  return (
    <Container>
      <Topbar />
      <Slide>
        <FY>
          <ListView>
            <FY>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </FY>
          </ListView>
          <FlexEnd>
            <ButtonPrimary goTo={'/frames/filter'} />
          </FlexEnd>
        </FY>
      </Slide>
      <Footer />
    </Container>
  )
}

export default Example;