import React, {useState, useEffect} from 'react'
import CreatePostForm from '../Components/CreatePostForm';
import Forumkit from '../Data/Forumkit'
import { useHistory } from 'react-router-dom';

export default function PostCreatePage() {
    const [formData, setFormData] = useState({});
    const [categoryList, setCategoryList] = useState(null)
 
    const history = useHistory();

    function handleOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        Forumkit.createPost(formData)
            .then((res) => res.json())
            .then((data) => {
                setFormData(data)
                history.push('/posts')
            })
    }

    function getCategoryList() {
        Forumkit.getCategoryList()
            .then((res) => res.json())
            .then((data) => {
                setCategoryList(data.results)
            })
    }

    useEffect(()=>{
        getCategoryList()
    },[])
    
    return (
        <div>
            <CreatePostForm 
               categoryList={categoryList}
               handleOnChange={handleOnChange}
               title={formData['title']}
               content={formData['content']}
               category={formData['category']}
               handleOnSubmit={handleOnSubmit} 
            />
        </div>
    )
}
