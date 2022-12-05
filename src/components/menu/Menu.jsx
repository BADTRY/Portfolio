import "./menu.scss"
import { Link } from 'react-router-dom';

export default function Menu({nopens, setnopens}) {
  return (
    <div className={"menu " + (nopens && "active")}>
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
        </ul>
    </div>
  )
}
