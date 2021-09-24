import React, {useRef, useEffect} from 'react'
import { Container, Top, Middle, Bottom } from './CurrentStyles';
import lottie from 'lottie-web';

import { GrLocation } from 'react-icons/gr';

const CurrentDay = ({ date, location, temperature, weatherDescription, weatherIcon, weekday, isDay }) => {
  
const time = useRef(null);

  useEffect(()=> {
    lottie.loadAnimation({
      container: time.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require(`../../../assets/Animations/${isDay}`)})
  },[])

    return (
        <Container>
           <Top>
             <h1>{weekday}</h1>
             <p>{date}</p>
             <p><span><GrLocation /></span>{location}</p>
           </Top>

          <Middle ref={time}></Middle>

           <Bottom>
             <h2>{temperature}<span>°C</span></h2>
             <p>{weatherDescription}<span><img src={weatherIcon} alt="Location pin icon"/></span></p>
           </Bottom>
        </Container>
    )
}

export default CurrentDay
