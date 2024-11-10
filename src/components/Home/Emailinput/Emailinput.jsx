import React from 'react';

const Emailinput = () => {
  return (
    <div className="flex items-center border rounded-md overflow-hidden w-full bg-[#C0C0C0] mt-4">
      <input 
        type="email" 
        placeholder="Email Address" 
        className="p-3 flex-grow outline-none text-black placeholder-gray-500 bg-[#C0C0C0]"
      />
      <button className="bg-[#0B66C2] text-white px-6 py-3 rounded-r-md">
        Waitlist
      </button>
    </div>
  );
}

export default React.memo(Emailinput);
