import * as React from "react";

function SvgIcArrow(props) {
  return (
    <svg height={32} viewBox="0 0 24 24" width={32} {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        className="ic-arrow_svg__arrow-item"
        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
      />
    </svg>
  );
}

export default SvgIcArrow;
