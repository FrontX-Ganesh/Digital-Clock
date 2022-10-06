import React, { useState , useEffect } from "react";

const Apps = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(
        () => {
            alert('I am clicked.');
        }
    , [nums]);

    const increment = () => {
        setNum(num + 1);
    } 

    const increments = () => {
        setNums(nums + 1);
    } 
    
    return(
        <>  
            <p> {num} </p>
            <button onClick={increment}>Click </button><br />
            <p> {nums} </p>
            <button onClick={increments}>Click </button>
        </>
    );  
}

export default Apps;