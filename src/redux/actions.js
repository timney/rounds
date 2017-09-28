export const GET_BARS = 'GET_BARS';
export const FILTER_BARS = 'FILTER_BARS';


export const getBars = () => ({
	type: GET_BARS
});

export const filterBars = filter => ({
	type: FILTER_BARS,
	filter
});