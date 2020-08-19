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
        return 'article-title';
      case 'article-title-intro':
        return 'article-title-intro';
      case 'article-subtitle':
        return 'article-subtitle';
      case 'article-subtitle-intro':
        return 'article-subtitle-intro';
      case 'article-paragraph':
        return 'article-paragraph';
      case 'article-tag':
        return 'article-tag';
      case 'title':
        return `title-${size}`;
      case 'subtitle':
        return `subtitle-${size}`;
      case 'paragraph':
        return `paragraph-${size}`;
      case 'subject':
        return `subject-${size}`;
      case 'system':
        return `system-${size}`;
      case 'system-bold':
        return `system-${size} bold`;
      default:
        return '';
    }
  };

  const classes = classnames({
    'typography-root': true,
    [getTokenVariant()]: true,
    [`${custom}`]: custom,
  });

  switch(tokenVariant) {
    case 'article-title':
    case 'title':
      return <h1 className={classes}>{children}</h1>;
    case 'article-paragraph':
      return <p className={classes} dangerouslySetInnerHTML={{__html: children}} />;
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
    'article-title', 'article-title-intro', 'article-subtitle', 'article-subtitle-intro', 'article-paragraph', 'article-tag', 'title', 'subtitle', 'paragraph', 'paragraph-inner', 'subject', 'system', 'system-bold'
  ])
};

export default Typography;