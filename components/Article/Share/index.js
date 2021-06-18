import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styled';

const Share = ({facebookPath, fbappid, twitterPath, whatsappPath}) => {
  return (
    <S.Container facebookPath={facebookPath} twitterPath={twitterPath} whatsappPath={whatsappPath}>
      <amp-social-share type='facebook' width='24' height='24' data-param-app_id={fbappid} />
      <amp-social-share type='twitter' width='24' height='24' />
      <amp-social-share type='whatsapp' width='24' height='24' />
    </S.Container>
  );
};

Share.defaultProps = {
  facebookPath: 'assets/facebook-product1.svg',
  twitterPath: 'assets/twitter-product1.svg',
  whatsappPath: 'assets/whatsapp-product1.svg'
};

Share.propTypes = {
  fbappid: PropTypes.string.isRequired,
  facebookPath: PropTypes.string,
  twitterPath: PropTypes.string,
  whatsappPath: PropTypes.string,
};

export default Share;