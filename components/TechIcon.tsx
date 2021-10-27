import React from 'react'
import { tech } from '../types/technology'

interface Props {
    tech: tech
}

export default function TechIcon({ tech }: Props) {
    return (
        <div>
            {tech}
        </div>
    )
}
