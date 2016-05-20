import React from 'react';
import Line from './Line';
import PhotoBig from './PhotoBig';
import photo_one from "../../../assets/imgs/entrance.jpg";

class Studio extends React.Component {
	render() {
		return <div id="studio" className="studio">
					<Line position="Right" />
					<div className="intro">{this.props.data.intro}</div>
					<PhotoBig photo_src={photo_one} photo_txt={this.props.data.photo_txt} photo_header={this.props.data.photo_header}/>
					<div className="desc">{this.props.data.text}</div>
				</div>;
	}
}

export default Studio;