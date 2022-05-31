import React from 'react'
import './Error.css';
import {NavLink} from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
        <div id="not found">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>we are sorry, page not found</h2>
                <p className="mb-5">
                    The page you looking for might have been removed 
                    had its name changed or is temporarily unavailable.
                </p>
                <a href='/'>Back To HomePage</a>
            </div>
        </div>
    </>
  )
}

export default ErrorPage