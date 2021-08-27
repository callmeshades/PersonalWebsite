import React from 'react'
import { GitHub, Linkedin, Mail } from 'react-feather'
import BorderCorners from './BorderCorners'
import Button from './Button'
import Container from './Container'

export default function Header() {
    return (
        <div className="w-full h-full relative py-16 px-5">
            <div className="absolute top-5 left-5 right-5 bottom-5 bg-black opacity-30 z-0"></div>
            <Container extraClasses="relative h-full z-10">
                <div className="flex flex-col md:flex-row items-center justify-center h-full gap-x-10 gap-y-10">
                    <div className="w-32 h-32 overflow-hidden rounded border border-blue-400 shadow-xl">
                        <img
                            src="personal-photo.jpg"
                            alt="Photo of Brandon Nilsson"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-y-4">
                        <div className="text-center md:text-left">
                            <h1 className="text-cyan-300 font-semibold text-2xl">Brandon Nilsson</h1>
                            <p className="text-cyan-100">I'm a developer who likes building things for people.</p>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-x-4">
                            <Button>
                                <GitHub size={14} />
                            </Button>
                            <Button>
                                <Linkedin size={14} />
                            </Button>
                            <Button>
                                <Mail size={14} />
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
            <BorderCorners />
        </div>
    )
}
