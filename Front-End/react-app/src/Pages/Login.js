// import './Login.css'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {

    /*Declared variables to login the user with email and password who has already registered*/
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    /*Declared variables to add loading and navigate feature*/
    const dispatch = useDispatch();
    const navigate = useNavigate();
    /*Function to be called when submit button is clicked*/
    const validate = async (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = { Email: email, Password: password }
        await axios.post('/login', requestData)
            .then((result) => {
                console.log(requestData);
                console.log(result);
                /*Checking conditions whether user successfully logged in*/
                if (result.status === 200) {
                    setLoading(false);
                    toast.success("Login successful")
                    /*Updating the user details in sessionStorage*/
                    sessionStorage.setItem("token", result.data.result.token);
                    sessionStorage.setItem('user', JSON.stringify(result.data.result.user))
                    dispatch({ type: 'LOGIN_SUCCESS', payload: result.data.result.user })

                    navigate('/');
                }
                if (email === null || email === "") {
                    alert("Email can not be empty");
                    return false;
                } else if (password === null || password === " ") {
                    alert("password can not be empty");
                    return false;
                } else if (password.length < 6) {
                    alert("password must be 6 characters");
                    return false;
                } else if (email === "admin@admin.com" && password === "123456") {
                    alert("Login successful");
                } 
                /*Setting the fields empty after login*/
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);

            })
    }

    return (
        <div className="container-fluid">
            <Header />
            { /*Loading feature*/}
            {loading ? <div className="col-md-12 mt-3 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> : ''}
            <div className='d-flex justify-content-center'>
                <form onSubmit={(e) => validate(e)}>
                    <h4 className="mt-5 fw-bold text-start">Sign In</h4>
                    <input type="email" className="p-2 mt-4 mb-2 form-control " placeholder='Email' value={email} onChange={(ev) => setEmail(ev.target.value)} />
                    <input type="password" className="p-2 mb-2 mt-4 form-control " placeholder='Password' value={password} onChange={(ev) => setPassword(ev.target.value)} />
                    <button type="submit" className="btn btn-dark mb-4 mt-4 d-block">Sign In</button>

                    Don't have an account?<Link to="/register" style={{color: "black"}}> Sign Up here</Link>
                </form>
            </div>
            <Footer />
        </div >
    );
}
export default Login;