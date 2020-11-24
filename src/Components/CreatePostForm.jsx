import React from 'react'
import {H2} from '../Theme/StyledComponents'

export default function CreatePostForm(props) {

    return (
        <div className="container mt-5 align-items-center p-2">
            <H2>Create a new post</H2>
        <form  onSubmit={props.handleOnSubmit}>
        <input type="title" 
         className="form-control"
        placeholder="title..." 
        name="title" 
        value={props.title} 
        onChange={props.handleOnChange}
        required
        />
        <input type="content"
         className="form-control"
         placeholder="Enter Content.." 
         name="content" 
         value={props.content}
         onChange={props.handleOnChange}
         required
        />
         <select  className="custom-select" onChange={props.handleOnChange} name="category">
         {props.categoryList && props.categoryList.map((categoryItem ,index)=> {
            return <option  key={index}value={categoryItem.id}>{categoryItem.title}</option>
         })}
         </select>
        <input className="btn btn-success m-1  btn-lg btn-block " type="submit" value="Submit"/>
     </form> 
     </div>
    )
}
