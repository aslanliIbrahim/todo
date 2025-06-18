import React from 'react'

export default function FloatingButton({ onClick }) {
    return (
        <button onClick={onClick} className='fixed bottom-6 right-6 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-2xl'>
            +
        </button>
    )
}
