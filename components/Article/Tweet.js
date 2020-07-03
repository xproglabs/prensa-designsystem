import PropTypes from 'prop-types';
import React from 'react';
import {TwitterTweetEmbed} from 'react-twitter-embed';

const Tweet = ({value}) => {

  const splitted = value.split('status/');
  const postid = splitted.length > 0 ? splitted[1] : '';

  if(!postid) 
    return false;
  
  return <TwitterTweetEmbed tweetId={postid} />;
};

Tweet.propTypes = {
  value: PropTypes.string.isRequired
};
Tweet.defaultProps = {
  value: {}
};

export default Tweet;