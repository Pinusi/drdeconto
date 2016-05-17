import React from 'react';

class Arrow extends React.Component {
	render() {
		return (<svg height="20" viewBox="8 8 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
					<path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"/>
					<path d="M0-.75h48v48h-48z" fill="none"/>
				</svg>);
	}
}

export default Arrow;