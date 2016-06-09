import React from 'react';
import Line from './Line';
import photo_0 from "../../../assets/imgs/photostripe_1.jpg";
import photo_1 from "../../../assets/imgs/photostripe_2.jpg";
import photo_2 from "../../../assets/imgs/photostripe_3.jpg";
import photo_3 from "../../../assets/imgs/photostripe_4.jpg";

class PhotoStripe extends React.Component {
	render() {
		let photos = [photo_0, photo_1, photo_2, photo_3];
		return <div className="photostripe" id="photostripe">
			<Line position="Right" />
			{photos.map(function(photo, i) {
				let divStyle = {
		  			backgroundImage: 'url(' + photo + ')'
				};
				if(i<2){
					return <div className="photo no_mobile" style={divStyle} key={i}></div>;
				}
				else{
					return <div className="photo" style={divStyle} key={i}></div>;
				}
			})}
		</div>;
	}
}

export default PhotoStripe;