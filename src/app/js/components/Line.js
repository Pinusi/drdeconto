import React from 'react';

class Line extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return 	<div className={"line" + (this.props.position) + " line"}>
					<div className="lineBG"></div>
				</div>;
	}
}

export default Line;