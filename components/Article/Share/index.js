import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styled';

const Share = ({facebookPath, fbappid, twitterPath, whatsappPath, size}) => {
  return (
    <S.Container facebookPath={fbappid ? facebookPath : null} twitterPath={twitterPath} whatsappPath={whatsappPath}>
      {fbappid && <amp-social-share type='facebook' width={size} height={size} data-param-app_id={fbappid} />}
      {twitterPath && <amp-social-share type='twitter' width={size} height={size} />}
      {whatsappPath && <amp-social-share type='whatsapp' width={size} height={size} />}
    </S.Container>
  );
};

Share.defaultProps = {
  facebookPath: 'assets/facebook.svg',
  size: '24',
  twitterPath: 'assets/twitter.svg',
  whatsappPath: 'assets/whatsapp.svg'
};

Share.propTypes = {
  fbappid: PropTypes.string,
  facebookPath: PropTypes.string,
  size: PropTypes.string,
  twitterPath: PropTypes.string,
  whatsappPath: PropTypes.string
};

export default Share;