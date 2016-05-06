import React from 'react';
import $ from 'jquery';
import Line from './Line';
import MenuButton from './MenuButton';
import PhotoBig from './PhotoBig';
import photo_one from "../../../assets/imgs/entrance.jpg";

class Studio extends React.Component {
	render() {
		let divStyle = {
			top: this.props.menuPostion-$("header").height()+65
		};
		return <div id="studio" className="studio">
					<MenuButton menuClick={this.props.menuClick} menuOver={this.props.menuOver} menuOpened={this.props.menuOpened} position={divStyle} menuOvered={this.props.menuOvered}/>
					<Line position="Left" />
					<Line position="Right" />
					<div className="intro">{this.props.data.intro}</div>
					<PhotoBig photo_src={photo_one} photo_txt={this.props.data.photo_txt} photo_header={this.props.data.photo_header}/>
					<div className="desc">{this.props.data.text}</div>
				</div>;
	}
}

export default Studio;