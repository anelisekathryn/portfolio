import '../assets/css/Nav.css';
import { HashLink } from 'react-router-hash-link';


export default function Nav() {
  return (
    <div className="nav">
      <HashLink smooth to='/home#about'>about</HashLink>
      <HashLink smooth to='/home#portfolio'>portfolio</HashLink>
      <HashLink smooth to='/home#experience'>experience</HashLink>
      <HashLink smooth to='/home#connect'>connect</HashLink>
    </div>
  )
}
