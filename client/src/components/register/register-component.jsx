import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom';
import './registration-styles.scss';

function Registration(){
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let user = e.target.username.value
        let pass = e.target.password.value

        axios.post('http://localhost:3005/api/register', {username: user, password: pass})
        e.target.reset()
        navigate("/")
    }

    return(
        <div className='container'>  
            <h1 className='signup-header'>Sign Up!</h1>
            <form onSubmit={handleSubmit} className="registration" action="submit">
                <input type="text" placeholder="username" className='text-field'/>
                <input type="password" placeholder="password" className='text-field'/>
                <button className="register-btn">Sign Up!</button>
            </form>
            <div>
                <Link className='home-link' to="/">Go Back</Link>
            </div>
        </div>
    )
}

export default Registration;