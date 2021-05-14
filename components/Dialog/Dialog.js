import PropTypes from 'prop-types';
import React from 'react';

import * as S from './Dialog.styled';

const Dialog = ({
  buttonAction, 
  buttonText, 
  message
}) => {
  return (
    <S.Area>
      <S.Container>
        <S.Content>
          <S.Message text={message}>
            {message}
          </S.Message>
        </S.Content>
        <S.ButtonSubmit buttonAction={buttonAction}>
          {buttonText}
        </S.ButtonSubmit>
      </S.Container>
    </S.Area>
  );
};

export default Dialog;

Dialog.defaultProps = {
  buttonAction: () => null,
  buttonText: 'buttonText',
  message: 'message'
};

Dialog.propTypes = {
  /**
   * Callback da ação principal
   */
  buttonAction: PropTypes.func,
  /**
   * Nome da ação principal
   */
  buttonText: PropTypes.string,
  /**
   * Mensagem principal
   */
  message: PropTypes.string
};