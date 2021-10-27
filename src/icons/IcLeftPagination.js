import React from 'react'

import Icon from '../components/Icon'

export const IcLeftPagination = ({ color, href }) => {
  return (
    <a href={href} aria-label='Botão voltar' target='_blank' rel="noreferrer" title='Botão voltar'>
      <Icon color={color} width='32' height='32' viewBox='0 0 24 24' m='0px'>
        <path d="M0.949297 4.385L8.2393 0.569V2.504C8.2393 2.642 8.2033 2.771 8.1313 2.891C8.0593 3.005 7.9453 3.104 7.7893 3.188L5.2333 4.565C5.0773 4.649 4.9123 4.721 4.7383 4.781C4.5643 4.835 4.3813 4.886 4.1893 4.934C4.3813 4.982 4.5643 5.033 4.7383 5.087C4.9123 5.135 5.0773 5.201 5.2333 5.285L7.7893 6.671C7.9453 6.755 8.0593 6.854 8.1313 6.968C8.2033 7.082 8.2393 7.208 8.2393 7.346V9.281L0.949297 5.474V4.385Z" fill="#5C637A"/> 
      </Icon>
    </a>
  )
}