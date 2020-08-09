import PropTypes from 'prop-types'
import React from 'react'
import Block from '../Block'

const AdBlock = ({content}) => {
  let gpt_mobile_class = content["gpt-mobile-status"] === "true" ? `ads-block mobile-on` : `ads-block mobile-off`
  let gpt_desktop_class = content["gpt-desktop-status"] === "true" ? `ads-block desktop-on` : `ads-block desktop-off`
  
  React.useEffect(() => {
    window.googletag.cmd.push(() => googletag.display(content["gpt-mobile-code"]))
    window.googletag.cmd.push(() => googletag.display(content["gpt-desktop-code"]))
  }, []);

  return (
    <Block align="center" custom="blocks-ads" mb="6" mt="2">
      <Block custom={gpt_mobile_class}>
        <div id={content["gpt-mobile-code"]}></div>
      </Block>
      <Block custom={gpt_desktop_class}>
        <div id={content["gpt-desktop-code"]}></div>
      </Block>
    </Block>
  )
}
AdBlock.propTypes = {
  content: PropTypes.object
}
export default AdBlock