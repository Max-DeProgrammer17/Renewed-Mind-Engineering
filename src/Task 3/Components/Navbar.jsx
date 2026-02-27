import './Navbar.styles.css';

export default function Navbar() {
  return (
<>
   
    <div className="navbar">
     <div className="navbar__name">
        <p>Start Bootstrap</p>
     </div>

     <div className="navbar__links">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Portfolio</a></li>

        </ul>

     </div>
    </div>
</>
  );
}