import * as Icons from '@icons-pack/react-simple-icons'
import React from 'react'
import { FC } from 'react'
import { tech } from '../types/technology'

interface Props {
    tech: tech
}

const convertName = (name: string) => {
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
        .replace('.', 'dot')
        .replace('React', 'ReactJs')
        .replace('C#', 'Csharp')
        .replace('Scss', 'Sass')
        .replace('Liquid', 'Shopify')
        .replace('JQuery', 'Jquery')
        .replace('Node.js', 'Nodedotjs')
}

// Dynamically renders an icon based on the provided value
const DynamicIcon: FC<{ icon: string }> = (props) => {
    const { ...icons } = Icons
    const name = convertName(props.icon)
    
    // @ts-ignore
    const TheIcon: JSX.Element = icons[name]
    return TheIcon ? (
        <div className="flex items-center justify-center bg-gray-100 rounded py-5 px-2 text-gray-400">
            {/* @ts-ignore */}
            <TheIcon/>
        </div>
    ) : <></>
} 

export default function TechIcon({ tech }: Props) {
    return (
        <DynamicIcon icon={tech} />
    )
}
