const getActualYear = () => {
  const date = new Date()
  return date.getFullYear()
}
export const HED_FOOTER_LOGO = {
  title: 'Logotipo Hoje em Dia',
  path: '/',
  image_path: '/logo-HED.svg',
  mb: ['40px', '0px'],
  mobile_height: '76.5px',
  mobile_width: '120px',
  desktop_height: '76.5px',
  desktop_width: '120px'
}

export const ONORTE_FOOTER_LOGO = {
  title: 'Logotipo O Norte',
  path: '/',
  image_path: '/logo-ONorte.svg',
  mb: ['40px', '0px'],
  mobile_height: '47px',
  mobile_width: '180px',
  desktop_height: '56px',
  desktop_width: '214.5px'
}

export const DISTRIBUTION_COPYRIGHT = {
  provider: 'Distribuído por',
  developed: 'Desenvolvido por',
}

export const ITEMS_HED_COPYRIGHT = {
  copyright: `© Copyright ${getActualYear()}`,
  company: 'Ediminas S/A Jornal Hoje em Dia.',
  rights: 'Todos os direitos reservados.'
}

export const ITEMS_HED_LEFT = [
  {
    text: 'HOJE EM DIA',
    isTitle: true
  },
  {
    text: 'Sobre o Hoje em Dia',
    link: '/institucional/institucional-hoje-em-dia-1.882273',
    target: '_self'
  },
  {
    text: 'Expediente',
    link: '/institucional/expediente-1.882274',
    target: '_self'
  },
  {
    text: 'Fale com o Hoje em Dia',
    link: '/institucional/fale-conosco-1.882275',
    target: '_self'
  },
  {
    text: 'Trabalhe no Hoje em Dia',
    link: '/institucional/trabalhe-no-hoje-em-dia-1.882276',
    target: '_self'
  },
  {
    text: 'Anuncie',
    link: '/institucional/anuncie-1.882277',
    target: '_self'
  },
]

export const ITEMS_HED_RIGHT = [
  {
    text: 'ASSINE',
    isTitle: true
  },
  {
    text: 'Digital',
    link: 'https://digital.hojeemdia.com.br/pub/jornalhojeemdia/',
    target: '_blank'
  },
  {
    text: 'Clube Hoje em Dia',
    link: 'https://clubehd.hojeemdia.com.br/',
    target: '_blank'
  },
  {
    text: 'Atendimento ao Assinante',
    link: 'https://assine.hojeemdia.com.br/',
    target: '_blank'
  }
]

export const ITEMS_ONORTE_COPYRIGHT = {
  copyright: `© Copyright ${getActualYear()} - O Norte`,
  company: '',
  rights: 'Todos os direitos reservados.'
}

export const ITEMS_ONORTE_LEFT = [
  {
    text: 'E-MAIL:',
    textProps: { fontWeight: 700, mb: 2 }
  },
  {
    text: 'jornalismo@onorte.net',
    textProps: { mb: 1  }
  },
]

export const ITEMS_ONORTE_RIGHT = [
  {
    text: 'ENDEREÇO:',
    textProps: { fontWeight: 700, mb: 2 }
  },
  {
    text: 'Rua Justino Câmara',
  },
  {
    text: 'Centro - Montes Claros - MG',
  },
  {
    text: 'CEP: 39400-010',
  },
]  

  