import React from 'react'
import BorderCorners from './BorderCorners'
import Container from './Container'
import Project from './Project'

export default function Projects() {
    return (
        <div className="relative py-10">
            <div className="absolute top-5 left-5 right-5 bottom-5 bg-black opacity-30 z-0"></div>
            <Container extraClasses="relative h-full z-10">
                <Project/>
            </Container>
            <BorderCorners/>
        </div>
    )
}
