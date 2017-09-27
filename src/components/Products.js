import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Products = props => (
    <ListGroup>
        {props.products.map(bar => (
            <ListGroupItem key={bar.id}>
                <h5>{bar.name}</h5>
                <p>{bar.price}</p>]
            </ListGroupItem>
        ))}
    </ListGroup>
);

Products.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string, 
            id: PropTypes.number,
            price: PropTypes.number,
        })
    ),
}

export default Products;