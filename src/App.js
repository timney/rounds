import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './redux/store';

import './App.css';

import BarsContainer from './containers/BarsContainer';
// import ProductsContainer from './containers/ProductsContainer';

const Header = () => (
	<Navbar color="faded" light>
		<NavbarBrand href="/">Rounds</NavbarBrand> 		
	</Navbar>);

class App extends Component {

	static propTypes = {
	}

	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Header />
						<Route path="/" component={BarsContainer} />
					</div>
				</Router>
			</Provider>);
	}

	// render() {
	// 	console.log(this.props, this.state)
	// 	const { bar } = this.state;
	// 	return (
	// 	<div>
	// 		<Navbar color="faded" light>
	// 		<NavbarBrand href="/">Rounds</NavbarBrand>
	// 		</Navbar>
	// 		<BarsContainer {...this.props} />
	// 		{/* {bar.id ? <ProductsContainer bar={bar} /> : <BarsContainer {...this.props} onSelect={bar => this.onSelectBar(bar)} />} */}
	// 	</div>
	// 	);
	// }
}

// const products = [
// 	{ id: 1, name: 'Budweiser', price: 3.99 },
// 	{ id: 2, name: 'Tennents', price: 2.60 },
// 	{ id: 3, name: 'Fosters', price: 2.88 },
// 	{ id: 4, name: 'Pale Ale', price: 4.30 },
// 	{ id: 5, name: 'Scrumpy Jack', price: 5.12 },	
// ]

// App.defaultProps = {
// 	bars: [
//         { name: 'The Royal', id: 1, products },
//         { name: 'Round Table', id: 2, products },
//         { name: 'The Winchester', id: 3, products },
//         { name: 'Cheers', id: 4, products },
//         { name: 'Doghouse', id: 5, products }
// 	],
// };

export default App;
