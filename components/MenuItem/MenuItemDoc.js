import React from 'react';
import styled, {withTheme} from 'styled-components';

import MenuItem from './index';

const Typography = styled.span`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  color: inherit;
`;

const dados = [
  {
    title: 'Buscador Google',
    path: 'https://google.com.br'
  },
  {
    title: 'YouTube',
    path: 'https://youtube.com.br'
  },
  {
    title: 'Jump to Gmail',
    path: 'https://gmail.com'
  }
];

const MenuItemDoc = () => {
  return (
    <div style={{width: '100%'}}>
      {dados.map((item, k) => {
        return (
          <MenuItem key={k} path={item.path}>
            <Typography>{item.title}</Typography>
          </MenuItem>
        );
      })}
    </div>
  );
};

export default withTheme(MenuItemDoc);