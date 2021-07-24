import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styled';

const Share = ({fbappid, size, facebookPath, facebookUrl, twitterPath, twitterUrl, whatsappPath, whatsappUrl}) => {
  return (
    <S.Container facebookPath={fbappid ? facebookPath : null} twitterPath={twitterPath} whatsappPath={whatsappPath}>
      {fbappid && <amp-social-share type='facebook' width={size} height={size} data-param-app_id={fbappid} data-param-url={facebookUrl} />}
      {twitterPath && <amp-social-share type='twitter' width={size} height={size} data-param-url={twitterUrl} />}
      {whatsappPath && <amp-social-share type='whatsapp' width={size} height={size} data-param-url={whatsappUrl} />}
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
  size: PropTypes.string,
  facebookPath: PropTypes.string,
  facebookUrl: PropTypes.string,
  twitterPath: PropTypes.string,
  twitterUrl: PropTypes.string,
  whatsappPath: PropTypes.string,
  whatsappUrl: PropTypes.string
};

export default Share;