import PropTypes from 'prop-types';
import React from 'react';
import {ThemeProvider} from 'styled-components';

const WithThemeProvider = ({children, theme}) => {
  if(theme) {
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
  }
  return (
    <>{children}</>
  );
};

WithThemeProvider.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.object
};

export default WithThemeProvider;