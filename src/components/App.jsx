import React from 'react';
import Footer from './Footer';
import Jokes from './Jokes';

function App() {
	return (
		<div className="container">
			<h1 className="heading">Jokes API</h1>
			<Jokes />
			<Footer />
		</div>
	);
}

export default App;
