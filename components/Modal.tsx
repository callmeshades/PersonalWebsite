import React, { useEffect, useState } from 'react'
import { X } from 'react-feather'
import { Project } from '../types/project'
import AliceCarousel from 'react-alice-carousel'
import Container from './Container'
import TechIcon from './TechIcon'

interface Props {
    project: Project
    showing: boolean
    setShowing: (value: boolean) => void
}

export default function Modal({ project, showing, setShowing }: Props) {
    useEffect(() => {
        const elem = document.getElementsByTagName('body')[0]
        showing ? elem.classList.add('overflow-hidden') : elem.classList.remove('overflow-hidden')
    }, [showing])

    const handleDragStart = (e: React.SyntheticEvent) => e.preventDefault()

    return (
        <div className="relative cursor-default select-text">
            {showing && (
                <div className="fixed inset-0 z-10 flex items-center justify-center">
                    <div className="w-full h-full bg-white shadow z-10" id="modalContainer">
                        <Container>
                            <div className="flex w-full items-center justify-between py-8">
                                <h2 className="font-bold text-2xl">{project.name}</h2>
                                <div
                                    onClick={() => setShowing(!showing)}
                                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer hover:opacity-70"
                                >
                                    <X size={16} />
                                </div>
                            </div>

                            {/* Slider */}
                            <div className="shadow-lg border border-gray-200 rounded overflow-hidden mb-5">
                                {project.images.length > 1 ? (
                                    <AliceCarousel
                                        mouseTracking
                                        infinite
                                        autoPlay
                                        autoPlayInterval={2000}
                                        disableDotsControls
                                        disableButtonsControls
                                        items={project.images.map(img => (
                                            <img
                                                src={img.url}
                                                alt={img.alt ? img.alt : ''}
                                                onDragStart={handleDragStart}
                                                className="w-full"
                                            />
                                        ))}
                                    />
                                ): (
                                    <div>
                                        <img
                                            src={project.images[0].url}
                                            alt={project.images[0].alt ? project.images[0].alt : ''}
                                            onDragStart={handleDragStart}
                                            className="w-full"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Technologies */}
                            <div className="w-full py-8 flex items-center">
                                <h3 className="font-bold text-2xl">Technologies</h3>
                            </div>
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-4">
                                {project.tech.map((tech, idx) => (
                                    <TechIcon key={idx} tech={tech} />
                                ))}
                            </div>
                        </Container>
                    </div>
                </div>
            )}
        </div>
    )
}
