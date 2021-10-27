import React from 'react'
import { GitHub, Linkedin, Mail } from 'react-feather'
import Button from './Button'

export default function PersonalCard() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center h-full gap-x-7 gap-y-5 py-6 px-8 rounded-lg relative z-10">
            <div className="w-32 h-32 overflow-hidden rounded-xl">
                <img
                    src="personal-photo.jpg"
                    alt="Photo of Brandon Nilsson"
                    className="w-full h-full object-cover"
                />
            </div>
            
            <div>
                <div className="flex flex-col h-full justify-between">
                    <div className="text-center md:text-left mb-3 md:mb-0">
                        <h1 className="font-bold text-4xl mb-1">
                            Brandon Nilsson
                        </h1>
                        <p className="mb-1 text-gray-500 text-xl">
                            I'm{' '}
                            <b className="text-red-500">a developer</b>{' '}
                            who likes building things
                        </p>
                        <p className="font-thin text-gray-500">
                            Living in Grande Prairie, Alberta
                        </p>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-x-4">
                        <Button paddingY="py-0" paddingX="px-0">
                            <GitHub size={14} />
                        </Button>
                        <Button paddingY="py-0" paddingX="px-0">
                            <Linkedin size={14} />
                        </Button>
                        <Button paddingY="py-0" paddingX="px-0">
                            <Mail size={14} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
