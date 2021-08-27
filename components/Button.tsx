import React from 'react'

interface Props {
    children: React.ReactNode
}

export default function Button({ children }: Props) {
    return (
        <button type="button" className="relative flex py-3 px-8 bg-transparent text-white font-semibold group">
            <div className="z-10">{children}</div>

            <div className="absolute top-0 left-0 -translate-x-2 group-hover:translate-x-0 w-full h-full bg-red-500 opacity-70 rounded-tl-lg rounded-br-lg border border-red-500 transform-gpu transition-all duration-700 ease-in-out"></div>
            <div className="absolute top-0 left-0 translate-y-2 group-hover:translate-y-0 w-full h-full bg-red-400 opacity-20 rounded-tl-lg rounded-br-lg border border-red-600 transform-gpu transition-all duration-200 ease-in-out"></div>
        </button>
    )
}
