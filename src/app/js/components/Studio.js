import React from 'react';
import Line from './Line';
import PhotoBig from './PhotoBig';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';
import TimelineMax from 'TimelineMax';
import photo_one from "../../../assets/imgs/entrance.jpg";

class Studio extends React.Component {
	componentDidMount() {
		this.animationController = new ScrollMagic.Controller();
		var tween = TweenMax.from(this.utensils, 3, {rotation:-360, opacity:0, transformOrigin:"50% 50%", ease: Power1.easeOut, onComplete:this.rotate.bind(this)});
		var scene = new ScrollMagic.Scene({triggerElement: this.utensils, triggerHook: "onEnter", duration: 0, offset: 20})
						.setTween(tween)
						.addTo(this.animationController);
	}
	rotate() {
		TweenMax.from(this.utensils, 10, {rotation:-360, transformOrigin:"50% 50%", repeat:-1, ease: Linear.easeNone});
	}
	render() {
		return <div id="studio" className="studio section">
					<Line position="Right" />
					<div className="intro">
						<div className="utensils" ref={(ref) => this.utensils = ref}></div>
						{this.props.data.intro}
					</div>
					<PhotoBig photo_src={photo_one} photo_txt={this.props.data.photo_txt} photo_header={this.props.data.photo_header}/>
					<div className="desc">{this.props.data.text}</div>
				</div>;
	}
}

export default Studio;