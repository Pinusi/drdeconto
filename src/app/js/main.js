import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';

var Page = React.createClass({
	render: function() {
		return (
			<div className="page">
				<Header />
				<Footer />
				<div className="frame"></div>
			</div>
			);
	}
});

$(function () {
	ReactDOM.render(<Page />, $('#main')[0]);
});