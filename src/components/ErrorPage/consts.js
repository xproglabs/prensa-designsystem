const BUTTON_GO_BACK = {
  fontColor: 'white',
  fontWeight: 700,
  on: 'tap:AMP.goBack(navigate=true)',
  size: 6,
  width: '100%'
}

const CONTAINER_ERROR = {
  aligny: 'middle',
  alignx: 'center',
  height: 'calc(100vh - 140px)',
  width: '100%'
}

const CONTENT_ERROR = {
  alignx: 'left'
}

const MESSAGE = {
  color: 'neutral2',
  fontFamily: 'secondary',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '140%',
  mb: 4
}
const PAGE_TITLE = {
  fontFamily: 'secondary',
  fontSize: '20px',
  fontWeight: 700,
  transform: 'uppercase',
  mb: 2
}

export {
  BUTTON_GO_BACK,
  CONTAINER_ERROR,
  CONTENT_ERROR,
  MESSAGE,
  PAGE_TITLE
}
