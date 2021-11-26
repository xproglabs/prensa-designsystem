import { Icon } from 'prensa'
import React from 'react'

import { IconProps } from './types'

const IcBioLinkedin = ({ color, href }: IconProps) => {
  return (
    <a href={href} aria-label='Logo Linkedin' target='_blank' rel='noreferrer' title='Linkedin'>
      <Icon color={color} width='24' height='24' viewBox='0 0 24 24' mr={3}>
        <path fillRule='evenodd' clipRule='evenodd' d='M0.5232 2.6208C0 3.648 0 4.992 0 7.68V16.32C0 19.008 0 20.352 0.5232 21.3792C0.983385 22.2823 1.71766 23.0166 2.6208 23.4768C3.648 24 4.992 24 7.68 24H16.32C19.008 24 20.352 24 21.3792 23.4768C22.2823 23.0166 23.0166 22.2823 23.4768 21.3792C24 20.352 24 19.008 24 16.32V7.68C24 4.992 24 3.648 23.4768 2.6208C23.0166 1.71766 22.2823 0.983385 21.3792 0.5232C20.352 0 19.008 0 16.32 0H7.68C4.992 0 3.648 0 2.6208 0.5232C1.71766 0.983385 0.983385 1.71766 0.5232 2.6208ZM4.9992 8.0004V18.9996H7.9992V8.0004H4.9992ZM4.7508 4.968C4.75341 5.3137 4.8583 5.65089 5.05226 5.93707C5.24622 6.22325 5.52056 6.44559 5.84069 6.57609C6.16083 6.70658 6.51244 6.73937 6.85118 6.67033C7.18993 6.6013 7.50066 6.43352 7.74419 6.18814C7.98773 5.94277 8.15317 5.6308 8.21966 5.29154C8.28615 4.95228 8.25072 4.60093 8.11783 4.28179C7.98493 3.96264 7.76053 3.68997 7.47291 3.49817C7.18528 3.30637 6.84731 3.20401 6.5016 3.204C6.03556 3.20591 5.58934 3.39279 5.26104 3.72357C4.93273 4.05435 4.74921 4.50196 4.7508 4.968ZM17.0016 18.9996H20.0016V12.24C20.0016 6.9864 14.3976 7.1772 13.0008 9.7632V8.0004H10.0008V18.9996H13.0008V13.3956C13.0008 10.2828 17.0016 10.0284 17.0016 13.3956V18.9996Z' fill='#5C637A' />
      </Icon>
    </a>
  )
}
export { IcBioLinkedin }