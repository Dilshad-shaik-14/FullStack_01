import React, {useState, useEffect} from 'react'
import { Container, PostForm } from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate,useParams} from 'react-router-dom'

const EditPost = () => {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                if(post){
                    setPost(post)
                }else{
                    navigate('/')
                }
            })
        }
    }, [slug, navigate])
  return post ? (
    <div className='w-full py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost
