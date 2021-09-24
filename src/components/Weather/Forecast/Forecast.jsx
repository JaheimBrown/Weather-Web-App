import React from 'react'
import { Container, Item } from './StyledForcast';

const Forecast = ({forecast}) => {
    return (
        <Container>
            {forecast.map((i, key) => {
                console.log(i.imgUrl)
                return (
                    <Item>
                        <img heigth='38' width='38' src={i.imgUrl} alt='Icon for weather condition' />
                        <p className='weekday'>{i.weekday}</p>
                        <span>{i.temperature}&deg; C</span>
                    </Item>
                )
            })}
        </Container>
    )
}

export default Forecast
