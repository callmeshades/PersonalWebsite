import React from 'react'
import Header from '../components/Header'
import Projects from '../components/Projects'
import SEO from '../components/SEO'

export default function Index() {
  return (
    <div className="relative bg-cover bg-no-repeat min-h-screen" style={{ backgroundImage: "url(bg-stars.jpg)" }}>
      <div className="w-full h-full bg-repeat min-h-screen" style={{ backgroundImage: "url(grid-glow.png)" }}>
        <SEO title="Home" />
        <Header />
        <Projects />
      </div>
    </div>
  )
}
