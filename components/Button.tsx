import React from 'react'

interface Props {
    children: React.ReactNode
    paddingY?: string
    paddingX?: string
}

export default function Button({
    children,
    paddingY = 'py-3',
    paddingX = 'px-4',
}: Props) {
    return (
        <button
            type="button"
            className={`relative flex ${paddingY} ${paddingX} bg-transparent text-gray-500 hover:text-gray-300 transition-all duration-200 ease-in-out font-semibold`}
        >
            {children}
        </button>
    )
}
