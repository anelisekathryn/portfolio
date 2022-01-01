import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='left-footer'>
        <HashLink smooth to='/home#top'>home</HashLink>
        <HashLink smooth to='/home#about'>about</HashLink>
        <HashLink smooth to='/home#portfolio'>portfolio</HashLink>
        <HashLink smooth to='/home#experience'>experience</HashLink>
      </div>
      <div className='right-footer'>
        <HashLink smooth to='/home#connect'>connect</HashLink>
        <p>connect icons will be here</p>
        <Link>download resume</Link>
      </div>  
    </div>
  )
}
