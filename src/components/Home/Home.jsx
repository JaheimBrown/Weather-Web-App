import React from 'react'
import {Container, Header, Main, MainComp} from './StyledHome'
import Form from '../Form';
import Loading from '../Loading';
import Error from '../Error';
import Weather from '../Weather';

// IMG
import BackgroundIMG from '../../assets/BackgroundIMG.png'; 
import LOGO from '../../assets/LOGO.png';

// Hook
import useWeather from '../../hooks/useWeather';


const Home = () => {

    const {isLoading, isError, weather, getLocation} = useWeather();

    return (
        <Container style={{ backgroundImage: `url(${BackgroundIMG})` }}>
            <Header>
                <img src={LOGO} />
            </Header>
            <Main>
                {!weather && <MainComp>
                    {!isLoading && <Form formSubmit={getLocation} />}
                    {isError && <Error message={isError}/>}
                    {isLoading && <Loading />}
                </MainComp>}
                {weather && <Weather weather={weather} />}
            </Main>
        </Container>
    )
}

export default Home
