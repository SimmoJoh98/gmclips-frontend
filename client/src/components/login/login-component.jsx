import axios from 'axios';
import UserContext from '../userContext/userContext';
import {useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import './login-styles.scss';

function Login(){
    const {usr, setUsr} = useContext(UserContext)
    let navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        let username = e.target.username.value
        let password = e.target.password.value
        e.target.reset()
        await axios.get(`http://localhost:3005/api/login?username=${username}&password=${password}`).then(
            res => {
                setUsr(res.data[0].username)
                localStorage.setItem("user", res.data[0].username)
                localStorage.setItem("userID", res.data[0].user_id)
                navigate("/userfeed")
            }
        )
        
    }
    return(
        <div id="container">  
            <form onSubmit={handleSubmit} className="registration" action="submit">
                <input className="text-field" type="text" placeholder="username" id="username"/>
                <input className="text-field" type="password" placeholder="password" id="password"/>
                <button className="register-btn">Sign In</button>
            </form>
        </div>
    )
}

export default Login;