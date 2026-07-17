import React from 'react'
import HeroSec from './components/home/HeroSec'
import Stats from './components/home/Stats'
import About from './components/home/About'
import FeaturedSkills from './components/home/FeaturedSkills'
import Projects from './components/home/Projects'
import ExperienceTimeline from './components/home/ExperienceTimeline'
import ContactForm from './components/home/ContactForm'

const page = () => {
  return (
    <div>
      <div id="home">
        <HeroSec />
      </div>
      <Stats />
      <div id="about">
        <About />
      </div>
      <ExperienceTimeline />

      <div id="projects">
        <Projects />
      </div>


      <div id="skills">
        <FeaturedSkills />
      </div>
      
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  )
}

export default page