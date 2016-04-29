import React from 'react';
import MenuButton from './MenuButton';

class Header extends React.Component {  
	render() {
		let divStyle = {
			top: this.props.menuPostion+65
		};
		return <header>
					<MenuButton menuClick={this.props.menuClick} menuOver={this.props.menuOver} menuOpened={this.props.menuOpened} position={divStyle} menuOvered={this.props.menuOvered}/>
				</header>;
	}
}

export default Header;