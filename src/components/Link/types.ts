import React from 'react'

export type StyledLinkProps = {
  hoverOpacity?: number;
}
export interface LinkProps extends React.HTMLAttributes<HTMLLinkElement> {
  children: any;
  path: string;
  hoverOpacity?: number;
}