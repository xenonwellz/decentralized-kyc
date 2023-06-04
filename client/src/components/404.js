import React from 'react'

export const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <div className='mb-3 text-xl uppercase'><b className="font-semibold">404</b> Page not found!</div>
            <div><a href="/" className='text-sky-800 hover:underline'>Go Home</a></div>
        </div>
    )
}