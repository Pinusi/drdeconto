import React from 'react';
import $ from 'jquery';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		var _where = $(e.target).attr('data-section');
		switch(_where){
			case 'home':
				$("html, body").animate({ scrollTop: 0 }, "slow");
				break;
			case 'team':
				console.log($("#team").offset());
				$("html, body").animate({ scrollTop: $("#team").offset() }, "slow");
				break;
			case 'dove':
				$("html, body").animate({ scrollTop: $("#map").offset() }, "slow");
				break;
			case 'contatti':
				$("html, body").animate({ scrollTop: $(document).height() }, "slow");
				break;
		}
		this.props.menuClick();
	}
	render() {
		return <div id="menu" className={(this.props.opened ? 'menu_panel open' : 'menu_panel')}>
						<a data-section="home" onClick={this.handleClick}>Home</a>
						<a data-section="team" onClick={this.handleClick}>Il Team</a>
						<a data-section="dove" onClick={this.handleClick}>Dove Trovarci</a>
						<a data-section="contatti" onClick={this.handleClick}>Contatti</a>
				</div>;
	}
}

export default Menu;