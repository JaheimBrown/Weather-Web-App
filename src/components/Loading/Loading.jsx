import React, {useEffect, useRef} from 'react'
import lottie from 'lottie-web';
import {Container, Loader} from './LoadingElements'

const Loading = () => {

    const loadAni = useRef(null);

    useEffect(()=> {
        lottie.loadAnimation({
            container: loadAni.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/Animations/9379-loader.json')
    })},[]) 

    return (
        <Container>
            <Loader ref={loadAni}>

            </Loader>          
        </Container>
    )
}

export default Loading;
