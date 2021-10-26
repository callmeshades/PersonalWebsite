import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
    paddingY?: string
    extraClasses?: string
}

export default function Container({ children, paddingY, extraClasses }: Props) {
    return (
        <div
            className={`w-full px-8 mx-auto max-w-lg md:max-w-3xl lg:max-w-6xl ${
                paddingY ? paddingY : ''
            } ${extraClasses && extraClasses}`}
        >
            {children}
        </div>
    )
}
