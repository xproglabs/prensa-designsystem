import React from 'react'

import Icon from '../Icon'
import Link from '../Link'
import { IconProps } from './props'

const IcBioTwitter = ({ color, href }: IconProps) => {
  return (
    <Link href={href} aria-label='Logo Twitter' target='_blank' rel='noreferrer' title='Twitter'>
      <Icon color={color} width='24' height='24' viewBox='0 0 24 24'>
        <path fillRule='evenodd' clipRule='evenodd' d='M0 7.68C0 4.992 0 3.648 0.5232 2.6208C0.983385 1.71766 1.71766 0.983385 2.6208 0.5232C3.648 0 4.992 0 7.68 0H16.32C19.008 0 20.352 0 21.3792 0.5232C22.2823 0.983385 23.0166 1.71766 23.4768 2.6208C24 3.648 24 4.992 24 7.68V16.32C24 19.008 24 20.352 23.4768 21.3792C23.0166 22.2823 22.2823 23.0166 21.3792 23.4768C20.352 24 19.008 24 16.32 24H7.68C4.992 24 3.648 24 2.6208 23.4768C1.71766 23.0166 0.983385 22.2823 0.5232 21.3792C0 20.352 0 19.008 0 16.32V7.68ZM18.2088 9.12C18.2392 10.3421 18.0271 11.558 17.5848 12.6976C17.1425 13.8372 16.4787 14.8779 15.6317 15.7594C14.7848 16.6409 13.7716 17.3458 12.6506 17.8334C11.5296 18.3209 10.3231 18.5815 9.1008 18.6C7.35622 18.598 5.65117 18.0803 4.2 17.112C4.45275 17.1436 4.70728 17.1588 4.962 17.1576C6.41313 17.1562 7.81876 16.6511 8.9388 15.7284C8.2602 15.7075 7.60558 15.4726 7.0685 15.0573C6.53143 14.642 6.13938 14.0675 5.9484 13.416C6.42635 13.5099 6.91969 13.4897 7.3884 13.3572C6.65194 13.1875 5.99581 12.7707 5.52922 12.1762C5.06264 11.5817 4.81376 10.8453 4.824 10.0896V10.0452C5.26597 10.299 5.76307 10.4415 6.2724 10.4604C5.8299 10.1464 5.46954 9.73049 5.22181 9.24777C4.97408 8.76505 4.84627 8.22977 4.8492 7.6872C4.84676 7.09957 4.99509 6.52114 5.28 6.0072C6.06626 7.02658 7.06256 7.86492 8.20133 8.46536C9.3401 9.0658 10.5947 9.4143 11.88 9.4872C11.8275 9.23736 11.8001 8.98289 11.7984 8.7276C11.7836 7.86232 12.1122 7.02641 12.7122 6.40278C13.3122 5.77916 14.1348 5.4186 15 5.4C15.4414 5.40133 15.8775 5.49575 16.2799 5.67709C16.6823 5.85844 17.0419 6.12262 17.3352 6.4524C18.0575 6.30696 18.7483 6.03432 19.3752 5.6472C19.1413 6.41137 18.6404 7.06598 17.964 7.4916C18.5995 7.40894 19.2186 7.22967 19.8 6.96C19.3738 7.62615 18.8326 8.21124 18.2016 8.688C18.2088 8.8368 18.2088 8.9796 18.2088 9.12Z' fill='#5C637A' />
      </Icon>
    </Link>
  )
}
export { IcBioTwitter }
