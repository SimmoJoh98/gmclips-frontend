import './createPost-styles.scss';
import axios from 'axios';
import {useContext} from 'react';
import UserContext from '../userContext/userContext.js';


function CreatePost(e){
    let {usr, setUsr} = useContext(UserContext)

    const handlePost = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        let date = new Date()
        let userID = localStorage.getItem('userID')
        date.toISOString()

        formData.append("postDesc", e.target.postText.value)
        formData.append("user", usr)
        formData.append("date", date)
        formData.append("media_payload", e.target.fileForm.files[0])
        formData.append("userID", userID)

        await axios.post(`http://localhost:3012/srvc/post`, formData).then(
            res => console.log(`Post created!`)
        ).catch(err => console.log(err))

        e.target.reset()
        window.location.reload()
    }
    
    return(
        <div className='createpost'>
            <form encType="multipart/form-data" onSubmit={handlePost} action="submit" className="createPostForm">
                <textarea type="text" placeholder="share your achievement!" name="postDesc" className="postText" id="postText"/>
                <input type="file" name="media_payload" id="fileForm"/>
                <button>Post</button>
            </form>
        </div>
    )
}

export default CreatePost