import React from 'react';

class BigLine extends React.Component {
	render() {
		return 	<div className="bigline" style={this.props.position}>
			<div className="lineBG"></div>
		</div>;
	}
}

export default BigLine;