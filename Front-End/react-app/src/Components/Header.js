import Logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    return (
        <div className="container-fluid">
            {/* Nav for showing logo, search box, login and cart icon */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className='container-fluid' style={{backgroundColor: "black"}}>
                <img src={Logo} alt="logo" height="100px" width="200px" />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex m-auto" role="search">
                        <input className="form-control me-2" type="search" style={{ width: "300px" }}
                            placeholder="product name, category name, etc.," aria-label="Search" />
                        <button type="button" className="btn btn-light me-2"
                        >Search</button>
                    </form>
                    
                        <Link to="/login" className="btn btn-light me-2" id="loginbtn">Login</Link>
                        {/* cart icon using fontawesome */}
                    <Link to="/cart">
                        <FontAwesomeIcon className="cart-large" icon={faCartShopping} />
                    </Link>
                </div>
                </div>
            </nav>
            {/* ul for showing the buttons for different pages like home, all products, women dropdown, men dropdown, kids and contact */}
            <ul className="nav justify-content-center sticky-top">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/allproducts">All products</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Women
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/womenall" >All</Link></li>
                        <li><Link className="dropdown-item" to="/womendresses" >Dresses</Link></li>
                        <li><Link className="dropdown-item" to="/womenpants" >Pants</Link></li>
                        <li><Link className="dropdown-item" to="/womenskirts" >Skirts</Link></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="true">
                        Men
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/menall" >All</Link></li>
                        <li><Link className="dropdown-item" to="/menshirts" >Shirts</Link></li>
                        <li><Link className="dropdown-item" to="/menpants" >Pants</Link></li>
                        <li><Link className="dropdown-item" to="/menhoodies" >Hoodies</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/kidsall" >Kids</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contactus" >Contact</Link>
                </li>
            </ul>
        </div>
    );
}
export default Header;