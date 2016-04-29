import React from 'react';

class Menu extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div id="menu" className="menu">
					<div className={(this.props.opened ? 'menu_panel open' : 'menu_panel')}>
						<a>Home</a>
						<a>Il Team</a>
						<a>Dove Trovarci</a>
						<a>Contatti</a>
					</div>
				</div>;
	}
}

export default Menu;