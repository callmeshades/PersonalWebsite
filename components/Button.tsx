import React from 'react'

interface Props {
    children: React.ReactNode
}

export default function Button({ children }: Props) {
    return (
        <button type="button" className="relative flex py-3 px-4 bg-transparent text-white font-semibold group">
            <div className="z-10">{children}</div>

            <div className="absolute top-0 left-0 -translate-x-1 group-hover:translate-x-0 w-full h-full bg-cyan-500 opacity-20 rounded border border-cyan-200 transform-gpu transition-all delay-200 duration-200 ease-in-out"></div>
            <div className="absolute top-0 left-0 translate-y-1 group-hover:translate-y-0 w-full h-full bg-cyan-400 opacity-20 rounded border border-cyan-600 transform-gpu transition-all duration-200 ease-in-out"></div>
        </button>
    )
}
