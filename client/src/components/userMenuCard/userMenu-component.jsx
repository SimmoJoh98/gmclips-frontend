import UserContext from "../userContext/userContext";
import {useContext, useEffect} from 'react';
import './userMenu-styles.scss';

function UserMenu(){
    const {usr, setUsr} = useContext(UserContext)
    useEffect(() => {
        let tmp = localStorage.getItem('user')
        setUsr(tmp)
    })
    
    return(
        <>
            <h1>{usr}</h1>
        </>
    )
}

export default UserMenu;