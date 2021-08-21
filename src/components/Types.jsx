import React from 'react';

const types = ({ handleClick }) => {
	return (
		<div className="types">
			<button onClick={handleClick} name="Programming">
				Programming
			</button>
			<button onClick={handleClick} name="Dark">
				Dark
			</button>
			<button onClick={handleClick} name="Pun">
				Pun
			</button>
			<button onClick={handleClick} name="Spooky">
				Spooky
			</button>
			<button onClick={handleClick} name="Misc">
				Misc
			</button>
			<button onClick={handleClick} name="Christmas">
				Christmas
			</button>
		</div>
	);
};

export default types;
