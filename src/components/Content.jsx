import React from 'react';

const content = ({ joke }) => {
	return (
		<div className="content">
			<h3>
				<i class="fas fa-user"></i> {joke.setup}
			</h3>
			<h3>
				<i class="fas fa-user"></i> {joke.delivery}
			</h3>
		</div>
	);
};

export default content;
