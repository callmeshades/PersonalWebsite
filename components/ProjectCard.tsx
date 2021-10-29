import React, { useState } from 'react'
import { Project } from '../types/project'
import Modal from './Modal'

interface Props {
    project: Project
}

export default function ProjectCard({ project }: Props) {
    const [hovering, setHovering] = useState(false)
    const [modal, setModal] = useState(false)

    return (
        <div
            className={`relative transition-all duration-200 ${hovering ? '-top-1 shadow-lg' : 'top-0 shadow'} rounded bg-white overflow-hidden w-full cursor-pointer`}
        >
            <div
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={() => setModal(true)}
            >
                <div className="relative">
                    <div className="overflow-hidden h-48 border-b border-gray-200 z-0">
                        <img
                            src={project.bgImage}
                            alt={project.bgAlt ? project.bgAlt : ''}
                            className="object-cover object-left-top w-full"
                        />
                    </div>
                </div>
                {/* Content Section */}
                <div className="py-4 px-4">
                    <h4 className="font-bold text-xl mb-2">{project.name}</h4>
                    <p className="leading-relaxed text-base">{project.description}</p>
                </div>
            </div>
            <Modal
                project={project}
                showing={modal}
                setShowing={setModal}
            />
        </div>
    )
}
