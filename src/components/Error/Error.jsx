import React from 'react'
import {Container} from './StyledErr';

const Error = ({message}) => {
    return (
        <Container>{message}</Container>
    )
}

export default Error;
