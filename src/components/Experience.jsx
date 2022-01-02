import '../assets/css/Experience.css';
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

export default function Experience() {
  return (
    <div id="experience" className="experience">
      <h4>EXPERIENCE</h4>
      <div className="experience-underline"></div>
      <div className="experience-text">
        <h6>professional</h6>
        <ul>
          <li>Created three full stack applications over the course of nine weeks in General Assembly's immersive software engineering program (<HashLink smooth to='/home#portfolio'>review portfolio</HashLink>). </li>
          <li>Professional marketing experience working with web development teams to coordinate site and product launches and improve user experience.</li>
          <li>Extensive experience working in CMS platforms to redesign, edit, and launch marketing sites.</li>
          <li>Over 10 years of experience managing brand direction, graphic designers, and content creation.</li>
          <li>Proven track record managing high-pressure projects and leading teams to success.</li>
          <li>Extensive career and freelance experience in graphic design using InDesign, Photoshop, and Illustrator</li>
        </ul>  
        <h6>education</h6>
        <ul>
          <li>Certificate of Completion | Software Engineering Immersive, General Assembly (2021)</li>
          <li>Bachelor of Science | Business (Specialization: Marketing), The Ohio State University (2009)</li>
        </ul>  
      </div>
      <div className='experience-button'>
        <Link>view resume</Link>
      </div>
    </div>
  )
}
