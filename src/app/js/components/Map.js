import React from 'react';
import Line from './Line';
import MenuButton from './MenuButton';
import Pin from './icons/Pin';

class Map extends React.Component {
	render() {
		return <a target="_blank" href="https://www.google.co.uk/maps/place/STUDIO+DENTISTICO+-+De+Conto+Dr.+Giuseppe/@45.5408493,9.0628322,17z/data=!3m1!4b1!4m5!3m4!1s0x4786ead8e5986373:0xad70c7e8dea1b087!8m2!3d45.5408493!4d9.0650262" id="map" className="map">
					<Line position="Right" />
					<Pin/>
					<div className="address">
						<div className="address_cont">
							<p>Via Fabio Filzi 3</p>
							<p>Terrazzano di Rho</p>
							<p>20017, (Milano)</p>
						</div>
					</div>
				</a>;
	}
}

export default Map;