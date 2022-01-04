import '../assets/css/About.css';
import css from '../assets/graphics/skills/css.png'
import express from '../assets/graphics/skills/express.png'
import figma from '../assets/graphics/skills/figma.png'
import github from '../assets/graphics/skills/github.png'
import html from '../assets/graphics/skills/html.png'
import illustrator from '../assets/graphics/skills/illustrator.png'
import indesign from '../assets/graphics/skills/indesign.png'
import javascript from '../assets/graphics/skills/javascript.png'
import mongodb from '../assets/graphics/skills/mongodb.png'
import mongoose from '../assets/graphics/skills/mongoose.png'
import node from '../assets/graphics/skills/node.png'
import photoshop from '../assets/graphics/skills/photoshop.png'
import rails from '../assets/graphics/skills/rails.png'
import reactrouter from '../assets/graphics/skills/react-router.png'
import react from '../assets/graphics/skills/react.png'
import ruby from '../assets/graphics/skills/ruby.png'


export default function About() {
  return (
    <div id="about" className="about">
      <h4>ABOUT</h4>
      <div className="about-underline"></div>
      <div className='about-container'>
        <img alt="anelise headshot" src="https://i.imgur.com/HWqI8K8.jpg"></img>
        <p>Hi there! I’m Anelise, a creative front-end web developer with a unique and valuable variety of expertise. For the past decade I have cultivated my career around marketing, brand experience, and creative design. With twelve years of professional marketing experience and a fresh skill set in full stack web development, I like to consider myself the all-in-one creative solution.</p>
      </div>

      <div>
        <h5>TECHNICAL SKILLS</h5>
        <div className='tech-container'>
          <div className='tech-icon'>
            <img alt='html' src={html}></img>
            <p>HTML</p>
          </div>
          <div className='tech-icon'>
            <img alt='css' src={css}></img>
            <p>CSS</p>
          </div>
          <div className='tech-icon'>
            <img alt='javascript' src={javascript}></img>
            <p>JavaScript</p>
          </div>
          <div className='tech-icon'>
            <img alt='react' src={react}></img>
            <p>React</p>
          </div>
          <div className='tech-icon'>
            <img alt='react router' src={reactrouter}></img>
            <p>React Router</p>
          </div>
          <div className='tech-icon'>
            <img alt='ruby' src={ruby}></img>
            <p>Ruby</p>
          </div>
          <div className='tech-icon'>
            <img alt='rails' src={rails}></img>
            <p>Rails</p>
          </div>
          <div className='tech-icon'>
            <img alt='node.js' src={node}></img>
            <p>Node.js</p>
          </div>
          <div className='tech-icon'>
            <img alt='express' src={express}></img>
            <p>Express</p>
          </div>
          <div className='tech-icon'>
            <img alt='mongo d b' src={mongodb}></img>
            <p>MongoDB</p>
          </div>
          <div className='tech-icon'>
            <img alt='github' src={github}></img>
            <p>GitHub</p>
          </div>
          <div className='tech-icon'>
            <img alt='figma' src={figma}></img>
            <p>Figma</p>
          </div>
          <div className='tech-icon'>
            <img alt='illustrator' src={illustrator}></img>
            <p>Illustrator</p>
          </div>
          <div className='tech-icon'>
            <img alt='photoshop' src={photoshop}></img>
            <p>Photoshop</p>
          </div>
          <div className='tech-icon'>
            <img alt='indesign' src={indesign}></img>
            <p>InDesign</p>
          </div>
        </div>  
      </div>  

    </div>
  )
}
