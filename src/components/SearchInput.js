import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

const SearchInput = props => (
    <Input 
        placeholder={props.placeholder} 
        onChange={e => props.onSearch(e.target.value)} 
    />
);

SearchInput.propTypes = {
    onSearch: PropTypes.func,
    placeholder: PropTypes.string,
}

export default SearchInput;