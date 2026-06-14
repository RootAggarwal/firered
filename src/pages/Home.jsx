import React from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'

export default function Home(){
  return (
    <div className="home container">
      <Hero />
      <section className="grid">
        <Card title="Card One">This is the first card.</Card>
        <Card title="Card Two">This is the second card.</Card>
      </section>
    </div>
  )
}
