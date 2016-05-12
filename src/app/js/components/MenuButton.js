import React from 'react';

class MenuButton extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		// var photo = document.getElementById("menu");
		TweenLite.from(this.myButton, 0.5, {top:-30, delay:0.5});
		// var scene = new ScrollMagic.Scene({
		// 							triggerElement: "#trigger1"
		// 						})
		// 						.setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
		// 						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
		// 						.addTo(this.animationController);
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