import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Bars = props => (
    <ListGroup>
        {props.bars.map(bar => (
            <ListGroupItem key={bar.id}>
                <Link to={`/${bar.id}`}>{bar.name}</Link>
            </ListGroupItem>
        ))}
    </ListGroup>
)

Bars.propTypes = {
    bars: PropTypes.array,
    onSelect: PropTypes.func,
};

export default Bars;