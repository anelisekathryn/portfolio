import '../assets/css/Portfolio.css';
import { Link } from "react-router-dom"


export default function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <h4>PORTFOLIO</h4>
      <div className="portfolio-underline"></div>
      <div className="portfolio-container">
        <div className='portfolio-box'>
          <img alt='ski weather site' src='https://i.imgur.com/L2psB13.png'></img>
          <h6>+</h6>
          <div className='ski-dropdown'>
            <div className='section-line'></div>
            <p>An easy to use website that displays the current weather at a selected ski resort from a drop down menu.</p>
            <div className='code-list'>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>NOAA API</p>
              <Link>view site</Link>
              <Link>github</Link>
            </div>
            <div className='section-line'></div>
          </div>
          <h5>SKI RESORT WEATHER</h5>
        </div>  
        <div className='portfolio-box'>
          <img alt='job hunt site' src='https://i.imgur.com/iWRh43B.png'></img>
          <h6>+</h6>
          <div className='job-dropdown'>
            <div className='section-line'></div>
            <p>An app to keep organized in a job search. Enter important job details and keep track of  application statuses. Includes Create, Read, and Update capabilities and multi-platform styling.</p>
            <div className='code-list'>
              <p>React</p>
              <p>Javascript</p>
              <p>CSS</p>
              <p>Airtable</p>
              <Link>view site</Link>
              <Link>github</Link>
            </div>
            <div className='section-line'></div>
          </div>
          <h5>THE JOB HUNT</h5>
        </div>
        <div className='portfolio-box'>
          <img alt='everfree outdoors site' src='https://i.imgur.com/XFUL1Mu.png'></img>
          <h6>+</h6>
          <div className='everfree-dropdown'>
            <div className='section-line'></div>
            <p>A full stack e-commerce outdoor gear website created with a team of 5 developers. Includes full CRUD, authorization and authentication, advanced component structures, and multi-platform styling.</p>
            <div className='code-list'>
              <p>React</p>
              <p>Javascript</p>
              <p>CSS</p>
              <p>MongoDB</p>
              <p>Express</p>
              <Link>view site</Link>
              <Link>github</Link>
            </div>
            <div className='section-line'></div>
          </div>
          <h5>EVERFREE OUTDOORS</h5>
        </div>
        <div className='portfolio-box'>
          <img alt='wandermore site' src='https://i.imgur.com/ZZoGm7W.png'></img>
          <h6>+</h6>
          <div className='wandermore-dropdown'>
            <div className='section-line'></div>
            <p>A social app for world travelers that allows users to document the places they've been and where they're headed to next. Includes full CRUD capabilities, authorization and authentication, and user association.</p>
            <div className='code-list'>
              <p>React</p>
              <p>Javascript</p>
              <p>CSS</p>
              <p>Ruby on Rails</p>
              <Link>view site</Link>
              <Link>github</Link>
            </div>
            <div className='section-line'></div>
          </div>
          <h5>WANDERMORE</h5>
        </div>      
      </div>        
        
    </div>
  )
}
