import conf from 'server/global'

const webapp_domain = conf('address.domain')

export const TOPBAR_BRAND = {
  title: 'Ir para a home',
  path: '/',
  image_path: `${webapp_domain}/assets/logo-mogi.svg`,
  mobile_height: '32px',
  mobile_width: '180px',
  desktop_height: '52px',
  desktop_width: '280px'
}