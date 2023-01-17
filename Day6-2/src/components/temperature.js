import React, { useState } from 'react';
import "./temp.css"

const TemperatureControl = () => {
const [temperature , setTemperature] = useState(10)
const [backcolor , setBackcolor] = useState("blue")

const handleIncrement = ()=>{

    setTemperature(temperature + 1)
    if(temperature > 4 && temperature <= 15){
        setBackcolor("blue")
    }else if(temperature > 15 && temperature < 28){
        setBackcolor("orange")
    }else if(temperature > 28 && temperature < 50){
        setBackcolor("orangered")
    }else if(temperature > 50){
        setBackcolor("red")
    }

}

const handleDecrement = ()=>{

    setTemperature(temperature - 1)
    if(temperature <= 4){
        setBackcolor("skyblue")
    }
    else if(temperature > 4 && temperature <= 15){
        setBackcolor("blue")
    }else if(temperature > 15 && temperature < 28){
        setBackcolor("orange")
    }else if(temperature > 28 && temperature < 50){
        setBackcolor("orangered")
    }else if(temperature > 50){
        setBackcolor("red")
    }

}

    return (
<>
<div className='wrapper'>

    <div className='display' style={{ backgroundColor:backcolor }}><h1>{temperature}°C</h1></div>
    <div className='btns'>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    </div>
</div>
</>
    );
}

export default TemperatureControl;
