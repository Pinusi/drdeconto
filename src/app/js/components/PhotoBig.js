import React from 'react';

class PhotoBig extends React.Component {
	render() {
		return <div className="image_big">
					<div className="image_image">
						<img src={this.props.photo_src}/>
					</div>
					<div className="image_info">
						<p className="text">{this.props.photo_txt}</p>
						<p className="header">{this.props.photo_header}</p>
					</div>
				</div>;
	}
}

export default PhotoBig;