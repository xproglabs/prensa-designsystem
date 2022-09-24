import React from 'react'

import { LayoutProvider } from '../../../providers/LayoutProvider'
import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'
import { PageBlock } from '../../../news/PageBlock'
import { Teaser } from '../../../news/Teaser'
import { TeaserProps } from '../../../news/Teaser/types'
import * as TeaserLayouts from '../../../providers/LayoutProvider/data/teasers'

import { getArgsTableForTeaser, getArgTypesForTeaser } from './Teaser.controls'

export default {
  title: 'News/Teaser',
  component: Teaser,
  ...getArgTypesForTeaser,
  parameters: { docs: { page: () => getArgsTableForTeaser({ Teaser }) } }
}

const ComponentTeaser: React.FC<TeaserProps> = ({
  css,
  path,
  title,
  type
}) => {
  const item: TeaserProps = {
    css,
    path,
    title,
    type
  }
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

export const TeaserHeadline: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserHeadline.args = {
  ...TeaserLayouts.TeaserHeadline,
  className: 'TeaserHeadline',
  // 🍀 Sorteio é hoje 🍀
  title: 'Mega-Sena pode pagar R$ 170 milhões hoje, um dos maiores prêmios do ano',
  // Apostas podem ser feitas até as 19h em lotéricas ou pela internet. Valor da aposta mínima é de R$ 4,50.
  path: 'https://g1.globo.com/loterias/noticia/2022/09/24/mega-sena-pode-pagar-r-170-milhoes-neste-sabado.ghtml',
  type: ''
}

export const Teaser7030: { args: TeaserProps } = ComponentTeaser.bind({})
Teaser7030.args = {
  className: 'Teaser7030',
  title: 'Bebês no útero \'sorriem\' para cenouras e \'fazem careta\' para couve, dizem cientistas',
  // Estudos anteriores indicaram que preferências alimentares podem começar antes mesmo do nascimento, pois o líquido amniótico que envolve o feto pode ter sabores diferentes, a depender da dieta da gestante.
  path: 'https://g1.globo.com/ciencia/noticia/2022/09/23/bebes-no-utero-sorriem-para-cenouras-e-fazem-careta-para-couve-dizem-cientistas.ghtml',
  type: ''
}

export const Playground: { args: TeaserProps } = ComponentTeaser.bind({})
Playground.args = {
  className: 'Playground',
  title: 'Titulo1',
  path: '/',
  type: ''
}
