import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid" style={{backgroundColor: "black"}}>
                    <Link to ="/"className="navbar-brand" href="#" style={{color: "white"}}>Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page" to="/user" style={{color: "white"}}>User</Link>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false" style={{color: "white"}}>
                                    Product
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/addproduct" >Add product</Link></li>
                                    <li><Link className="dropdown-item" to="/product" >All products</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false" style={{color: "white"}}>
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/addcategory" >Add category</Link></li>
                                    <li><Link className="dropdown-item" to="/category" >All category</Link></li>
                                </ul>
                            </li>
                            <Link className="nav-link" to="/orders" style={{color: "white"}}>Orders</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar