import React from 'react';

class MenuButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return 	<div onClick={this.props.menuClick}  onMouseOut={this.props.menuOver} onMouseOver={this.props.menuOver} style={this.props.position} className={'menu_link' + (this.props.menuOpened ? ' open' : '') + (this.props.menuOvered ? ' hover' : '')}>
					<div className="content">
						<span className="top"></span>
						<span className="middle"></span>
						<span className="bottom"></span>
					</div>
				</div>;
	}
}

export default MenuButton;