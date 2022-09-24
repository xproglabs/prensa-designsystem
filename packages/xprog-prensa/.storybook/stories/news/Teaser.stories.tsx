import React from 'react'

import { LayoutProvider } from '../../../providers/LayoutProvider'
import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'
import { PageBlock } from '../../../news/PageBlock'
import { Teaser } from '../../../news/Teaser'
import { TeaserProps } from '../../../news/Teaser/types'
import { teasers as T } from '../../../providers/LayoutProvider/data/teasers'

import { getArgsTableForTeaser, getArgTypesForTeaser } from './Teaser.controls'

export default {
  title: 'News/Teaser',
  component: Teaser,
  parameters: { docs: { page: () => getArgsTableForTeaser({ Teaser }) } },
  ...getArgTypesForTeaser
}

const ComponentTeaser: React.FC<TeaserProps> = (props) => {
  const item: TeaserProps = props
  return (
    <PrensaThemeProvider>
      <LayoutProvider>
        <PageBlock
          slotTemplate='Template100'
          slotAutoLeftElements={[item]}
          itemComponent={Teaser}
        />
      </LayoutProvider>
      <LayoutProvider>
        <PageBlock
          slotTemplate='Template7030'
          slotAutoLeftElements={[item]}
          itemComponent={Teaser}
        />
      </LayoutProvider>
      <LayoutProvider>
        <PageBlock
          slotTemplate='Template30'
          slotAutoLeftElements={[item]}
          itemComponent={Teaser}
        />
      </LayoutProvider>
    </PrensaThemeProvider>
  )
}

const TeaserData = {
  subject: '🍀 Sorteio é hoje 🍀',
  subtitle: 'Apostas podem ser feitas até as 19h em lotéricas ou pela internet. Valor da aposta mínima é de R$ 4,50.',
  title: 'Mega-Sena pode pagar R$ 170 milhões hoje, um dos maiores prêmios do ano',
  path: 'https://g1.globo.com/loterias/noticia/2022/09/24/mega-sena-pode-pagar-r-170-milhoes-neste-sabado.ghtml'
}

export const TeaserHeadlineSm: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserHeadlineSm.args = {
  ...T.TeaserHeadlineSm,
  ...TeaserData
}

export const TeaserHeadlineLg: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserHeadlineLg.args = {
  ...T.TeaserHeadlineLg,
  ...TeaserData
}

export const TeaserImageBottom: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserImageBottom.args = {
  ...T.TeaserImageBottom,
  ...TeaserData
}

export const TeaserImageLeft: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserImageLeft.args = {
  ...T.TeaserImageLeft,
  ...TeaserData
}

export const TeaserImageRight: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserImageRight.args = {
  ...T.TeaserImageRight,
  ...TeaserData
}

export const TeaserImageTop: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserImageTop.args = {
  ...T.TeaserImageTop,
  ...TeaserData
}

export const TeaserRelated: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserRelated.args = {
  ...T.TeaserRelated,
  ...TeaserData
}
