import React from 'react';
import Input from './input';

export default function Payment() {

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Payment Information</h3>
      <Input type="text" placeholder="Enter your full name" label="Full Name" />
      
      <Input type="email" placeholder="Enter your e-mail" label="Email Address"/>

      <Input type="text" placeholder="Enter your address" label="Address"/>

      <div>
      <Input type="text" placeholder="Enter your city" label="City"/>
      <Input type="text" placeholder="Enter your country" label="Country"/>
      </div>
      
      {/* <Input type="text" placeholder="4444-4444-4444" label="Card Number" />
      <Input type="text" placeholder="John Doe" label="Name on Card" />
      
      <div style={{ display: 'flex'}}>
        <div style={{ flex: 1, paddingRight: 10}}>
        <Input type="text" placeholder="11/2024" label="Expiry Date" style={{marginRight: 10}}/>
        </div>
        <div style={{ flex: 1}}>

        <Input type="text" placeholder="000" label="CVC Code"/>
        </div>
      </div> */}
    </div>
  )
}