import React, {useState} from 'react';
import { H1 } from '../Theme/StyledComponents'
import { Link } from 'react-router-dom'

export default function FormComponent(props) {
    
    return (
        <div className="container">
            <form onSubmit={props.handleOnSubmit}>
            <div className="form-group">
             <H1>
             Register
             </H1>
            <input
             type="email" 
             className="form-control"
             placeholder="killenmedallt@hotmail.com" 
             name="email" 
             value={props.email} 
             onChange={props.handleOnChange}
             required
            />
            </div>
            <div className="form-group">
            <input 
             type="password"
             className="form-control"
             placeholder="Enter Password" 
             name="password" 
             value={props.password}
             onChange={props.handleOnChange}
             required
            />
            </div>
            <div className="form-group">
            <select className="custom-select" onChange={props.handleOnChange} name="country">
                {props.countryList && props.countryList.map((countryItem ,index)=> {
                   return <option key={index}value={countryItem.id}>{countryItem.title}</option>
                })}
            </select>
            </div>
            <div className="form-group">
            <input 
             type="text" 
             className="form-control"
             placeholder="Enter Firstname" 
             name="firstName" 
             value={props.firstName} 
             onChange={props.handleOnChange}
             required
            />
            </div>
            <div className="form-group">
            <input
             type="text"
             className="form-control"
             placeholder="Enter Lastname" 
             name="lastName" 
             value={props.lastName} 
             onChange={props.handleOnChange}
             required
             />
            <input className="btn btn-success m-1  btn-lg btn-block" type="submit"/>
            </div>
            </form> 
            <p>Already have an account?<Link to="/login"> Login</Link></p> 
        </div>
    )
}
