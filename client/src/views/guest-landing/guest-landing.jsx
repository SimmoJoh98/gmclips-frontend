import Login from "../../components/login/login-component";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './guest-landing-styles.scss';

function GuestLanding(){
    return(
        <div id="container">
            <h1 className="welcome-h1">Welcome!</h1>
            <p className="instruction">Log in, or sign up <Link className="instr-link" to="/signup">Here!</Link></p>
            <Login className="login" />
        </div>
    )
}

export default GuestLanding;