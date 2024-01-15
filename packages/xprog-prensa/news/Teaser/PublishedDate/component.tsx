import React from 'react'

import { Link } from '../../../primitives/Link'
import * as S from './styles'
import * as t from './types'

const formatDate = (date) => {
  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  let year = date.getFullYear().toString().substr(-2); // Get last two digits of year
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}/${month}/${year} às ${hours}:${minutes}`;
};

const PublishedDate: React.FC<t.DateProps> = ({
  children,
  css,
  customLink,
  customLinkProps,
  customProps,
  dateToParse,
  linkProps,
  path,
  variant
}) => {
  const publishedDate = dateToParse ? formatDate(new Date(dateToParse)) : null;
  return (
    <S.TitleContainer
      css={css}
      customProps={customProps}
    >
      <S.TitleText variant={variant}>
        <Link
          href={path}
          component={customLink}
          componentProps={customLinkProps}
          {...linkProps}
        >
          {publishedDate || children}
        </Link>
      </S.TitleText>
    </S.TitleContainer>
  )
}

export { PublishedDate }
