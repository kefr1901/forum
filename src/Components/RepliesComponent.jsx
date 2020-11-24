import React from 'react'

export default function RepliesComponent(props) {

    return (

        
        <div className="container ">
            <div class="card m-3  text-center">
            <div class="card-body">
            <h5>Title: {props.repliesItem.title}</h5><br/>
            <h6>Content: {props.repliesItem.content}</h6>
            <h6>Firstname: {props.repliesItem.author.firstName}</h6>
            <h6>Lastname: {props.repliesItem.author.lastName}</h6>
            <h6 key={props.index}>Email: {props.repliesItem.author.email}</h6>
            </div>
            </div>
        </div>
    )
}
