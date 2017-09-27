import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Bars from '../components/Bars';
import SearchInput from '../components/SearchInput';

class BarsContainer extends Component {

    static propTypes = {
        bars: PropTypes.array,
        onSelect: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        };
    }

    onSearch(filter) {
        this.setState({ filter });
    }

    filterBars(bar) {
        const { filter } = this.state;
        return filter.length > 2 ? bar.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 : bar;
    }

    render() {
        return (
            <div>
                <SearchInput
                    placeholder="Search bars..."
                    onSearch={f => this.onSearch(f)}
                />
                <Bars 
                    bars={this.props.bars.filter(b => this.filterBars(b))}
                    onSelect={this.props.onSelect} />
            </div>
        );
    }
}

export default BarsContainer;