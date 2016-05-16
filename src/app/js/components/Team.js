import React from 'react';
import $ from 'jquery';
import PhotoBig from './PhotoBig';
import PhotoSmall from './PhotoSmall';
import MenuButton from './MenuButton';
import photo_0 from "../../../assets/imgs/doctor.jpg";
import photo_1 from "../../../assets/imgs/dada.jpg";
import photo_2 from "../../../assets/imgs/monica.jpg";
import photo_3 from "../../../assets/imgs/maggie.jpg";

class Team extends React.Component {
	render() {
		var teamMembers = this.props.data.members ? this.props.data.members : [];
		let divStyle = {
			top: this.props.menuPostion-$("header").height()-$("#studio").height()+65
		};
		let photos = [photo_0, photo_1, photo_2, photo_3];
		return <div id="team" className="team">
			<div className="pattern"></div>
			<MenuButton menuClick={this.props.menuClick} menuOver={this.props.menuOver} menuOpened={this.props.menuOpened} position={divStyle} menuOvered={this.props.menuOvered}/>
			<div className="section_title"><span>{this.props.data.title}</span></div>
			<div className="section_subtitle">{this.props.data.subtitle}</div>
			<div className="section_photos">
				{teamMembers.map(function(member, i) {
					if(i == 0){
						return <div className="clear"><PhotoBig  key={i} photo_src={photos[i]} photo_txt={member.position} photo_header={member.name}/></div>
					}
					else{
						return <PhotoSmall key={i} photo_src={photos[i]} photo_txt={member.position} photo_header={member.name}/>
					}
		        })}
		    </div>
		</div>;
	}
}

export default Team;