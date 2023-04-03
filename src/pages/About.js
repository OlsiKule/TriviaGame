import { Link } from 'react-router-dom';
import mascot from '../assests/meeseeks-removebg-preview.png';

const About = () => {
	return (
		<div className='aboutHome wrapper'>
			<div className='bannerContainer'>
				<div className='aboutModal'>
					<img className="mascot" src={mascot} />
				</div>
				<div className='aboutDescription wrapper'>
					<h1>Trivia Time</h1>
					<h3>
						Welcome to Trivia Time! Learn and Have fun, Create your Avatar, Decide your Topic, and Difficulty and then... the brain-teaser begins! Good Luck!
					</h3>
					<div className='begin'>
						<Link to='/pages/Generator'>Click here to begin</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;