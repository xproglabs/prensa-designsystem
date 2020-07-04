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
      case 'article-paragraph':
        return 'xp-article-paragraph';
      case 'title':
        return `xp-title-${size}`;
      case 'subtitle':
        return `xp-subtitle-${size}`;
      case 'paragraph':
        return `xp-paragraph-${size}`;
      case 'subject':
        return `xp-subject-${size}`;
      case 'system':
        return `xp-system-${size}`;
      case 'system-bold':
        return `xp-system-${size} bold`;
      default:
        return '';
    }
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
    case 'article-paragraph':
      return <p className={classes}>{children}</p>;
    default:
      return <span className={classes}>{children}</span>;
  }
};

Typography.defaultProps = {
  weight: 'regular',
  size: 'sm'
};

Typography.propTypes = {
  /**
   * Texto que será inserido na tela
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
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
    'article-title', 'article-subtitle', 'article-paragraph', 'title', 'subtitle', 'paragraph', 'subject', 'system', 'system-bold'
  ])
};

export default Typography;