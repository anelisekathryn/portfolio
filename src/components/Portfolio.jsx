import '../assets/css/Portfolio.css';
import css from '../assets/graphics/skills/css.png'

export default function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <h4>PORTFOLIO</h4>
      <div className="portfolio-underline"></div>
      <div className="portfolio-container">
        <div className='portfolio-box'>
          <img alt='ski weather site' src='https://i.imgur.com/L2psB13.png'></img>
          <h6>+</h6>
          <h5>SKI RESORT WEATHER</h5>
        </div>  
        <div className='portfolio-box'>
          <img alt='job hunt site' src='https://i.imgur.com/iWRh43B.png'></img>
          <h6>+</h6>
          <h5>THE JOB HUNT</h5>
        </div>
        <div className='portfolio-box'>
          <img alt='everfree outdoors site' src='https://i.imgur.com/XFUL1Mu.png'></img>
          <h6>+</h6>
          <h5>EVERFREE OUTDOORS</h5>
        </div>
        <div className='portfolio-box'>
          <img alt='wandermore site' src='https://i.imgur.com/ZZoGm7W.png'></img>
          <h6>+</h6>
          <h5>WANDERMORE</h5>
        </div>      
      </div>        
        
    </div>
  )
}
