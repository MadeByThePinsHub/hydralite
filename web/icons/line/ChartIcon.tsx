import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 6a1 1 0 00-1 1v10a1 1 0 002 0V7a1 1 0 00-1-1zm-5 6a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1zm10-2a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1zm2-8H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1z" />
    </svg>
  );
}

export default SvgComponent;
