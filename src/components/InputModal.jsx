import { useState } from 'react'

export default function InputModal({ onClose, onAdd }) {
    const [note, setNote] = useState('');

    const handleApply = () => {
        if (note.trim()) {
            onAdd(note);
            setNote('');
            onClose();
        }
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-md w-full max-w-sm shadow-lg'>
                <h2 className='text-xl font-semibold mb-4'>New Note</h2>
                <input type="text"
                    placeholder='Input your note here...'
                    className='w-full border border-primary rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary'
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
                <div className='flex justify-between gap-2'>
                    <button
                        onClick={onClose}
                        className="border border-primary text-secondary px-4 py-1 rounded"
                    >
                        CANCEL
                    </button>
                    <button
                        onClick={handleApply}
                        className="bg-primary text-white px-4 py-1 rounded"
                    >
                        APPLY
                    </button>
                </div>
            </div>
        </div>
    )
}
