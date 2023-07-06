import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { VscChromeClose } from "react-icons/vsc";

const Jokebox = ({setOpen,category}) => {
    const [joke, setJoke] = useState('');

       useEffect(() => {
         fetchJoke();
         }, [category]);
  
  const fetchJoke = async () => {
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  }
  
    
      const handleClick = () => {
        fetchJoke();
      };
    
      return (
        <div className='card jokebox'>
          <div className='cancel flexcenter' onClick={()=>setOpen(false)}><VscChromeClose className='icon'/></div>
           <h2>{`${category.charAt(0).toUpperCase()+category.slice(1,category.length)}`} </h2>
           <div className='flexcenter'><p>{`"${joke}"`}</p> </div>      
           <button 
              style={{backgroundColor:"darkblue",color:"black",fontSize:"25px",padding:"10px",borderRadius:"2%"}}
              onClick={handleClick}>
             Next joke
           </button>
        </div>
      );
    };

export default Jokebox