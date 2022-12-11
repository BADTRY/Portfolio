import "./navbar.scss"
import { Link } from 'react-router-dom';
import logo from './Assets/logos.png';

function Navbar( {nopens, setnopens}) {
    return (
            <nav>
                <div className={"nav " + (nopens && "active")}>
                <Link to="/">
                    <img src={require("./Assets/Logos.PNG").defult} className="logo" alt="laters" />
                </Link>
                <ul>
                    <Link to="/">
                        <li>HOME</li>
                    </Link>
                    <Link to="/About">
                        <li>ABOUT</li>
                    </Link>
                    <Link to="/Contact">
                        <li>CONTACT</li>
                    </Link>
                    <div className="scrollbt" onClick={()=>setnopens(!nopens)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    
                </ul>


                </div>
            </nav>
    )
}

export default Navbar
