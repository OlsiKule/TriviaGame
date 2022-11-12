import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import './fonts/MikadoBold.ttf';
import About from './pages/About';
import QuizSelector from './components/QuizSelector';
import Scoreboard from './pages/Scoreboard';
import { useState, useEffect } from 'react';
// this is used to access and store data from/to firebase
import { getDatabase, ref, onValue } from 'firebase/database';
import firebaseConfig from './firebase';
// import Quiz from './components/QuizSelector';
import Generator from './pages/Generator';
import FireData from './components/FireData';


function App() {
	// const [players, setplayers] = useState([]);
	// useEffect(() => {
	// 	//     // variable that holds data details
	// 	const database = getDatabase(firebaseConfig);
	// 	//     // references the database
	// 	const databaseref = ref(database);
	// 	//     // adding event listener to the variable from firebase
	// 	onValue(databaseref, (response) => {
	// 		console.log(response.val());
	// 	});
	// }, []);
	return (
		<div className='wrapper'>
			<header>
                <Link to="/">
                    <h1>Trivia Time</h1>
                </Link>
            </header>
			<Generator />
			{/* <Scoreboard /> */}
            <Routes>
                {/* <Route path="/" element={<About />} /> */}
                {/* <Route path='./pages/Generator.js' element={<Generator />} />
                <Route path='./pages/Quiz.js' element={<QuizSelector />} /> */}
                <Route path='./pages/Scoreboard.js' element={<Scoreboard />} />
			 </Routes>
		</div>
	);
}

export default App;
