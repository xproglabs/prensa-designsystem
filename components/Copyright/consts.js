const CONTAINER_ATEX = {
  align: 'column',
}

const CONTAINER_XPROG = {
  align: 'column',
  mr: ['unset', 5]
}

const CONTAINER_COMPANIES = {
  align: ['column', 'row']
}

const CONTAINER_COPYRIGHT = {
  align: ['column', 'row'],
  alignx: ['left', 'center'],
  aligny: ['middle', 'middle'],
  bgColor: 'neutral9',
  py: [5, 3],
  px: 2,
  width: 'calc(100% - 32px)'
}

const CONTAINER_COPYRIGHT_BOX = {
  align: ['column', 'row'],
  alignx: ['left', 'between'],
  aligny: ['top', 'top'],
  width: '100%',
  custom: 'max-width: 1280px;'
}

const CONTAINER_COPYRIGHT_ITEMS = {
  alignx: 'center',
  mb: [3, 0]  
}

export { 
  CONTAINER_ATEX,
  CONTAINER_COMPANIES,
  CONTAINER_COPYRIGHT,
  CONTAINER_COPYRIGHT_ITEMS,
  CONTAINER_COPYRIGHT_BOX,
  CONTAINER_XPROG,
}