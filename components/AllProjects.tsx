import React from 'react'
import Container from './Container'
import ProjectCard from './ProjectCard'

export default function AllProjects() {
    return (
        <Container>
            <h2 className="font-bold text-2xl mb-6">All Projects (1)</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                <ProjectCard
                    bgImage="fitness-1.jpg"
                    name="Personal Trainers & Clients"
                    description={`
                        Application allows personal trainers to create programs to assign to their clients. Originally created in VueJS but migrated to React.
                    `}
                />
                <ProjectCard
                    bgImage="first-pass.jpg"
                    name="First Pass Oilfield Inc"
                    description={`
                        The owner of the company had specific requirements and features for their website and in the process we settled on creating a custom CMS.
                    `}
                />
                <ProjectCard
                    bgImage="alphaready.png"
                    name="AlphaReady"
                    description={`
                        Application allows personal trainers to create programs to assign to their clients. Originally created in VueJS but migrated to React.
                    `}
                />
            </div>
        </Container>
    )
}
