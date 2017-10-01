export const FILTER_BARS = 'FILTER_BARS';
export const SELECTED_BAR = 'SELECTED_BAR';
export const ORDER_ITEM = 'ORDER_ITEM';

export const filterBars = filter => ({
	type: FILTER_BARS,
	filter
});

export const selectBar = barId => ({
	type: SELECTED_BAR,
	barId
});

export const orderItem = (productId) => ({
	type: ORDER_ITEM,
	productId,
})
