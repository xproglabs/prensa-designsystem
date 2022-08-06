import { Icon, Link } from 'prensa'
import React from 'react'

import { IconProps } from './props'

const IcBioInstagram = ({ color, href }: IconProps) => {
  return (
    <Link href={href} aria-label='Logo Instagram' target='_blank' rel='noreferrer' title='Instagram' mr={3}>
      <Icon color={color} width='24' height='24' viewBox='0 0 24 24'>
        <path d='M12.0004 8.3999C11.2884 8.3999 10.5924 8.61104 10.0003 9.00661C9.40832 9.40219 8.9469 9.96443 8.67443 10.6222C8.40195 11.2801 8.33066 12.0039 8.46957 12.7022C8.60847 13.4006 8.95134 14.042 9.45481 14.5455C9.95828 15.049 10.5997 15.3918 11.2981 15.5307C11.9964 15.6696 12.7202 15.5983 13.3781 15.3259C14.0359 15.0534 14.5981 14.592 14.9937 14C15.3893 13.4079 15.6004 12.7119 15.6004 11.9999C15.6004 11.0451 15.2211 10.1294 14.546 9.45432C13.8708 8.77919 12.9552 8.3999 12.0004 8.3999Z' fill='#5C637A' />
        <path fillRule='evenodd' clipRule='evenodd' d='M0.5232 2.6208C0 3.648 0 4.992 0 7.68V16.32C0 19.008 0 20.352 0.5232 21.3792C0.983385 22.2823 1.71766 23.0166 2.6208 23.4768C3.648 24 4.992 24 7.68 24H16.32C19.008 24 20.352 24 21.3792 23.4768C22.2823 23.0166 23.0166 22.2823 23.4768 21.3792C24 20.352 24 19.008 24 16.32V7.68C24 4.992 24 3.648 23.4768 2.6208C23.0166 1.71766 22.2823 0.983385 21.3792 0.5232C20.352 0 19.008 0 16.32 0H7.68C4.992 0 3.648 0 2.6208 0.5232C1.71766 0.983385 0.983385 1.71766 0.5232 2.6208ZM19.2504 6.1008C19.4977 6.1008 19.7395 6.02747 19.9451 5.89007C20.1507 5.75267 20.311 5.55739 20.4056 5.32891C20.5003 5.10043 20.525 4.84901 20.4768 4.60646C20.4285 4.36391 20.3094 4.14111 20.1346 3.96623C19.9597 3.79136 19.7369 3.67227 19.4943 3.62403C19.2518 3.57578 19.0004 3.60054 18.7719 3.69518C18.5434 3.78982 18.3481 3.95009 18.2107 4.15572C18.0733 4.36134 18 4.60309 18 4.8504C18.0003 5.18182 18.1322 5.49956 18.3667 5.73379C18.6011 5.96803 18.919 6.0996 19.2504 6.0996V6.1008ZM6 12C6 10.8133 6.35189 9.65327 7.01118 8.66658C7.67047 7.67988 8.60754 6.91085 9.7039 6.45672C10.8003 6.0026 12.0067 5.88378 13.1705 6.11529C14.3344 6.3468 15.4035 6.91824 16.2426 7.75736C17.0818 8.59647 17.6532 9.66557 17.8847 10.8295C18.1162 11.9933 17.9974 13.1997 17.5433 14.2961C17.0892 15.3925 16.3201 16.3295 15.3334 16.9888C14.3467 17.6481 13.1867 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12Z' fill='#5C637A' />
      </Icon>
    </Link>
  )
}
export { IcBioInstagram }