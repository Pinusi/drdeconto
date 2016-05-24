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
		let height = $(this.img).height() + 700;

		// parallax
		var tween = TweenMax.from(this.img, 1, {backgroundPosition: "50% 50%", ease: Linear.easeNone});
		var scene = new ScrollMagic.Scene({triggerElement: this.img, triggerHook: "onEnter", duration: height, offset: -50})
						.setTween(tween)
						.addTo(this.animationController);

		// animationfrom below
		var tween = TweenMax.from(this.imgcontainer, 0.5, {top:"50px", opacity: 0, ease: Power1.easeIn});
		var scene = new ScrollMagic.Scene({triggerElement: this.imgbig, triggerHook: "onEnter", duration: 0, offset: 20})
						.setTween(tween)
						.addTo(this.animationController);
	}
	render() {
		let divStyle = {
  			backgroundImage: 'url(' + this.props.photo_src + ')'
		};
		return <div className="image_big" ref={(ref) => this.imgbig = ref}>
					<div className="image_big_container" ref={(ref) => this.imgcontainer = ref}>
						<div className="image_image" ref={(ref) => this.img = ref} style={divStyle}></div>
						<div className="image_info">
							<p className="text">{this.props.photo_txt}</p>
							<p className="header">{this.props.photo_header}</p>
						</div>
					</div>
				</div>;
	}
}

export default PhotoBig;