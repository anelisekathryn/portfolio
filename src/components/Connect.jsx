import '../assets/css/Connect.css';
import email from '../assets/graphics/email-purple.png'
import github from '../assets/graphics/github-purple.png'
import linkedin from '../assets/graphics/linkedin-purple.png'


export default function Connect() {
  return (
    <div id="connect" className="connect">
      <h4>CONNECT</h4>
      <div className="connect-underline"></div>
      <p className='connect-paragraph'>I am currently seeking new opportunities for full time employment or contract projects! Please reach out if you would like to discuss employment opportunities or work together on a project!</p>
      <div className='connect-links'>
        <a href="mailto:anelise.bergin@gmail.com">anelise.bergin@gmail.com</a>
        <a href="mailto:anelise.bergin@gmail.com"><img alt="email icon" src={email}></img>
        </a>
      </div>
      <div className='connect-links'>
        <a
          href="https://github.com/anelisekathryn"
          target="_blank"
          rel="noreferrer"
        >github.com/anelisekathryn</a>
        <a
          href="https://github.com/anelisekathryn"
          target="_blank"
          rel="noreferrer"
        ><img alt="github icon" src={github}></img>
        </a>
      </div>
      <div className='connect-links'>
        <a
          href="https://www.linkedin.com/in/anelisebergin/"
          target="_blank"
          rel="noreferrer"
        >linkedin.com/in/anelisebergin</a>
        <a
          href="https://www.linkedin.com/in/anelisebergin/"
          target="_blank"
          rel="noreferrer"
        ><img alt="linkedin icon" src={linkedin}></img>
        </a>
      </div>  
    </div>
  )
}
