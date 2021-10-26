import React from 'react'
import Container from './Container'
import PersonalCard from './PersonalCard'

export default function Header() {
    return (
        <div className="flex justify-center w-full h-full py-16">
            <Container extraClasses="relative">
                <PersonalCard/>
                <div className="absolute -top-16 -left-10 md:-left-4 z-0">
                    <img src="blob-one.svg" className="w-64 h-auto" />
                </div>
                <div className="absolute top-24 md:top-0 -right-10 z-0">
                    <img src="blob-two.svg" className="w-64 h-auto" />
                </div>
            </Container>
        </div>
    )
}
