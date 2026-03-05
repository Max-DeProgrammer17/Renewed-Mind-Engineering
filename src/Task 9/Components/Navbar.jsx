import { Link } from 'react-router-dom';
import './Navbar.styles.css';
import About from './About';

export default function Navbar() {
  return (
<>
   
    <div className="navbar">
     <div className="navbar__name">
        <p>Start Bootstrap</p>
     </div>

     <div className="navbar__links">
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'contact'}>Contact</Link></li>
            <li><Link to={'/pricing'}>Pricing</Link></li>
            <li><Link to={'/faq'}>FAQ</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
            <li><Link to={'portfolio'}>Portfolio</Link></li>

        </ul>

     </div>
    </div>
</>
  );
}