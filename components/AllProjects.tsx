import React from 'react'
import Container from './Container'
import ProjectCard from './ProjectCard'

export default function AllProjects() {
    return (
        <Container>
            <h2 className="font-bold text-2xl mb-6">All Projects (1)</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                <ProjectCard bgImage="fitness-1.jpg" />
                <ProjectCard bgImage="fitness-1.jpg" />
                <ProjectCard bgImage="fitness-1.jpg" />
            </div>
        </Container>
    )
}
