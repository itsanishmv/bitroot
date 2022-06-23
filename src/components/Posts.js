import React, { useEffect , useState } from 'react'
import Post from './Post'
import '../styles/posts.css'

function Posts() {
    const [postData, setPostData] = useState([])
   
    useEffect(() => {
        
        fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
            .then(res => res.json())
            .then(data => {
                setPostData(data)
               
            })
        
    }, [])

  return (
      <div className='posts__container'>
          {postData.map((post) => 
              <Post  largeImg={post.thumbnail.large}  id={post.id} key={post.id} img={post.thumbnail.small} title={post.title} content={post.content} name={post.author.name} role={post.author.role} avatar={post.author.avatar} />
             )}
     </div>
  )
}

export default Posts