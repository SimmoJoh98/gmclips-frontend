import './feed-styles.scss';
import UserContext from "../userContext/userContext";
import React, {useContext, useEffect, useState, useMemo} from 'react';
import Post from "../post/post";
import axios from "axios";

function Feed(){
    const {usr, setUsr} = useContext(UserContext)

    let tmpUsr = localStorage.getItem('user')
    let userID = localStorage.getItem('userID')
    let [posts, setPosts] = useState([])
    let [images, setImages] = useState([])

    const getFeed = async () => {
        let tmpPost

        const res = await axios.get(`http://localhost:3012/srvc/usrposts?userID=${userID}`)
        tmpPost = res.data
        tmpPost.reverse()
        setPosts(tmpPost)

        // chain requests media based off of post id's
        let imgs = await getMedia(tmpPost)
        // console.log(imgs)
        setImages(imgs)
        // console.log(tmpPost)
        // console.log(imgs)
    }   
    
    const getMedia = async (arr) => {
        let imgIds = []
        for(let i = 0; i < arr.length; i++){
            imgIds.push(arr[i].img_id)
        }
        
        let res = await axios.get(`http://localhost:3012/srvc/images?imgIds=${imgIds}`)

        return res.data
    }
    
    const displayPosts = posts.map((post,idx) => {
        let img = images.filter((image, index) => {
            return image.img_id === post.img_id
        })
        return(
            <Post postDesc={post.post_desc} img={img[0]?.img_data} key={idx}/> 
            // <div>
            //     <h1>Post: {post.img_id}</h1>
            //     <h2>Img: {img[0]?.img_id ? img[0]?.img_id : "nothing"}</h2>
            // </div>
        )
    })

    useEffect(() =>{
        getFeed()
    },[])
    
    return(
        <div className='feed-container'>
            {displayPosts}
        </div>
    )
}

export default Feed;