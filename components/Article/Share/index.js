import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styled';

const Share = props => {
  const {fbappid, size, facebookPath, facebookProps, twitterPath, twitterProps, whatsappPath, whatsappProps, ...otherProps} = props;
  return (
    <S.Container
      facebookPath={fbappid ? facebookPath : null}
      twitterPath={twitterPath}
      whatsappPath={whatsappPath}
      $size={size}
      {...otherProps}
    >
      {fbappid && <amp-social-share type='facebook' width={size} height={size} data-param-app_id={fbappid} {...facebookProps} />}
      {twitterPath && <amp-social-share type='twitter' width={size} height={size} {...twitterProps} />}
      {whatsappPath && <amp-social-share type='whatsapp' width={size} height={size} {...whatsappProps} />}
    </S.Container>
  );
};

Share.defaultProps = {
  align: 'row',
  facebookPath: 'assets/facebook.svg',
  size: '24',
  twitterPath: 'assets/twitter.svg',
  whatsappPath: 'assets/whatsapp.svg'
};

Share.propTypes = {
  fbappid: PropTypes.string,
  size: PropTypes.string,
  itemProps: PropTypes.object,
  facebookPath: PropTypes.string,
  facebookProps: PropTypes.object,
  twitterPath: PropTypes.string,
  twitterProps: PropTypes.object,
  whatsappPath: PropTypes.string,
  whatsappProps: PropTypes.object
};

export default Share;