import React from 'react'
import { H1 } from '../Theme/StyledComponents'
import { Link } from 'react-router-dom'
 
export default function LoginForm(props) {

    return (
        <div className="container">
          <form onSubmit={props.handleOnSubmit}>
            <div className="form-group">
             <H1>
              Login
             </H1>
            <input type="email" 
             className="form-control"
            placeholder="killenmedallt@hotmail.com" 
            name="email" 
            value={props.email} 
            onChange={props.handleOnChange}
            required
            />
            </div>
            <div className="form-group">
            <input type="password"
             className="form-control"
             placeholder="Enter Password" 
             name="password" 
             value={props.password}
             onChange={props.handleOnChange}
             required
            />
            <input className="btn btn-success m-1  btn-lg btn-block" type="submit"/>
            </div>
            </form>
           <p>Dont have an account? <Link to="/register"> Register</Link></p>
             
        </div>
    )
}
