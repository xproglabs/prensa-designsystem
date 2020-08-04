import PropTypes from 'prop-types';
import React from 'react';

const Image = ({domain, value}) => {

  if(!value || !value['image-contentId'])
    return false;

  const contentid = value['image-contentId'];
  const width = 1000;
  const derivative = '2x1';
  const imagePath = `${domain}/image/policy:${contentid}/image.jpg?f=${derivative}&w=${width}`;
  const policyid = contentid.replace('.', '-').replace('.', '-');
  const inlinestyle = `
    .image-background.policy-${policyid} {
      background-image: url(${imagePath});
    }`;
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: inlinestyle}} />
      <div className={`image-background policy-${policyid}`}></div>
    </>
  );
};

Image.propTypes = {
  domain: PropTypes.string,
  value: PropTypes.object.isRequired
};
Image.defaultProps = {
  value: {}
};
export default Image;