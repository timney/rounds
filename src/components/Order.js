import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';

const Order = props => (
    <div>
        <h3>The round</h3>
        <h4>{props.bar.name}</h4>
        {props.products.map(p => (
            <Card key={Math.random()}>
                <CardBlock className="card-drink">
                    <CardTitle>{p.name}</CardTitle>
                    <CardSubtitle>£{p.price}</CardSubtitle>
                </CardBlock>
            </Card>
        ))}
        <h5>Total: £{props.products.map(p => parseFloat(p.price)).reduce((a, v) => a + v).toFixed(2)}</h5>
    </div>
);

Order.propTypes = {
    bar: PropTypes.object,
    products: PropTypes.array,
}

export default Order;