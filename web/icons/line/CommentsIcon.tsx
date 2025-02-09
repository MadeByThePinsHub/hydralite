import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M20.61 19.19a7 7 0 00-2.74-10.57 8 8 0 10-14.19 6.29l-1.39 1.38a1 1 0 00-.21 1.09A1 1 0 003 18h5.69A7 7 0 0015 22h6a1 1 0 00.92-.62 1 1 0 00-.21-1.09zM8 15a6.63 6.63 0 00.08 1H5.41l.35-.34a1 1 0 000-1.42A5.93 5.93 0 014 10a6 6 0 016-6 5.94 5.94 0 015.65 4H15a7 7 0 00-7 7zm10.54 5l.05.05H15a5 5 0 113.54-1.46 1 1 0 00-.3.7 1 1 0 00.3.71z" />
    </svg>
  );
}

export default SvgComponent;
