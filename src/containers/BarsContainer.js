import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../redux/actions'
import Bars from '../components/Bars';
import SearchInput from '../components/SearchInput';

const barsFilter = bars => bar => (bars.filter.length > 2 ? bar.name.toLowerCase().indexOf(bars.filter.toLowerCase()) !== -1 : bar);

class BarsContainer extends Component {

    static propTypes = {
        bars: PropTypes.object,
        actions: PropTypes.shape({
            filterBars: PropTypes.func,
        })
    }

    render() {
        const { bars, actions } = this.props;
        return (
            <div>
                <SearchInput
                    placeholder="Search bars..."
                    onSearch={f => actions.filterBars(f)}
                />
                <Bars bars={bars.list.filter(barsFilter(bars))}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      bars: state.bar,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BarsContainer));