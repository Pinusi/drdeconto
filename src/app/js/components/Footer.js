import React from 'react';

class Footer extends React.Component {  
	render() {
		return (
			<footer>
				<p className="title">non esitare a scriverci,</p>
				<p className="subtitle">saremo lieti di risponderti.</p>
				<a href='mailto:dr.deconto@gmail.com' className='button'>contattaci</a>
			</footer>);
	}
}

export default Footer;