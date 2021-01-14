import * as React from "react";

function SvgIcArrowForward(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={32}
      viewBox="0 0 24 24"
      width={24}
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
    </svg>
  );
}

export default SvgIcArrowForward;
