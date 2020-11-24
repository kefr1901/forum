import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import RepliesComponent from '../Components/RepliesComponent'
import Forumkit from '../Data/Forumkit'
import { H2 } from '../Theme/StyledComponents'


export default function PostDetailPage(props) {
  const postId = props.match.params.id
  const [postItem, setPostItem] = useState(null)
  const [replies, setReplies] = useState(null)
  const [formData, setFormData] = useState({
    "title": "",
    "content": "",
    "parent": postId
  });

  function fetchPostDetail() {
    Forumkit.getPostDetail(postId)
      .then(res => res.json())
      .then(data => {
        setPostItem(data)
      })
  }

  function fetchReplies() {
    Forumkit.getPostReplies(postId)
      .then(res => res.json())
      .then(data => {
        setReplies(data.results)
      })
  }

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    Forumkit.createReplies(formData)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })

  }

  useEffect(() => {
    fetchReplies()
    fetchPostDetail()
  }, [])

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <form onSubmit={handleOnSubmit}>
          <div className="container border m-4 text-center">
            {postItem &&
              <>
                <h1>{postItem && postItem.title}</h1>
                <h2>{postItem.content}</h2>
                <p>id:{postItem.id}</p>
                <p>firstname: {postItem.author.firstName} </p>
                <p>lastname: {postItem.author.lastName} </p>
                <p> email: {postItem.author.email}</p>
                <p>Created: {postItem.createdAt}</p>
                <hr></hr>
              </>
            }

          <H2>Comment this post</H2>
          <div className="form-group">
            <input type="title"
              className="form-control"
              placeholder="Title.."
              name="title"
              value={formData['title']}
              onChange={handleOnChange}
              required
            />
            <input type="content"
              className="form-control"
              placeholder="content.."
              name="content"
              value={formData['content']}
              onChange={handleOnChange}
              required
            />
            <input className="btn btn-success m-1 btn-lg btn-block" value="Submit" type="submit" />
          </div>

        </div>
        </form>
        <div>
          {replies && replies.reverse().map((repliesItem, index) => {
            return <RepliesComponent
              postItem={postItem}
              key={index}
              repliesItem={repliesItem}
            />
          })}
        </div>
      </div>
    </>

  )
}