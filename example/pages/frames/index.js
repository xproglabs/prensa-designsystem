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
    Grid,
    FY,
    FlexEnd,
    Slide,
    SlideText,
    SlideTitle,
  } = Frame

  return (
    <Container>
      <Topbar />
      <Slide class='fr-home'>
        <FY>
          <FY>
            <SlideTitle />
            <SlideText />
            <ButtonPrimary goTo={'/frames/filter'} />
          </FY>
          <Grid>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid>
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