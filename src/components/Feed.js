import React, { useState } from 'react'
import "../styles/Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';


function Feed() {

    const [posts, setPosts] = useState([])
    const sendPost = (e) => {
        e.preventDefault()
        setPosts
    }

  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input type='text'placeholder='Whats up?'/>
                    <button 
                    onClick={sendPost}
                    type='submit'>Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
                <InputOptions Icon={SmartDisplayIcon} title="Video" color="#E7A33E" />
                <InputOptions Icon={EventIcon} title="Event" color="#C0CBCD" />
                <InputOptions Icon={ArticleIcon} title="Write article" color="#7FC15E" />
            </div>
        </div>

        {posts.map(post => (
            <Post />
        ))}

        <Post name="Valeria Vallejo" description="This is a test" message="Message goes here"/>
    </div>
  )
}

export default Feed