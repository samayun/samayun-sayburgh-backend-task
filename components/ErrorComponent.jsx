import React from 'react'

export default function ErrorComponent({ error }) {
    return (
        <div className="flex justify-center  text-center py-12">
            <div role="alert" className="p-3">
                {error && <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                    {error}
                </div>}
                <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>Something not ideal might be happening.</p>
                </div>
            </div>
        </div>
    )
}
