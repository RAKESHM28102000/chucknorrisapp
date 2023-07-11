import React from 'react'
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 1028px) {
   display:none;
  }
`;

function JokeCard({joke,index,setSelectedCategory,setOpen}) {
  
    function handleSelect(){
        setOpen(true);
        setSelectedCategory(joke);
       
    }
  return (
     <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="motiondiv card"
            key={joke + index}
            onClick={handleSelect}
          >
        <h2>{`${joke.charAt(0).toUpperCase()+joke.slice(1,joke.length)}`}</h2> 
        <Container><p>Unlimited jokes on {joke}</p></Container>
    </motion.div>
    
  )
}

export default JokeCard