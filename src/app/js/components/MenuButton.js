import React from 'react';

class MenuButton extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		TweenLite.from(this.myButton, 0.5, {top:-30, delay:0.5});
	}
	render() {
		return 	<div ref={(ref) => this.myButton = ref}  onClick={this.props.menuClick}  onMouseOut={this.props.menuOver} onMouseOver={this.props.menuOver} style={this.props.position} className={'menu_link' + (this.props.menuOpened ? ' open' : '') + (this.props.menuOvered ? ' hover' : '')}>
					<div className="content">
						<span className="top"></span>
						<span className="middle"></span>
						<span className="bottom"></span>
					</div>
				</div>;
	}
}

export default MenuButton;