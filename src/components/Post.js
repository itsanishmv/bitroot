import React,{useState} from 'react'
import "../styles/post.css"
import Modal from './Modal'


function Post({ img, title, content, name, role, id , avatar , largeImg , isLoading }) {
  const [modal , setModal] = useState(false)
  function handleModal() {
    setModal(true)
  }
  return (
    <div className='post__wrapper'>
        <img className='post__smallimage' src={img} alt="img" />
        <h4 className='post__learnmore' onClick={handleModal}>Learn more</h4>

      <div className='post__details'>
          <div className='post__dots'>
              <span className='dot1'></span>
              <span className='dot2'></span>
          </div>
          <h3 style={{cursor:"pointer"}} onClick={handleModal}>{title}</h3>
          <p className='post__content'>{content}</p>
          <h4 className='post__name'>{name} - {role}</h4>
      </div>
        {modal && <Modal  largeImg={largeImg} title={title} content={content} id={id} name={name} role={role} avatar={avatar} setModal={ setModal} />}
    </div>
  )
}

export default Post