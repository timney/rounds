import { combineReducers } from 'redux';
import * as ActionTypes from './actions';
import { products, bars, bar_products } from './initialState';

const { FILTER_BARS, SELECTED_BAR } = ActionTypes;


const barReducer = (state = bars, action) => {
	switch(action.type) {
		case FILTER_BARS:
			return {
				...state,
				filter: action.filter
			};
			break;
		case SELECTED_BAR:
			return {
				...state,
				selected: action.barId,
			};
			break;
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

const rootReducer = combineReducers({
	bar: barReducer,
	product: productReducer,
	barProduct: barProductReducer
});

export default rootReducer;