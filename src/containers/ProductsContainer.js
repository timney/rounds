import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Products from '../components/Products';

class ProductsContainer extends Component {

    static propTypes = {
        bar: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            products: PropTypes.array,
        }),
    }

    render() {
        const { bar } = this.props;
        return (
            <div>
                <h3>{bar.name}</h3>
                <Products products={bar.products} />
            </div>
        );
    }
}

export default ProductsContainer;