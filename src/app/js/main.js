import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Studio from './components/Studio';
import Team from './components/Team';
import Menu from './components/Menu';
import Map from './components/Map';
import PhotoStripe from './components/PhotoStripe';
import Line from './components/Line';
import Promotions from './components/Promotions';
import data from '../../assets/data.json';

class Page extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {
			data: {
				"header":{},
				"studio": {},
				"team": {},
				"promotions": {},
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
		if(!this.state.menuOpened){
			$('html').css('overflow', 'hidden');
		}
		else{
			$('html').css('overflow', 'scroll');
		}
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
				<Menu menuClick={this.handleMenuClick} opened={this.state.menuOpened}/>
				<div className='page'>
					<Header data={this.state.data.header} menuOpened={this.state.menuOpened} menuOver={this.handleMenuOver} menuOvered={this.state.menuOver} menuClick={this.handleMenuClick} scrollPosition={this.state.scrollPosition}/>
					<div className="menuicon_container">
						<Studio data={this.state.data.studio}/>
						<PhotoStripe />
						<Team data={this.state.data.team}/>
						<Promotions data={this.state.data.promotions}/>
						<Map />
						<Footer data={this.state.data.footer} menuOpened={this.state.menuOpened} menuOver={this.handleMenuOver} menuOvered={this.state.menuOver} menuClick={this.handleMenuClick} scrollPosition={this.state.scrollPosition}/>
					</div>
				</div>
			</div>
			);
	}
}

export default Page;

$(function () {
	ReactDOM.render(<Page />, $('#main')[0]);
});