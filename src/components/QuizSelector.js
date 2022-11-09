import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import QuestionCard from './QuestionCard';
import { v4 } from 'uuid';


// changed name
//api is https://opentdb.com/api_config.php

//example api https://opentdb.com/api.php?amount=10&category=25&difficulty=medium&type=multiple
const QuizSelector = () => {
	const [category, setCategory] = useState(0);
	const [difficulty, setDifficulty] = useState('');
	const [questionBank, setQuestionBank] = useState([]);
	const [loading, setIsLoading] = useState(false);
	const [avatar, setAvatar] = useState('');
	const [userName, setUserName] = useState('');
	const id = v4();

	const handleSearchAvatar = (e) => {
		e.preventDefault();
		avatarGen();
	};

	useEffect(() => {
		if (avatar && userName) {
			pushFirebase();
		}
	}, [avatar]);

	const pushFirebase = () => {
		const db = getDatabase();
		set(ref(db, 'users/' + userName), {
			name: userName,
			avatar: avatar,
			score: 0,
		});
	};

	const avatarGen = async () => {
		try {
			const response = await axios
				.get(
					`https://avatars.dicebear.com/api/adventurer-neutral/${id}.svg?scale=35`
				)
				.then((res) => {
					setAvatar(res.config.url);
				});
		} catch (error) {
			alert(error);
		}
	};

	const questions = async () => {
		try {
			if (difficulty && category && userName && avatar) {
				const res = await axios.get(
					`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
				);
				setQuestionBank(res.data.results);
				setIsLoading(true);
			} else {
				alert('Please select an avatar');
			}
		} catch (err) {
			alert(err);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		questions();
	};

	return (
		<>
			{/* form to call handle search to generate image */}
			<form onSubmit={handleSearchAvatar} className='charGen'>
				<label htmlFor='Character Icon Generator'></label>
				<input
					type='text'
					placeholder='Enter your name'
					// sets username
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
			</form>
			{/* ternary to display if avatar isnt true */}
			{!avatar ? (
				<div></div>
			) : (
				<div>
					<p>This is your avatar</p>
					<img className='icon' src={avatar} alt='icon'></img>
					<h2>{userName}</h2>
				</div>
			)}
			<form onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor='quizCategory'></label>
				<select
					onChange={(e) => {
						setCategory(e.target.value);
					}}
				>
					<option value={9}>General knowledge</option>
					<option value={10}>Books</option>
					<option value={11}>Film</option>
					<option value={12}> Music</option>
					<option value={13}>Musicals & Theatre</option>
					<option value={14}>Television</option>
					<option value={15}>Video Games</option>
					<option value={16}>Board Games</option>
					<option value={17}>Science & Nature</option>
					<option value={18}>Computers</option>
					<option value={19}>Math</option>
					<option value={20}>Mythology</option>
					<option value={21}>Sports</option>
					<option value={22}>Geography</option>
					<option value={23}>History</option>
					<option value={24}>Politics</option>
					<option value={25}>Art</option>
					<option value={26}>Celebrities</option>
					<option value={27}>Animals</option>
					<option value={28}>Vehicles</option>
					<option value={29}>Comics</option>
					<option value={30}>Gadgets</option>
					<option value={31}>Anime & Mangas</option>
					<option value={32}>Cartoon & Animation</option>
				</select>
				<select
					onChange={(e) => {
						setDifficulty(e.target.value);
					}}
				>
					<option value={''}>Pick your difficulty</option>
					<option value={'easy'}>Easy</option>
					<option value={'medium'}>Medium</option>
					<option value={'hard'}>Hard</option>
				</select>
				<button className='submit'>Submit</button>
			</form>
			{/* fix loading */}
			{!loading ? (
				<div>Waitign for results</div>
			) : (
				<section className='quiz wrapper'>
					<QuestionCard
						question={questionBank}
						userName={userName}
						avatar={avatar}
					></QuestionCard>
				</section>
			)}
		</>
	);
};

export default QuizSelector;