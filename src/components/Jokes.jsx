import React, { useEffect, useState } from 'react';
import Types from './Types';
import Content from './Content';
import axios from 'axios';

const Jokes = () => {
	const [joke, setJoke] = useState({});
	const [type, setType] = useState('');

	function handleClick(e) {
		setType(e.target.name);
	}

	useEffect(() => {
		axios
			.get(`https://v2.jokeapi.dev/joke/${type}?type=twopart`)
			.then((res) => {
				console.log(res.data);
				setJoke(res.data);
			})
			.catch((err) => console.log(err));
	}, [type]);

	return (
		<div className="main">
			<Types handleClick={handleClick} />
			<Content joke={joke} />
		</div>
	);
};

export default Jokes;
