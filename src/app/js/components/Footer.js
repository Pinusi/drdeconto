import React from 'react';
import Line from './Line';
import Facebook from './icons/Facebook';
import Mail from './icons/Mail';
import $ from 'jquery';
import MenuButton from './MenuButton';

class Footer extends React.Component {  
	render() {
		let divStyle = {
			top: this.props.menuPostion-$("header").height()-$("#studio").height()-$("#team").outerHeight()-$("#promotions").outerHeight()-$("#map").outerHeight()+65
		};
		return (
			<footer>
				<Line position="Right" />
				<MenuButton menuClick={this.props.menuClick} menuOver={this.props.menuOver} menuOpened={this.props.menuOpened} position={divStyle} menuOvered={this.props.menuOvered}/>	
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