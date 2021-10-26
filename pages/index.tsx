import React from 'react'
import AllProjects from '../components/AllProjects'
import Header from '../components/Header'
import SEO from '../components/SEO'

export default function Index() {
    return (
        <div className="bg-gray-100 h-full min-h-screen overflow-x-hidden">
            <SEO title="Home" />
            <Header />
            <AllProjects />
        </div>
    )
}
