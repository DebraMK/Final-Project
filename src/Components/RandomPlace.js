// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const RandomPlace = (foo) => {
    // const [selected, setSelected] = usestate(null);
    const selectPlace = () => {
        const x = foo.places[Math.floor(Math.random()*foo.places.length)];
       console.log(x) 
    } 
    return(
        <div>
          <Button onClick={selectPlace} variant="primary">Pick a Restaurant for Me</Button> 
        </div>
    )
} 


export default RandomPlace
                
   