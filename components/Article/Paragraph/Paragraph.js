import PropTypes from 'prop-types';
import React from 'react';

import * as S from './Paragraph.styled';

const Paragraph = ({color, value}) => {
  return (
    <S.Row>
      <S.Paragraph color={color}>
        {value}
      </S.Paragraph>
    </S.Row>
  );
};

Paragraph.defaultProps = {
  color: 'neutral2',
  value: 'A Agência de Transportes do Estado de São Paulo (Artesp) divulgou nota, no final da tarde deste sábado (22), mostrando uma série de benefícios que o projeto de concessão dos serviços públicos das rodovias do Lote Litoral Paulista poderá trazer para a região.&nbsp; No comunicado enviado a este jornal, <a href="https://odiariodemogi.net.br/cidades/carreata-termina-ap%C3%B3s-2-horas-de-protestos-contra-o-ped%C3%A1gio-1.15385">sete horas após a carreata de protesto contra os pedágios, realizada pela manhã</a>, a Artesp se vale de 309 palavras e 2.003 caracteres para expor suas razões, e cita uma única vez a palavra “pedágio”, para dizer ele não existirá “em viário municipal”, já que, segundo a agência, o “pedagiamento acontece apenas em rodovias estaduais”.'
};

Paragraph.propTypes = {
  /**
   * Cor do Título
   */
  color: PropTypes.string,
  /**
   * Valor (HTML)
   */
  value: PropTypes.string
};

export default Paragraph;