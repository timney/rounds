import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../redux/actions';
import Products from '../components/Products';
import { getSelectedBar, getProductsByBar } from '../redux/selectors';


class ProductsContainer extends Component {

    static propTypes = {
        match: PropTypes.object,
        bars: PropTypes.object,
        currentBar: PropTypes.object,
        barProducts: PropTypes.array,
        actions: PropTypes.shape({
            selectBar: PropTypes.func,
            orderItem: PropTypes.func,
        }),
        history: PropTypes.object,
    }

    componentWillMount () {
        const { match: { params: { barId }}} = this.props;
        this.props.actions.selectBar(parseInt(barId, 0));
    }

    onOrder(productId) {
        this.props.actions.orderItem(productId);
        this.props.history.push(`/${this.props.match.params.barId}/order`);
    }

    render() {
        const { currentBar, barProducts } = this.props;
        if(!currentBar){
            return null;
        }
        return (<Products 
            bar={currentBar} 
            products={barProducts}
            onOrder={p => this.onOrder(p)} />);
    }
}


const mapStateToProps = state => {
    return {
        bars: state.bar,
        currentBar: getSelectedBar(state),
        barProducts: getProductsByBar(state),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductsContainer));