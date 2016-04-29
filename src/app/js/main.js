import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Studio from './components/Studio';
import Team from './components/Team';
import Menu from './components/Menu';
import Line from './components/Line';
import data from '../../assets/data.json';

class Page extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {
			data: {
				"header":{},
				"studio": {},
				"team": {},
				"footer": {}
			},
			menuOpened: false,
			scrollPosition: 0,
			menuOver: false
		};
	}
	loadData() {
	    $.ajax({
	      url: '../assets/data.json',
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	        console.log(data);
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	}
	componentDidMount() {
    	this.loadData();
    	window.addEventListener('scroll', this.handleScroll);
  	}
	componentWillUnmount = () => {
	    window.removeEventListener('scroll', this.handleScroll);
	}
  	handleMenuClick = (e) => {
		this.setState({menuOpened: !this.state.menuOpened});
	}
	handleMenuOver = (e) => {
		this.setState({menuOver: !this.state.menuOver});
	}
	handleScroll = (e) => {
		this.setState({scrollPosition: $(window).scrollTop()});
	}
	render() {
		return (
			<div className="app">
				<Menu opened={this.state.menuOpened}/>
				<div className="page">
					<Line position="Left" />
					<Line position="Right" />
					<Line position="Top" />
					<Line position="Bottom" />
					<Header data={this.state.data.header} menuOver={this.handleMenuOver} menuOvered={this.state.menuOver} menuClick={this.handleMenuClick} menuOpened={this.state.menuOpened} menuPostion={this.state.scrollPosition}/>
					<Studio data={this.state.data.studio} menuOver={this.handleMenuOver} menuOvered={this.state.menuOver} menuClick={this.handleMenuClick} menuOpened={this.state.menuOpened} menuPostion={this.state.scrollPosition}/>
					<Team data={this.state.data.team} />
					<Footer data={this.state.data.footer} />
				</div>
			</div>
			);
	}
}

export default Page;

$(function () {
	ReactDOM.render(<Page />, $('#main')[0]);
});