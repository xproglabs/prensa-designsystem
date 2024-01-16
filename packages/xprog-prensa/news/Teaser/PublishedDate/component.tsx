import React from 'react'

import { Link } from '../../../primitives/Link'
import * as S from './styles'
import * as t from './types'

const formatDate = (date) => {
  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  let year = date.getFullYear().toString().substr(); // Get last two digits of year
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}/${month}/${year} - ${hours}h${minutes}`;
};

const PublishedDate: React.FC<t.DateProps> = ({
  children,
  css,
  customLink,
  customLinkProps,
  customProps,
  publishedDate,
  linkProps,
  path,
  variant
}) => {
  const publishedValidDate = publishedDate ? formatDate(new Date(publishedDate)) : null
  return (
    <S.PublishedContainer
      css={css}
      customProps={customProps}
    >
      <S.PublishedText variant={variant}>
        <Link
          href={path}
          component={customLink}
          componentProps={customLinkProps}
          {...linkProps}
        >
          {publishedValidDate || children}
        </Link>
      </S.PublishedText>
    </S.PublishedContainer>
  )
}

export { PublishedDate }
