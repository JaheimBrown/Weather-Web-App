import React from 'react'
import { DetailsContainer, Flex } from './StyledDetails';

const CurrentDetails = ({details}) => {
  return (

    <DetailsContainer>
       {details.map((i, key) => {
         return (
           <Flex>
             <p className='desName'>{i.name}</p>
             <p>{i.value} {i.unit}</p>
           </Flex>
         )
       })}
    </DetailsContainer>

  )
}

export default CurrentDetails;

{/* <Flex>
                <p>{item.name}</p>
                <p>{item.value} {item.unit}</p>
              </Flex> */}