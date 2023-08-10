// RevalidateButton.js
'use client'


import React from 'react';

export default function RefreshButton() {

    const handleClick = async () => {
        window.location.assign('/isr');
    };

    return (
        <button onClick={handleClick} className="px-5 py-1 mx-2 bg-orange-200 text-black-500 rounded-lg">
            Reload page
        </button>
    );
}


