import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Register = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const register = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = { name: Name, email: Email, password: Password, confirmpassword: ConfirmPassword }
        axios.post('register', requestData)
            .then((result) => {
                console.log(result.status)
                console.log(Name, Email)
                /*Checking condition whether user successfully logged in*/
                if (result.status === 201) {
                    setLoading(false);
                    toast.success("Registered successfull");
                    navigate('/login')
                }
                /*Checking condition whether the email id already registered*/
                if (result.status === 500) {
                    setLoading(false);
                    toast.warning("Already registered");
                }
                if (result.status === 401) {
                    setLoading(false);
                    toast.warning("Passwords does not match");
                }
                /*Setting the fields empty after registration*/
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
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
                    
                    <form onSubmit={(e) => register(e)}>
                    <h4 className="mt-5 fw-bold text-start">Sign Up</h4>
                        <input type="text" className="p-2 mt-4 mb-2 form-control " placeholder='Fullname' value={Name} onChange={(ev) => setName(ev.target.value)} />
                        <input type="email" className="p-2 mt-4 mb-2 form-control " placeholder='Email' value={Email} onChange={(ev) => setEmail(ev.target.value)} />
                        <input type="password" className="p-2 mt-4 mb-2 form-control " placeholder='Password' value={Password} onChange={(ev) => setPassword(ev.target.value)} />
                        <input type="password" className="p-2 mt-4 mb-2 form-control " placeholder='Confirm Password' value={ConfirmPassword} onChange={(ev) => setConfirmPassword(ev.target.value)} />
                        <button type="sybmit" className="btn btn-dark mt-4 mb-2 d-block">Sign Up</button>
                        
                    Already registered? <Link to="/login" style={{color: "black"}}>Sign In here</Link>
                    </form>
                    </div>
            <Footer />
        </div >
    )
}
export default Register;