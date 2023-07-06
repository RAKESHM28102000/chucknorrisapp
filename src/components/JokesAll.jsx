import React, { useEffect, useState } from 'react'
import axios from 'axios';
import JokeCard from './JokeCard';

function JokesAll( {setSelectedCategory,setOpen}) {
    const[jokes,setJokes]=useState([]);

    //useEffect
    useEffect(() => {
        fetchJoke();
      }, []);
    
    const fetchJoke = async () => {
        try {
          const response = await axios.get('https://api.chucknorris.io/jokes/categories');
          setJokes(response.data);   
        } catch (error) {
          console.error('Error fetching Chuck Norris joke:', error);
        }
      };
    
  return (
    <div>
       <div className='header bounce-title flexcenter'><h1>Chuck Norris</h1></div> 
       <div className='bodyContent flexcenter'>
       { jokes.map((joke,index)=><JokeCard  key={index} joke={joke} setOpen={setOpen} setSelectedCategory={setSelectedCategory}/>)  }

       </div>
    </div>
  )
}

export default JokesAll