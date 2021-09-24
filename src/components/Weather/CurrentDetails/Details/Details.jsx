import React from 'react'
import { Flex } from '../StyledDetails';

const Details = ({ details }) => {
    return (
        <>
          {details.map(item => {
                return (
                    <Flex>
                        <p>{item.name}</p>
                        <p>{item.value} {item.unit}</p>
                    </Flex>
                )
          })}
        </>
    )
}

export default Details
