import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './redux/store';

import './App.css';

import BarsContainer from './containers/BarsContainer';
import ProductsContainer from './containers/ProductsContainer';

const Header = () => (
	<Navbar>
		<NavbarBrand href="/">Rounds</NavbarBrand> 		
	</Navbar>);

const App = () => (
	<Provider store={store}>
		<Router>
			<div>
				<Header />
				<div className="app">
					<Route path="/" exact component={BarsContainer} />
					<Route path="/:barId" component={ProductsContainer} />
				</div>
			</div>
		</Router>
	</Provider>);

export default App;
