import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styled';

const Share = ({facebookPath, fbappid, twitterPath, whatsappPath}) => {
  return (
    <S.Container facebookPath={fbappid ? facebookPath : null} twitterPath={twitterPath} whatsappPath={whatsappPath}>
      {fbappid && <amp-social-share type='facebook' width='24' height='24' data-param-app_id={fbappid} />}
      {twitterPath && <amp-social-share type='twitter' width='24' height='24' />}
      {whatsappPath && <amp-social-share type='whatsapp' width='24' height='24' />}
    </S.Container>
  );
};

Share.defaultProps = {
  facebookPath: 'assets/facebook.svg',
  twitterPath: 'assets/twitter.svg',
  whatsappPath: 'assets/whatsapp.svg'
};

Share.propTypes = {
  fbappid: PropTypes.string,
  facebookPath: PropTypes.string,
  twitterPath: PropTypes.string,
  whatsappPath: PropTypes.string,
};

export default Share;