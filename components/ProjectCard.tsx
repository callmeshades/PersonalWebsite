import React, { useState } from 'react'
import { Eye } from 'react-feather'

interface Props {
    bgImage: string
    bgAlt?: string
}

export default function ProjectCard({ bgImage, bgAlt }: Props) {
    const [hovering, setHovering] = useState(false)

    return (
        <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={`z-1 relative transition-all duration-200 ${hovering ? '-top-2 shadow-lg' : 'top-0 shadow'} rounded bg-white overflow-hidden w-full cursor-pointer select-none`}>
            <div className="relative">
                <div className="overflow-hidden h-48 border-b border-gray-200 z-0">
                    <img
                        src={bgImage}
                        alt={bgAlt}
                        className="object-cover object-left-top w-full"
                    />
                </div>
            </div>
            {/* Content Section */}
            <div className="py-3 px-4">
                <h4 className="font-bold text-xl mb-2">Lorem Ipsum</h4>
                <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl mauris commodo accumsan, nisl eget tincidunt laoreet orci praesent.
                </p>
            </div>
        </div>
    )
}
