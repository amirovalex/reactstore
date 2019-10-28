import React from 'react';

const Scroll = (props) => {
	return (
		<div style = {{overflowY: 'auto', height : '734px'}}>
			{props.children}
		</div>
		)
};

export default Scroll;