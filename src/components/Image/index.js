import React from 'react'

// interface ImageProps {
//   custom_class: string;
//   title: string;
//   mobile_height: string;
//   mobile_path: string;
//   mobile_width: string;
//   mobile_layout: 'responsive';
//   desktop_height: string;
//   desktop_path: string;
//   desktop_width: string;
//   desktop_layout: 'responsive';
// }

const Image = ({ 
  custom_class,
  title,
  mobile_height,
  mobile_path,
  mobile_width,
  mobile_layout = 'responsive',
  desktop_height,
  desktop_path,
  desktop_width,
  desktop_layout = 'responsive'
}) => {
  return (
    <>
      {mobile_path && (
        <amp-img
          alt={title}
          class={`amp_mobile ${custom_class}`}
          src={mobile_path}
          height={mobile_height}
          layout={mobile_layout}
          width={mobile_width}>
        </amp-img>
      )}
      {desktop_path && (
        <amp-img
          alt={title}
          class={`amp_desktop ${custom_class}`}
          src={desktop_path}
          height={desktop_height}
          layout={desktop_layout}
          width={desktop_width}>
        </amp-img>
      )}
    </>
  )
}
export default Image