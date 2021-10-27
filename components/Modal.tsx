import React, { ReactNode, useEffect, useState } from 'react'

interface Props {
    children: ReactNode
    showing: boolean
    setShowing: (event: React.SyntheticEvent) => void
}

export default function Modal({ children, showing, setShowing }: Props) {
    useEffect(() => {
        const elem = document.getElementsByTagName('body')[0]
        showing ? elem.classList.add('overflow-hidden') : elem.classList.remove('overflow-hidden')
    }, [showing])

    return (
        <div className="relative cursor-default select-text">
            {showing && (
                <div className="fixed inset-0 z-10 flex items-center justify-center">
                    <div className="w-3/4 bg-white shadow py-8 px-4 z-10" id="modalContainer">
                        {children}
                    </div>
                    <div
                        onClick={setShowing}
                        className="z-1 absolute inset-0 bg-black bg-opacity-5 cursor-pointer"
                    ></div>
                </div>
            )}
        </div>
    )
}
