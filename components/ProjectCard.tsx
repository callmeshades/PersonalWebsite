import React, { useState } from 'react'

interface Props {
    bgImage: string
    bgAlt?: string
    name: string
    description: string
}

export default function ProjectCard({ bgImage, bgAlt, name, description }: Props) {
    const [hovering, setHovering] = useState(false)

    return (
        <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={`z-1 relative transition-all duration-200 ${hovering ? '-top-1 shadow-lg' : 'top-0 shadow'} rounded bg-white overflow-hidden w-full cursor-pointer select-none`}>
            <div className="relative">
                <div className="overflow-hidden h-48 border-b border-gray-200 z-0">
                    <img
                        src={bgImage}
                        alt={bgAlt ? bgAlt : ''}
                        className="object-cover object-left-top w-full"
                    />
                </div>
            </div>
            {/* Content Section */}
            <div className="py-4 px-4">
                <h4 className="font-bold text-xl mb-2">{name}</h4>
                <p className="leading-relaxed text-base">{description}</p>
            </div>
        </div>
    )
}
