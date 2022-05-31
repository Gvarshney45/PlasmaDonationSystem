import React from 'react'
import RegImg from './images.jpg'
import  Form1  from './Form1';
const Form2 = () => {
  return (
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-5">
                <Form1 />
            </div>
            <div className="col-md-6">
                <img className="img-fluid w-100" src={RegImg} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Form2