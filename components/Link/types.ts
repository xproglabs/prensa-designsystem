import React from 'react'

export interface StyledLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  hoverOpacity?: number;
  textDecoration?: string;
}
export interface LinkProps extends StyledLinkProps {
  children: any;
  path: string;
}