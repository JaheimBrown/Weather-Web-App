import { useState } from "react";

import getCurrentDay  from '../Helpers/CurrentDay/getCurrentDay';
import getForecast from '../Helpers/Forecast/getForecast';
import getDetails  from '../Helpers/WeatherDetails/getDetails';

const useWeather = () => {

    const BASE_URL = 'http://www.metaweather.com/api/location/search/';
    const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [weather, setWeather] = useState('');

    const getWOEID = async (location) => {
            const response = await fetch(`${CROSS_DOMAIN}/${BASE_URL}/?query=${location}`);
            const json = await response.json();
            const data = json[0];

            if (!data || data.lenght === 0) {
                setIsError('No Such Location.');
                setIsLoading(false)
                return;
            }

            return data;
    }

    const getWeatherData = async (woeid) => {
        const response = await fetch(`${CROSS_DOMAIN}/${BASE_URL}/location/${woeid}`);
        const json = await response.json();

        if (!json || !json.consolidated_weather) {
            setIsError('Something Went Wrong');
            setIsLoading(false)
            return;
        }
        
        return json;
    }

    const gathertData = (data) => {
        const currentDay = getCurrentDay(data.consolidated_weather[0], data.title);
        const currentDayDetails = getDetails(data.consolidated_weather[0]);
        const forecast = getForecast(data.consolidated_weather);

        setWeather({ currentDay, forecast, currentDayDetails }) 
        setIsLoading(false);
    }   

    const getLocation = async (location) => {
        setIsLoading(true);
        setIsError(false);

        const response = await getWOEID(location);
        if(!response) return;

        const data = await getWeatherData(response.woeid);
        if(!data) return;

        if (!data || data.lenght === 0) {
            setIsError('Something went wrong.');
            return;
        }

        gathertData(data);

    }

    return {
        isLoading,
        isError,
        weather,
        getLocation
    }
}

export default useWeather;