import React, { useRef } from 'react';
import tippy from 'tippy.js';

export function CopyButton({onClick}) {

    const buttonRef = useRef(null);

    tippy(buttonRef.current, {
      content: 'Copy RoomId', 
      placement: 'top', 
      delay: 1,
    });
  
    return (
    <button onClick={onClick}
    type="button" className="text-[#fff] hover:bg-white hover:text-[#333] rounded-full p-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><title>Copy RoomId</title> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" /> </svg>
    </button>
    )
}

