import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../redux/actions';
import Order from '../components/Order';
import { getSelectedBar, getOrderedItems } from '../redux/selectors';

const mapStateToProps = state => {
    return {
        bar: getSelectedBar(state),
        products: getOrderedItems(state)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Order));