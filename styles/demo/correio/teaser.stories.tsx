import SectionTitle from 'components/SectionTitle'
import { CreateTemplate } from 'prensa'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import PageBlock from '../../../components/PageBlock'
import TemplateContainer from '../../../components/Templates/TemplateContainer'
import teaser1 from './data/teaser1.json'
import teaser2 from './data/teaser2.json'
import teaser3 from './data/teaser3.json'
import teaser4 from './data/teaser4.json'
import teaser5 from './data/teaser5.json'
import { TEASER_DEFAULT } from './teasers/teaser_default'
import { TEASER_NEWS_LEFT } from './teasers/teaser_news_left'
import { TEASER_NEWS_TOP } from './teasers/teaser_news_top'
import { correio_theme } from './theme'

const TEMPLATE_MOCKUP = CreateTemplate({
  slot30: {
    layout: {
      0: ['default']
    },
    min_height: ['auto', '280px'],
    related: { enabled: false },
    spaces: [0],
    space_bottom: [1, 1]
  },
  slot70: {
    layout: {
      0: ['default']
    },
    min_height: ['auto', '280px'],
    related: { enabled: false },
    spaces: [0],
    space_bottom: [1, 1]
  },
  slot100: {
    layout: {
      0: ['default']
    },
    min_height: ['auto', '280px'],
    related: { enabled: false },
    spaces: [0],
    space_bottom: [1, 1]
  }
})

export default {
  title: 'Teasers/Correio',
  decorators: [
    (Story) => (
      <Story/>
    )
  ]
}

const Container = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <TemplateContainer
        background='neutral10'
        mb={[2, 2]}
        mt={[2, 2]}>
        {children}
      </TemplateContainer>
    </ThemeProvider>
  )
}

const generalProps = {
  domain: 'http://localhost:3000',
}

export const TeaserDefault = () => {
  const theme = {
    ...correio_theme,
    teasers: { default: TEASER_DEFAULT },
    templates: { default: TEMPLATE_MOCKUP }
  }
  return (
    <Container theme={theme}>
      <SectionTitle title="TEASER DEFAULT - TEMPLATE 30" />
      <PageBlock {...generalProps} {...teaser1} />
      <SectionTitle title="TEASER DEFAULT - TEMPLATE 70 COM IMAGEM" />
      <PageBlock {...generalProps} {...teaser2} />
      <SectionTitle title="TEASER DEFAULT - TEMPLATE 70 SEM IMAGEM" />
      <PageBlock {...generalProps} {...teaser3} />
      <SectionTitle title="TEASER DEFAULT - TEMPLATE 100 COM IMAGEM" />
      <PageBlock {...generalProps} {...teaser4} />
      <SectionTitle title="TEASER DEFAULT - TEMPLATE 100 SEM IMAGEM" />
      <PageBlock {...generalProps} {...teaser5} />
    </Container>
  )
}

export const TeaserNewsLeft = () => {
  const theme = {
    ...correio_theme,
    teasers: { default: TEASER_NEWS_LEFT },
    templates: { default: TEMPLATE_MOCKUP }
  }
  return (
    <Container theme={theme}>
      <SectionTitle title="TEASER_NEWS_LEFT - TEMPLATE 30" />
      <PageBlock {...generalProps} {...teaser1} />
      <SectionTitle title="TEASER_NEWS_LEFT - TEMPLATE 70 COM IMAGEM" />
      <PageBlock {...generalProps} {...teaser2} />
      <SectionTitle title="TEASER_NEWS_LEFT - TEMPLATE 70 SEM IMAGEM" />
      <PageBlock {...generalProps} {...teaser3} />
      <SectionTitle title="TEASER_NEWS_LEFT - TEMPLATE 100 COM IMAGEM" />
      <PageBlock {...generalProps} {...teaser4} />
      <SectionTitle title="TEASER_NEWS_LEFT - TEMPLATE 100 SEM IMAGEM" />
      <PageBlock {...generalProps} {...teaser5} />
    </Container>
  )
}

export const TeaserNewsTop = () => {
  const theme = {
    ...correio_theme,
    teasers: { default: TEASER_NEWS_TOP },
    templates: { default: TEMPLATE_MOCKUP }
  }
  return (
    <Container theme={theme}>
      <SectionTitle title="TEASER_NEWS_TOP - TEMPLATE 30" />
      <PageBlock {...generalProps} {...teaser1} />
      <SectionTitle title="TEASER_NEWS_TOP - TEMPLATE 70 COM IMAGEM" />
      <PageBlock {...generalProps} {...teaser2} />
      <SectionTitle title="TEASER_NEWS_TOP - TEMPLATE 70 SEM IMAGEM" />
      <PageBlock {...generalProps} {...teaser3} />
      <SectionTitle title="TEASER_NEWS_TOP - TEMPLATE 100 COM IMAGEM" />
      <PageBlock {...generalProps} {...teaser4} />
      <SectionTitle title="TEASER_NEWS_TOP - TEMPLATE 100 SEM IMAGEM" />
      <PageBlock {...generalProps} {...teaser5} />
    </Container>
  )
}