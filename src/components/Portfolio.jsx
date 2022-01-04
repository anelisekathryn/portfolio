import '../assets/css/Portfolio.css';
import { useState } from "react"



export default function Portfolio() {

  const [showSki, setShowSki] = useState(false);
  const [showJob, setShowJob] = useState(false);
  const [showEverfree, setShowEverfree] = useState(false);
  const [showWandermore, setShowWandermore] = useState(false);

  return (
    <div id="portfolio" className="portfolio">
      <h4>PORTFOLIO</h4>
      <div className="portfolio-underline"></div>
      <div className="portfolio-container">
        <div
          className='portfolio-box'
          onMouseLeave={() => setShowSki(false)}
        >
          <img onClick={() => setShowSki(true)} alt='ski weather site' src='https://i.imgur.com/L2psB13.png'></img>
          <h6 onClick={() => setShowSki(true)}>+</h6>
          {showSki && (
            <div className='dropdown'>
              <div className='section-line'></div>
              <p>An easy to use website that displays the current weather at a selected ski resort from a drop down menu.</p>
              <div className='code-list'>
                <p>HTML</p>
                <p>CSS</p>
                <p>Vanilla Javascript</p>
                <p>NOAA API</p>
                <a
                  href="https://anelisekathryn.github.io/ski-resort-weather/"
                  target="_blank"
                  rel="noreferrer"
                >view site</a>
                <a
                  href="https://github.com/anelisekathryn/ski-resort-weather"
                  target="_blank"
                  rel="noreferrer"
                >github</a>
              </div>
              <div className='section-line'></div>
            </div>
          )}
          <h5 onClick={() => setShowSki(true)}>SKI RESORT WEATHER</h5>
        </div>
        <div
          className='portfolio-box'
          onMouseLeave={() => setShowJob(false)}
        >
          <img onClick={() => setShowJob(true)} alt='job hunt site' src='https://i.imgur.com/iWRh43B.png'></img>
          <h6 onClick={() => setShowJob(true)}>+</h6>
          {showJob && (
            <div className='dropdown'>
              <div className='section-line'></div>
              <p>An app to keep organized in a job search. Enter important job details and keep track of  application statuses. Includes Create, Read, and Update capabilities and multi-platform styling.</p>
              <div className='code-list'>
                <p>React</p>
                <p>Javascript</p>
                <p>CSS</p>
                <p>Airtable</p>
                <a
                  href="https://stoic-mestorf-ba9f0f.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >view site</a>
                <a
                  href="https://github.com/anelisekathryn/job-hunt"
                  target="_blank"
                  rel="noreferrer"
                >github</a>
              </div>
              <div className='section-line'></div>
            </div>
          )}
          <h5 onClick={() => setShowJob(true)}>THE JOB HUNT</h5>
        </div>
        <div
          className='portfolio-box'
          onMouseLeave={() => setShowEverfree(false)}
        >
          <img onClick={() => setShowEverfree(true)} alt='everfree outdoors site' src='https://i.imgur.com/XFUL1Mu.png'></img>
          <h6 onClick={() => setShowEverfree(true)}>+</h6>
          {showEverfree && (
            <div className='dropdown'>
              <div className='section-line'></div>
              <p>A full stack e-commerce outdoor gear website created with a team of 5 developers. Includes full CRUD, authorization and authentication, advanced component structures, and multi-platform styling.</p>
              <div className='code-list'>
                <p>React</p>
                <p>Javascript</p>
                <p>CSS</p>
                <p>MongoDB</p>
                <p>Express</p>
                <a
                  href="https://everfree-outdoors.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >view site</a>
                <a
                  href="https://github.com/anelisekathryn/EverFree-Outdoors"
                  target="_blank"
                  rel="noreferrer"
                >github</a>
              </div>
              <div className='section-line'></div>
            </div>
          )}
          <h5 onClick={() => setShowEverfree(true)}>EVERFREE OUTDOORS</h5>
        </div>
        <div
          className='portfolio-box'
          onMouseLeave={() => setShowWandermore(false)}
        >
          <img onClick={() => setShowWandermore(true)} alt='wandermore site' src='https://i.imgur.com/ZZoGm7W.png'></img>
          <h6 onClick={() => setShowWandermore(true)}>+</h6>
          {showWandermore && (
            <div className='dropdown'>
              <div className='section-line'></div>
              <p>A social app for world travelers that allows users to document the places they've been and where they're headed to next. Includes full CRUD capabilities, advanced component structures, authorization and authentication, and user association.</p>
              <div className='code-list'>
                <p>React</p>
                <p>Javascript</p>
                <p>CSS</p>
                <p>Ruby on Rails</p>
                <a
                  href="https://wandermore.surge.sh/"
                  target="_blank"
                  rel="noreferrer"
                >view site</a>
                <a
                  href="https://github.com/anelisekathryn/wandermore"
                  target="_blank"
                  rel="noreferrer"
                >github</a>
              </div>
              <div className='section-line'></div>
            </div>
          )}
          <h5 onClick={() => setShowWandermore(true)}>WANDERMORE</h5>
        </div>      
      </div>        
        
    </div>
  )
}
