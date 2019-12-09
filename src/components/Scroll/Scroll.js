import React from 'react';

const Scroll = (props) => {
	return (
		<div style = {{overflowY: 'auto', height : '100%'}}>
			{props.children}
		</div>
		)
};

export default Scroll;