import React from 'react';
import Input from './input';

export default function Shipping() {

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Verification</h3>


      <h4>Are you covid Positive ❓</h4>
      <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1">
    Yes
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
  <label class="form-check-label" for="exampleRadios2">
    No
  </label>
</div>

      {/* <Input type="text" placeholder="Enter your full name" label="Full Name" />
      
      <Input type="email" placeholder="Enter your e-mail" label="Email Address"/>

      <Input type="text" placeholder="Enter your address" label="Address"/>

      <div>
      <Input type="text" placeholder="Enter your city" label="City"/>
      <Input type="text" placeholder="Enter your country" label="Country"/>
      </div> */}
    </div>
  )
}