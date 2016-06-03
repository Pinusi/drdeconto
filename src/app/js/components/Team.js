import React from 'react';
import Line from './Line';
import PhotoBig from './PhotoBig';
import PhotoSmall from './PhotoSmall';
import photo_0 from "../../../assets/imgs/doctor.jpg";
import photo_1 from "../../../assets/imgs/dada.jpg";
import photo_2 from "../../../assets/imgs/monica.jpg";
import photo_3 from "../../../assets/imgs/maggie.jpg";

class Team extends React.Component {
	render() {
		var teamMembers = this.props.data.members ? this.props.data.members : [];
		let photos = [photo_0, photo_1, photo_2, photo_3];
		return <div id="team" className="team section">
			<div className="pattern"></div>
			<Line position="Right" />
			<div className="section_title"><span>{this.props.data.title}</span></div>
			<div className="clearFix"></div>
			<div className="section_subtitle">{this.props.data.subtitle}</div>
			<div className="section_photos">
				{teamMembers.map(function(member, i) {
					if(i == 0){
						return <div className="clear"><PhotoBig photo_src={photos[i]} photo_txt={member.position} photo_header={member.name}/><PhotoSmall displaySmall="True" key={i} sequence={i-1} photo_src={photos[i]} photo_txt={member.position} photo_header={member.name}/></div>
					}
					else{
						return <PhotoSmall key={i} sequence={i-1} photo_src={photos[i]} photo_txt={member.position} photo_header={member.name}/>
					}
		        })}
		        <div className="clearFix"></div>
		    </div>
		</div>;
	}
}

export default Team;