import React from 'react';
import $ from 'jquery';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';
import TimelineMax from 'TimelineMax';
import logo from "../../../assets/imgs/logo.png";

class PhotoBig extends React.Component {
	componentDidMount() {
		this.animationController = new ScrollMagic.Controller();
		let height = $(this.img).height() + 150;

		// build tween
		var tween = TweenMax.from(this.img, 1, {backgroundPosition: "50% 50%", ease: Linear.easeNone});

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: this.img, duration: height, offset: -50})
						.setTween(tween)
						.addTo(this.animationController);
	}
	render() {
		let divStyle = {
  			backgroundImage: 'url(' + this.props.photo_src + ')'
		};
		return <div className="image_big">
					<div className="image_image" ref={(ref) => this.img = ref} style={divStyle}></div>
					<div className="image_info">
						<p className="text">{this.props.photo_txt}</p>
						<p className="header">{this.props.photo_header}</p>
					</div>
				</div>;
	}
}

export default PhotoBig;