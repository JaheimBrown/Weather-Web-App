import React, {useState} from 'react';
import {Container} from './StyledForm';
import PropTypes from 'prop-types';

import searchIcon from '../../assets/icons/searchIcon.svg';


const Form = ({formSubmit}) => {

    const [location, setLocation] = useState('');

    const getLocation = (e) => {
        e.preventDefault();
        if (!location || location === '') return;
        formSubmit(location);
    }

    return (
        <Container>
            <form onSubmit={getLocation}>
                <label for="name" id="name">Enter Location</label>
                <input type="text" name="name" id="name" placeholder="Example: Miami"
                 value={location}
                 onChange={(e) => setLocation(e.target.value)}
                />
                <button type="submit">Get Forecast <span><img src={searchIcon}/></span></button>
            </form>
        </Container> 
    )
}

Form.prototype = {
    formSubmit: PropTypes.func.isRequired,
}

export default Form;