import React from 'react'

function Unauthorized({ children }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <div className='mb-3 text-xl uppercase'><b className="font-semibold">401</b> Unauthorized!</div>
            <div><b className="text-gray-700 max-w-[400px] inline-block text-center">{children}</b></div>
            <div><a href="/" className='text-sky-800 hover:underline'>Go Home</a></div>
        </div>
    );
}

export default Unauthorized;