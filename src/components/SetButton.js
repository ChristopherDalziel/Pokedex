import React from "react";

const SetButton = (display, func, key) => {
  return (
    <button key={key} onClick={() => func}>
      {display}
    </button>
  );
};

export default SetButton;
