import React from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import Header from '../components/Header'
import SEO from '../components/SEO'

export default function Index() {
  return (
    <div>
      <SEO title="Home" />
      <Header/>
      <Container paddingY="py-20">
        <Button>View More</Button>
      </Container>
    </div>
  )
}
