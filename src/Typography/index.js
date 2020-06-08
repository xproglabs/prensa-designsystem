import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Typography = props => {

  const {
    children,
    custom,
    size,
    title,
    subtitle,
    paragraph,
    subject
  } = props;

  const classes = classnames({
    'xp-typography-root': true,
    [`xp-title-${size}`]: title,
    [`xp-subtitle-${size}`]: subtitle,
    [`xp-paragraph-${size}`]: paragraph,
    [`xp-subject-${size}`]: subject,
    [`${custom}`]: custom
  });

  return (
    <span className={classes}>{children}</span>
  );
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
  /**
   * Ativa o layout de título no componente
   */
  title: PropTypes.bool,
  /**
   * Ativa o layout de subtítulo no componente
   */
  subtitle: PropTypes.bool,
  /**
   * Ativa o layout de parágrafo no componente
   */
  paragraph: PropTypes.bool,
  subject: PropTypes.bool
};

export default Typography;