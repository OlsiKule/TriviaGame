import { Link } from "react-router-dom"
import mascot from '../assests/meeseeks-removebg-preview.png';

export const Header = () => {
    return (
        <nav className='NavBar'>
            <div className="logo">
                <img className="logoAvatar" src={mascot} alt="Trvia Time Avatar" />
                <Link to='/' className="logoLink">
                    <h3>trivia time</h3>
                </Link>
            </div>
            <ul className="NavBar-list">
                <li className="NavBar-item">
                    <Link to='/'>Home
                    </Link>
                </li>
                <li className="NavBar-item">
                <Link to='/pages/Scoreboard'>High Scores
                </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Header