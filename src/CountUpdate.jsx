import React,{useState} from "react";

function CountUpdate(){
    const [count,setcount]=useState(0);

    function handleIncrement(){
       setcount(c=>c+1);
    }
    function handleDecrement(){
        setcount(c=>c-1);
    }
    function handleReset(){
        setcount(c=>c=0);
    }

    return(
        <>
           <p className="count" >Count: {count}</p>
           <button className=""  onClick={handleIncrement}>Increment</button>
           <button className=""  onClick={handleDecrement}>Decrement</button>
           <button className=""  onClick={handleReset}>Reset</button>
        </>
    );
}
export default CountUpdate;