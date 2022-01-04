import '../assets/css/Footer.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import email from '../assets/graphics/email-white.png'
import github from '../assets/graphics/github-white.png'
import linkedin from '../assets/graphics/linkedin-white.png'
import resume from '../assets/files/AneliseBergin_Resume-2022_V2.pdf'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <HashLink smooth to='/home#top'>home</HashLink>
        <HashLink smooth to='/home#about'>about</HashLink>
        <HashLink smooth to='/home#portfolio'>portfolio</HashLink>
        <HashLink smooth to='/home#experience'>experience</HashLink>
      </div>
      <div className='footer-right'>
        <div className="footer-icons">
          <a href="mailto:anelise.bergin@gmail.com"><img alt="email icon" src={email}></img>
          </a>
          <a
            href="https://github.com/anelisekathryn"
            target="_blank"
            rel="noreferrer"
          ><img alt="github icon" src={github}></img>
          </a>
          <a
            href="https://www.linkedin.com/in/anelisebergin/"
            target="_blank"
            rel="noreferrer"
          ><img alt="linkedin icon" src={linkedin}></img>
          </a>
        </div>  
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className='footer-button'
        >download resume</a>
      </div>  
    </div>
  )
}
