import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions'

import Bars from '../components/Bars';
import SearchInput from '../components/SearchInput';

class BarsContainer extends Component {

    static propTypes = {
        bars: PropTypes.array,
        barActions: PropTypes.object
    }

    render() {
        return (
            <div>
                <SearchInput
                    placeholder="Search bars..."
                    onSearch={f => this.props.barActions.filterBars(f)}
                />
                <Bars bars={this.props.bars}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      bars: state.bars,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        barActions: bindActionCreators(actions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BarsContainer);