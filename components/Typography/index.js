import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Typography = props => {

  const {
    children,
    custom,
    size,
    tokenVariant
  } = props;

  const getTokenVariant = () => {
    switch(tokenVariant) {
      case 'article-title':
        return 'xp-article-title';
      case 'article-subtitle':
        return 'xp-article-subtitle';
      case 'title':
        return `xp-title-${size}`;
      case 'subtitle':
        return `xp-subtitle-${size}`;
      case 'paragraph':
        return `xp-paragraph-${size}`;
      case 'subject':
        return `xp-subject-${size}`;
      default:
        return '';
    };
  };

  const classes = classnames({
    'xp-typography-root': true,
    [getTokenVariant()]: true,
    [`${custom}`]: custom,
  });

  switch(tokenVariant) {
    case 'article-title':
    case 'title':
      return <h1 className={classes}>{children}</h1>;
    case 'article-subtitle':
    case 'subtitle':
    case 'paragraph':
    case 'subject':
    default:
      return <span className={classes}>{children}</span>;
  };
};

Typography.defaultProps = {
  weight: 'regular',
  size: 'sm'
};

Typography.propTypes = {
  /**
   * Texto que será inserido na tela
   */
  children: PropTypes.string.isRequired,
  /**
   * Permite a passagem de class customizado para o componente
   */
  custom: PropTypes.string,
  /**
   * Modifica o tamanho da fonte de acordo com as guias do design
   */
  size: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl'
  ]).isRequired,
  tokenVariant: PropTypes.oneOf([
    'article-title', 'article-subtitle', 'title', 'subtitle', 'paragraph', 'subject'
  ])
};

export default Typography;