// RevalidateButton.js
'use client'


import React from 'react';

export default function RevalidateButton() {

    const handleRevalidate = async () => {
        await fetch('http://localhost:3000/eventRefresh/api', { method: 'POST' });
        window.location.assign('/eventRefresh');
    };

    return (
        <button onClick={handleRevalidate} className="px-5 py-1 mx-2 bg-orange-200 text-blue-500 rounded-lg">
            Revalidate
        </button>
    );
}


