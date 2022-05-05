import {useContext} from 'react';
import UserContext from '../../components/userContext/userContext';
import Feed from '../../components/feed/feed-component';
import CreatePost from '../../components/createPost/createPost-component';
import UserMenu from '../../components/userMenuCard/userMenu-component';

function UserLanding(){
    const {usr, setUsr} = useContext(UserContext)

    return(
        <div className='landing-container'>
            <UserMenu className="userMenu"/>
            <CreatePost className="createPost"/>
            <Feed className="feed"/>
        </div>
    )
}


export default UserLanding;