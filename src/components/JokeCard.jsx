import React from 'react'
import { motion } from 'framer-motion';

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
        <p>Unlimited jokes on {joke}</p>
    </motion.div>
    
  )
}

export default JokeCard