import React from 'react';
import $ from 'jquery';
import Line from './Line';
import MenuButton from './MenuButton';

class Map extends React.Component {
	render() {
		let divStyle = {
			top: this.props.menuPostion-$("header").height()-$("#studio").height()-$("#team").outerHeight()+65
		};
		return <div id="map" className="map">
					<MenuButton menuClick={this.props.menuClick} menuOver={this.props.menuOver} menuOpened={this.props.menuOpened} position={divStyle} menuOvered={this.props.menuOvered}/>
					<Line position="Left" />
					<Line position="Right" />
					<div className="address">
						<p>Via Fabio Filzi 3</p>
						<p>Terrazzano di Rho</p>
						<p>20017, (Milano)</p>
					</div>
				</div>;
	}
}

export default Map;