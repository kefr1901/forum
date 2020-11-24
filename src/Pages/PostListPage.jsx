import React, {useState, useEffect} from 'react'
import Forumkit from '../Data/Forumkit'
import { Link } from "react-router-dom"
import { H3 } from '../Theme/StyledComponents'
import { H1 } from '../Theme/StyledComponents'

export default function PostListPage() {

    const [postList, setPostList] = useState(null)

    function getPostList(){
        Forumkit.getPostList()
        .then((res) => res.json())
         .then((data) => {
             setPostList(data.results)
    })
}

    useEffect(() => {
        getPostList()
    }, [])

    return (
        <div className="container text-center">
            <H1>Posts</H1>
            <hr></hr>
            {postList && postList.map((postItem, index)=>{
              return (
                  <>
                  <H3>{postItem.title}</H3>
                  <p> {postItem.content}</p>
                  <Link className="btn btn-primary btn-sm active" key={index} to={`/post/${postItem.id}`}>Click to read more</Link>
                  <hr></hr>
                  </>
              )
            })}
        </div>
    )
}
