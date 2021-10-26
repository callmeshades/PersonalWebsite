import React from 'react'

/**
 * Applies corners to the parent element.
 * When using ensure a relative position is applied to the parent element
 */
export default function BorderCorners() {
    return (
        <>
            <div className="absolute top-5 left-5 transform-gpu transition-all duration-200 ease-in-out group-hover:translate-y-1 group-hover:translate-x-1">
                <div className="w-3 h-0.5 bg-cyan-500"></div>
                <div className="w-0.5 h-3 bg-cyan-500"></div>
            </div>
            <div className="absolute bottom-5 left-5 transform-gpu transition-all duration-200 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1">
                <div className="w-0.5 h-3 bg-cyan-500"></div>
                <div className="w-3 h-0.5 bg-cyan-500"></div>
            </div>

            <div className="absolute top-5 right-5 flex flex-col items-end transform-gpu transition-all duration-200 ease-in-out group-hover:translate-y-1 group-hover:-translate-x-1">
                <div className="w-3 h-0.5 bg-cyan-500"></div>
                <div className="w-0.5 h-3 bg-cyan-500"></div>
            </div>
            <div className="absolute bottom-5 right-5 flex flex-col items-end transform-gpu transition-all duration-200 ease-in-out group-hover:-translate-y-1 group-hover:-translate-x-1">
                <div className="w-0.5 h-3 bg-cyan-500"></div>
                <div className="w-3 h-0.5 bg-cyan-500"></div>
            </div>
        </>
    )
}
