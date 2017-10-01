import { combineReducers } from 'redux';
import * as ActionTypes from './actions';
import { products, bars, bar_products } from './initialState';

const { FILTER_BARS, SELECTED_BAR, ORDER_ITEM } = ActionTypes;


const barReducer = (state = bars, action) => {
	switch(action.type) {
		case FILTER_BARS:
			return {
				...state,
				filter: action.filter
			};
		case SELECTED_BAR:
			return {
				...state,
				selected: action.barId,
			};
		default:
			return state;
	}
};

const productReducer = (state = products, action) => {
	return state;
}

const barProductReducer = (state = bar_products, action) => {
	return state;
};

const orderReducer = (state = [], action) => {
	switch(action.type) {
		case ORDER_ITEM:
			return [...state, action.productId];
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	bar: barReducer,
	product: productReducer,
	barProduct: barProductReducer,
	basket: orderReducer
});

export default rootReducer;