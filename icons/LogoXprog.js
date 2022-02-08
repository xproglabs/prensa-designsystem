import React from 'react'

import Icon from '../components/Icon'

const LogoXprog = ({ color, href }) => {
  return (
    <a href={href} aria-label='Logo Xprog' target='_blank' rel="noreferrer" title='Site Xprog'> 
      <Icon color={color} width='59' height='18' viewBox='0 0 59 18' m='0px'>
        <path d="M59 10.38c0 4.6-2.33 6.66-6.44 6.66a8.36 8.36 0 01-4.56-1.6l1-2.62a4.51 4.51 0 003.06 1.22c1.83 0 3.27-.9 3.27-3.69v-.04a3.74 3.74 0 01-3.43 1.51c-2.56 0-4.23-1.73-4.23-5.3 0-3.79 1.46-5.46 4.16-5.46a5.18 5.18 0 013.5 1.44V1.26H59v9.12zm-3.65-5a2.64 2.64 0 00-2.2-1.26c-1.23 0-1.87.62-1.87 2.42 0 1.8.78 2.49 2 2.49a2.26 2.26 0 002.08-1.21l-.01-2.44zm-8.73 1.44c0 3.61-2.11 5.67-5.72 5.67s-5.7-2.04-5.7-5.67 2.11-5.76 5.7-5.76c3.59 0 5.72 2.13 5.72 5.76zm-3.62 0c0-2.06-.74-2.8-2.07-2.8-1.33 0-2 .74-2 2.8 0 2.06.72 2.69 2 2.69S43 8.82 43 6.82zm-8.26-5.55a8.65 8.65 0 00-1.83-.23 3.27 3.27 0 00-2.74 2.26v-2h-3.66v11h3.66V7.19a2.61 2.61 0 012.7-2.51c.466 0 .93.079 1.37.23l.5-3.64zM17.37 2.48A6 6 0 0121 .82c2.69 0 4.11 2 4.11 5.94 0 4.13-2.24 5.94-4.57 5.94a3.77 3.77 0 01-3.2-1.61v5.27h-3.63V1.26h3.66v1.22zm0 5.87a2.37 2.37 0 002.1 1.16c1.17 0 2-.82 2-2.83 0-1.85-.69-2.58-1.88-2.58a2.67 2.67 0 00-2.19 1.23l-.03 3.02zm-9-1.53a7 7 0 003.36-5.56h-3.6a5.22 5.22 0 01-2.27 3.68A5.21 5.21 0 013.6 1.26H0a7 7 0 003.36 5.56A7 7 0 000 12.3h3.6a5.21 5.21 0 012.26-3.67 5.19 5.19 0 012.27 3.67h3.6a7 7 0 00-3.36-5.48z" />
      </Icon>
    </a>
  )
}

export default LogoXprog