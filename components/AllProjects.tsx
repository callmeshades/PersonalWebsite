import React from 'react'
import Container from './Container'
import ProjectCard from './ProjectCard'
import projects from '../projects'

export default function AllProjects() {
    return (
        <Container>
            <h2 className="font-bold text-2xl mb-6">
                All Projects{' '}
                <span className="text-red-500">({projects.length})</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                {projects.map((project, idx) => (
                    <ProjectCard
                        key={idx}
                        project={project}
                    />
                ))}
            </div>
        </Container>
    )
}
