import Header from "../Components/Header";
import Footer from "../Components/Footer";
import './AllProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';

const AllProducts = () => {
    const [GetProducts, setGetProducts] = useState([])
    const getproducts = async () => {
        const response = await axios.get('/products');
        setGetProducts(response.data.Products);
    }

    useEffect(() => {
        getproducts();
    }, [])

    return (
        <div className="container-fluid" >
            <Header />
            <h1 className="my-3" style={{ textAlign: "center" }}>All products</h1>
            <div className="card-container" style={{display: "flex", flexWrap: "wrap", justifyContent:"space-between" }}>
                {GetProducts.map((product) => (
                    <div className="card products my-2" key={product.id} >
                        <img className="card-img-top img-fluid allproducts" src={product.images[0].image} alt={product.description} />
                        <div className="card-body">
                            <h5>{product.name}</h5>
                            <p>
                                <b>Rs. {product.price}/- </b>
                                <br />
                                {product.description}
                                <button type="button" className="btn btn-light mt-2">
                                    <FontAwesomeIcon className="cart me-2" icon={faCartShopping} />
                                    Add to cart
                                </button>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            
            <Footer />
        </div>
    );
}
export default AllProducts;