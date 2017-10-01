import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Products = props => (<div>
    <h2>{props.bar.name}</h2>
    {props.products.map(p => (
        <Card key={p.productId}>
            <CardBlock className="card-drink">
                <CardTitle>{p.product.name}</CardTitle>
                <CardSubtitle>£{p.price}</CardSubtitle>
                <Button onClick={() => props.onOrder(p.productId)}>
                    Buy
                </Button>
            </CardBlock>
        </Card>
    ))}
</div>);

Products.propTypes = {
    bar: PropTypes.object,
    products: PropTypes.array,
    onOrder: PropTypes.func,
}

export default Products;