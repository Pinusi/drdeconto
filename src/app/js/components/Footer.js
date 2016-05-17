import React from 'react';
import Facebook from './icons/Facebook';
import Mail from './icons/Mail';

class Footer extends React.Component {  
	render() {
		return (
			<footer>
				<p className="title">Contatti:</p>
				<div>
					<p className="subtitle">Scrivici una mail o chiamaci, saremo lieti di risponderti!</p>
					<a  className="important" href='mailto:dr.deconto@gmail.com'>dr.deconto@gmail.com</a>
					<p className="important">0293903597</p>
					<p className="divider"></p>
				</div>
				<div>
					<p>
						<a href="#"><Facebook /></a>
						<a href='mailto:dr.deconto@gmail.com'><Mail /></a>
					</p>
					<p className="divider"></p>
				</div>
				<div>© 1988 – 2016</div>
			</footer>);
	}
}

export default Footer;