import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const Bars = props => (
    <ListGroup>
        {props.bars.map(bar => (
            <ListGroupItem key={bar.id}>
                <Button color="link" onClick={() => props.onSelect(bar)}>{bar.name}</Button>
            </ListGroupItem>
        ))}
    </ListGroup>
)

Bars.propTypes = {
    bars: PropTypes.array,
    onSelect: PropTypes.func,
};

export default Bars;