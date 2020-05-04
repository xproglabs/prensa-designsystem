import React from 'react';
import {Frame} from '../../../';
import Footer from '../../components/Frames/Footer'
import Topbar from '../../components/Frames/Topbar'

const Example = () => {
  const {
    Block,
    Container,
    FX, FY,
    Line,
    Slide,
  } = Frame

  return (
    <Container>
      <Topbar />
      <Slide class='fr-article'>
        <FY>
          <FY>
            <Line class='article-title' />
            <Line class='article-title' />
            <Line class='article-title' />
          </FY>
          <Line class='article-subtitle' />
          <FY>
            <Line class='article-lead' />
            <Line class='article-lead' />
            <Line class='article-lead' />
          </FY>
          <Line class='article-author' />
          <Line class='article-author' />
          <Block class='block-image'>
            <Line class='article-image' />
          </Block>
          <Block class='block-textbody'>
            <Block class='textbody'>
              <Line />
              <Line />
              <Line />
              <Line />
              <Line />
            </Block>
            <Block class='textbody'>
              <Line />
              <Line />
              <Line />
              <Line />
              <Line />
            </Block>
            <Block class='textbody'>
              <Line />
              <Line />
              <Line />
              <Line />
              <Line />
            </Block>
          </Block>
        </FY>
      </Slide>
      <Footer />
    </Container>
  )
}

export default Example;