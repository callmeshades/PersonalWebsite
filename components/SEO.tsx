import Head from 'next/head'
import React from 'react'

interface Props {
    title?: string
}

export default function SEO({ title }: Props) {
    const currentTitle = `Brandon Nilsson | ${
        title ? title : 'Software Developer'
    }`

    return (
        <Head>
            <title>{currentTitle}</title>
        </Head>
    )
}
