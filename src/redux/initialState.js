const getRandomPrice = () => (Math.random() * (6 - 2) + 2).toFixed(2);

export const products = [
	{ id: 1, name: 'Budweiser' },
	{ id: 2, name: 'Tennents' },
	{ id: 3, name: 'Fosters' },
	{ id: 4, name: 'Pale Ale' },
	{ id: 5, name: 'Scrumpy Jack' },	
];

export const bars = { 
	list: [
		{ name: 'The Royal', id: 1 },
		{ name: 'Round Table', id: 2 },
		{ name: 'The Winchester', id: 3 },
		{ name: 'Cheers', id: 4 },
		{ name: 'Doghouse', id: 5 }
	],
	filter: '',
	selected: null,
};

export const bar_products = [];
bars.list.forEach(bar => {
	products.forEach(product => {
		bar_products.push({
			barId: bar.id,
			productId: product.id,
			price: getRandomPrice()
		});
	});
});

export default bar_products;
