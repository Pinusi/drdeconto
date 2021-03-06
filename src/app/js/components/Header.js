import React from 'react';
import $ from 'jquery';
import MenuButton from './MenuButton';
import Arrow from './icons/Arrow';
import Line from './Line';
import BigLine from './BigLine';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';
import TimelineMax from 'TimelineMax';
import logo from "../../../assets/imgs/logo.png";

class Header extends React.Component {
	componentDidMount() {
		TweenLite.from(this.logo, 1.5, {opacity:0, delay:0.5});
		//scroll animation
		this.animationController = new ScrollMagic.Controller();
		let height = $("header").height();
		// build tween
		var tween = TweenMax.from(this.header, 1, {backgroundPosition: "50% 90%", ease: Linear.easeNone});

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: this.header, triggerHook: "onLeave", duration: height, offset: 10})
						.setTween(tween)
						.addTo(this.animationController);
		this.attachEvents();
	}
	attachEvents(){
		$(this.contact).on('click', function(){
			$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		});
	}
	render() {
		let pagePercentage=(this.props.scrollPosition/($(document).height() - $(window).height()))*100
		let menuStyle = {
			top: this.props.scrollPosition+65
		};
		let lineStyle = {
			top: this.props.scrollPosition,
			height: pagePercentage + 'vh'
		};
		return <header ref={(ref) => this.header = ref}>
					<BigLine position={lineStyle}/>
					<Line position="Right" />
					<MenuButton menuClick={this.props.menuClick} menuOver={this.props.menuOver} menuOpened={this.props.menuOpened} position={menuStyle} menuOvered={this.props.menuOvered}/>
					<div ref={(ref) => this.logo = ref} className="logo">
						<img src={ logo }/>
						<a ref={(ref) => this.contact = ref} className='button'>contattaci</a>
					</div>
					<div className="scroll">
						<p className="arrow"><Arrow /></p>
						<p>scorri</p>
					</div>
				</header>;
	}
}

export default Header;