import React from 'react';
import Button from './Button';
import trackingButtonComponent from './trackingButtonComponent';
const HoC=()=>{
    const ButtonWithTracking=trackingButtonComponent(Button)
return(
    <div style={{textAlign:"center"}}>
        <h2>This is an Example oh Higher Order Component</h2>
        {/*<Button name="Login"></Button>8*/}
        <ButtonWithTracking name="Login" trackingInfo={{CustomerID:"12345678",Password:"hello@sece"}}/>
    </div>
)
}
export default HoC