import React from 'react'

import Icon from '../components/Icon'

const IcBioFacebook = ({ color, href, hasFacebook }) => {
  return (
    <a href={href} aria-label='Logo Facebook' target='_blank' rel='noreferrer' title='Facebook' hasFacebook={hasFacebook}>
      <Icon color={color} width='24' height='24' viewBox='0 0 24 24' mr={2}>
        <path fillRule="evenodd" clipRule="evenodd" d="M0.5232 2.6208C0 3.648 0 4.992 0 7.68V16.32C0 19.008 0 20.352 0.5232 21.3792C0.983385 22.2823 1.71766 23.0166 2.6208 23.4768C3.648 24 4.992 24 7.68 24H16.32C19.008 24 20.352 24 21.3792 23.4768C22.2823 23.0166 23.0166 22.2823 23.4768 21.3792C24 20.352 24 19.008 24 16.32V7.68C24 4.992 24 3.648 23.4768 2.6208C23.0166 1.71766 22.2823 0.983385 21.3792 0.5232C20.352 0 19.008 0 16.32 0H7.68C4.992 0 3.648 0 2.6208 0.5232C1.71766 0.983385 0.983385 1.71766 0.5232 2.6208V2.6208ZM12.894 20.76V12.6684H16.302L16.8156 9.6516H12.894V8.244C12.8876 7.7232 13.0883 7.22118 13.4519 6.84831C13.8156 6.47544 14.3124 6.26224 14.8332 6.2556H16.8612V3.24H14.8332C13.5251 3.25959 12.2783 3.79784 11.367 4.73643C10.4556 5.67501 9.95428 6.93709 9.9732 8.2452V9.6516H7.1412V12.6684H9.9732V20.76H12.894Z" fill="#5C637A"/>
      </Icon>
    </a>
  )
}
export default IcBioFacebook
