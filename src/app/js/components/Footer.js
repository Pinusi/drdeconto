import React from 'react';
import Line from './Line';
import Facebook from './icons/Facebook';
import Mail from './icons/Mail';
import $ from 'jquery';
import MenuButton from './MenuButton';
import BigLine from './BigLine';

class Footer extends React.Component {  
	render() {
		let pagePercentage=(this.props.scrollPosition/($(document).height() - $(window).height()))*100
		let menuStyle = {
			top: this.props.scrollPosition-$("header").height()-$("#studio").height()-$("#team").outerHeight()-$("#promotions").outerHeight()-$("#map").outerHeight()+65
		};
		let lineStyle = {
			top: this.props.scrollPosition-$("header").height()-$("#studio").height()-$("#team").outerHeight()-$("#promotions").outerHeight()-$("#map").outerHeight(),
			height: pagePercentage + 'vh'
		};
		return (
			<footer>
				<BigLine position={lineStyle}/>
				<Line position="Right" />
				<MenuButton menuClick={this.props.menuClick} menuOver={this.props.menuOver} menuOpened={this.props.menuOpened} position={menuStyle} menuOvered={this.props.menuOvered}/>	
				<div className="box">Logo</div>
				<div className="box">
					<p className="title">Contatti</p>
					<a href='mailto:dr.deconto@gmail.com'>dr.deconto@gmail.com</a>
					<p>0293903597</p>
				</div>
				<div className="box">
					<p className="title">Social</p>
					<a href="#"><Facebook /></a>
				</div>
			</footer>);
	}
}

export default Footer;