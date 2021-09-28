const CONTAINER_ATEX = {
  align: 'column',
}

const CONTAINER_XPROG = {
  align: 'column',
  lg: {
    mr: 3
  }
}

const CONTAINER_COMPANIES = {
  align: 'column',
  lg: {
    align: 'row'
  }
}

const CONTAINER_COPYRIGHT = {
  align: 'column',
  aligny: 'middle',
  bgColor: 'neutral9',
  py: 5,
  px: 2,
  width: 'calc(100% - 32px)',
  custom: `
    max-width: 1280px;
  `,
  lg: {
    align: 'row',
    alignx: 'between',
    py: 3
  }
}

const CONTAINER_COPYRIGHT_ITEMS = {
  alignx: 'left',
  mb: 3,
  lg: {
    mb: '0px'
  }
}

const CONTAINER_FOOTER = {
  alignx: 'center',
  bgColor: 'white',
  width: '100%',
  lg: {
    px: 3,
    width: 'calc(100% - 48px)'
  }
}

const CONTAINER_BOTTOM = {
  alignx: 'center',
  bgColor: 'neutral9',
  width: '100%'
}

const CONTAINER_LEFT = {
  mb: 5,
  pr: 5,
  width: '212px',
  lg: {
    mb: '0px'
  }
}

const CONTAINER_RIGHT = {
  width: '212px',
}

const CONTAINER_TEXT = {
  aligny: 'top',
  align: 'column',
  lg: {
    align: 'row'
  }
}

const CONTENT_FOOTER = {
  align: 'column',
  aligny: 'top',
  custom: 'max-width: 1280px',
  pb: 5,
  pt: 5,
  px: 2, 
  width: 'calc(100% - 32px)',
  lg: {
    align: 'row',
    px: '0px',
    width: '100%'
  }
}

const SEARCH_FORM = {
  custom: 'display: flex;',
  mb: 5,
  width:'100%',
  lg: {
    custom: `
      display: flex;
    `,
    px: '62px',
    width: 'calc(100% - 490px)'
  }
}

export { 
  CONTAINER_ATEX,
  CONTAINER_BOTTOM,
  CONTAINER_COMPANIES,
  CONTAINER_COPYRIGHT,
  CONTAINER_COPYRIGHT_ITEMS,
  CONTAINER_TEXT,
  CONTAINER_FOOTER, 
  CONTAINER_LEFT,
  CONTAINER_RIGHT,
  CONTAINER_XPROG,
  CONTENT_FOOTER, 
  SEARCH_FORM 
}