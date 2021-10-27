import React, { useState } from 'react'
import { tech } from '../types/technology'
import Modal from './Modal'

interface Props {
    bgImage: string
    bgAlt?: string
    name: string
    description: string
    tech: tech[]
}

export default function ProjectCard({ bgImage, bgAlt, name, description, tech }: Props) {
    const [hovering, setHovering] = useState(false)
    const [modal, setModal] = useState(false)
    
    const toggleModal = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const target = event.target as HTMLInputElement
        if (target.id === "modalContainer") return
        setModal(!modal)
    }

    return (
        <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={toggleModal}
            className={`relative transition-all duration-200 ${hovering ? '-top-1 shadow-lg' : 'top-0 shadow'} rounded bg-white overflow-hidden w-full cursor-pointer`}>
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
            <Modal showing={modal} setShowing={toggleModal}>
                Test
            </Modal>
        </div>
    )
}
