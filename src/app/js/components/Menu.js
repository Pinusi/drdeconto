import React from 'react';
import ScrollMagic from 'scrollmagic';
import TweenLite from 'gsap';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.animationController = new ScrollMagic.Controller();
	}
	componentDidMount() {
		var photo = document.getElementById("menu");
		TweenLite.from(photo, 1.5, {scaleX:0, scaleY:0});
		// var scene = new ScrollMagic.Scene({
		// 							triggerElement: "#trigger1"
		// 						})
		// 						.setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
		// 						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
		// 						.addTo(this.animationController);
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