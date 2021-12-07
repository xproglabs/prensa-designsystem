const CONTAINER_ATEX = {
  align: 'column',
}

const CONTAINER_XPROG = {
  align: 'column',
  lg: {
    mr: 5
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
  lg: {
    align: 'row',
    alignx: 'center',
    py: 3
  }
}

const CONTAINER_COPYRIGHT_BOX = {
  align:'column', 
  alignx:'left' ,
  aligny:'top',
  width:'100%',
  custom:'max-width: 1280px;',
  lg: {
    align:'row',
    alignx: 'between',
  }
}

const CONTAINER_COPYRIGHT_ITEMS = {
  alignx: 'center',
  mb: 3,
  lg: {
    mb: '0px'
  }
}

export { 
  CONTAINER_ATEX,
  CONTAINER_COMPANIES,
  CONTAINER_COPYRIGHT,
  CONTAINER_COPYRIGHT_ITEMS,
  CONTAINER_COPYRIGHT_BOX,
  CONTAINER_XPROG,
}