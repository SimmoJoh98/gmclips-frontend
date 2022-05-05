import warning from './warning.png';
import {useState} from 'react';
import './post-styles.scss'

function Post(props){

    let [likes, setLikes] = useState(0)

    const likePost = (e) => {
        setLikes(++likes)
    }

    return(
        <>
            <p className="post-description">{props.postDesc}</p>
            <img className="media" onError={(e) => e.target.src = warning} src={`data:image/png;base64,${props.img}`} alt="post media"/>
            <button onClick={likePost} className='like-btn'>like btn: {likes}</button>
        </>
    )
}
//data:image/png;base64,
export default Post;