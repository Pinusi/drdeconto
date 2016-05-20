import React from 'react';
import Line from './Line';

class Promotions extends React.Component {
	render() {
		var promotions = this.props.data.list ? this.props.data.list : [];
		return <div className="promotions">
			<Line position="Left" />
				<Line position="Right" />
				<p className="title">{this.props.data.title}</p>
			<div className="promotions_inner">
				{promotions.map(function(promotion, i) {
					return <div className="promotion"  key={i}>
						<div className="animatedIcon"></div>
						<p className="promoTitle">{ promotion.title }</p>
						<p className="date">dal { promotion.date }</p>
						<p className="desc">{ promotion.description }</p>
					</div>
				})}
			</div>
		</div>
	}
}

export default Promotions;