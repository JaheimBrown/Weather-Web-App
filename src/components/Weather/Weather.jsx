import React from 'react'
import PropTypes from 'prop-types';
import { GridContainer, Data } from './WeatherStyles'

import CurrentDay from './CurrentDay';
import CurrentDetails from './CurrentDetails/index'
import Forecast from './Forecast';

const Weather = ({weather}) => {

    return (
        <GridContainer>            
            <CurrentDay {...weather.currentDay} />
            <Data>
                <CurrentDetails details={weather.currentDayDetails} />
                <Forecast forecast={weather.forecast} />
            </Data>
        </GridContainer>
    )
}

Weather.propTypes = {
    weather: PropTypes.shape({
        currentDay: PropTypes.object,
        forecast: PropTypes.array,
        currentDayDetails : PropTypes.array
    })
};

export default Weather;
