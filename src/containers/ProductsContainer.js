import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import * as actions from '../redux/actions'    
import Products from '../components/Products';

class ProductsContainer extends Component {

    static propTypes = {
        match: PropTypes.object,
        bars: PropTypes.object,
        currentBar: PropTypes.object,
        barProducts: PropTypes.array,
        actions: PropTypes.shape({
            selectBar: PropTypes.func,
        })
    }

    componentWillMount () {
        const { match: { params: { barId }}} = this.props;
        this.props.actions.selectBar(parseInt(barId, 0));
    }

    render() {
        const { currentBar, barProducts } = this.props;
        if(!currentBar){
            return null;
        }
        return (
            <div>
                <h2>{currentBar.name}</h2>
                {barProducts.map(p => (
                    <Card key={p.productId}>
                        <CardBlock>
                            <CardTitle>{p.product.name}</CardTitle>
                        </CardBlock>
                    </Card>
                ))}
               
            </div>
        );
    }
}

export const getProductsByBarSelector = state => {
    const { barProduct, bar: { selected } } = state;
    return barProduct.filter(b => b.barId === selected)
        .map(pb => ({
            product: state.product.find(p => p.id === pb.productId),
            ...pb,					
        }));
};

export const getBarSelector = state => state.bar.list.find(b => b.id === state.bar.selected);

const mapStateToProps = state => {
    return {
        bars: state.bar,
        currentBar: getBarSelector(state),
        barProducts: getProductsByBarSelector(state),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);