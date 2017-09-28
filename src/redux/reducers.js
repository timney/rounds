import { combineReducers } from 'redux';
import * as ActionTypes from './actions';

const { FILTER_BARS } = ActionTypes;

const products = [
	{ id: 1, name: 'Budweiser', price: 3.99 },
	{ id: 2, name: 'Tennents', price: 2.60 },
	{ id: 3, name: 'Fosters', price: 2.88 },
	{ id: 4, name: 'Pale Ale', price: 4.30 },
	{ id: 5, name: 'Scrumpy Jack', price: 5.12 },	
]

const initialState = [
	{ name: 'The Royal', id: 1, products },
	{ name: 'Round Table', id: 2, products },
	{ name: 'The Winchester', id: 3, products },
	{ name: 'Cheers', id: 4, products },
	{ name: 'Doghouse', id: 5, products }
];

const barsReducer = (state = initialState, action) => {
	switch(action.type) {
		case FILTER_BARS:
			return initialState.filter(bar => action.filter.length > 2 ? bar.name.toLowerCase().indexOf(action.filter.toLowerCase()) !== -1 : bar);
			break;
		default:
			return initialState;
	}
};

const rootReducer = combineReducers({
	bars: barsReducer
});

export default rootReducer;