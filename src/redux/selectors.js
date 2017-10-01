export const getSelectedBar = state => state.bar.list.find(b => b.id === state.bar.selected);

export const getProductsByBar = state => {
    const { barProduct, bar: { selected } } = state;
    return barProduct.filter(b => b.barId === selected)
        .map(pb => ({
            product: state.product.find(p => p.id === pb.productId),
            ...pb,					
        }));
};

export const getOrderedItems = state => {
    const { basket, product, barProduct, bar } = state;
    return basket.map(b => ({
        ...product.find(p => p.id === b),
        price: barProduct.find(p => p.productId === b && p.barId === bar.selected).price,
    }));
}