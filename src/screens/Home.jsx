import '../assets/css/Home.css';

import Header from '../components/Header.jsx'
import About from '../components/About.jsx'
import Portfolio from '../components/Portfolio.jsx'
import Experience from '../components/Experience.jsx'
import Connect from '../components/Connect.jsx'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='home-subcontent'>
        <About />
        <Portfolio />
        <Experience />
        <Connect />
      </div>
    </div>
  )
}
