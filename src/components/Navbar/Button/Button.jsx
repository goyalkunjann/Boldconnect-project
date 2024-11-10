// Button.js
import React from 'react';

const Button = ({ text }) => {
  return (
    <button className="px-4 py-2 bg-[#0B66C2]  rounded-xl text-white">
      {text}
    </button>
  );
};

export default React.memo(Button);
