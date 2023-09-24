import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const KidsAll = () => {
    const [GetProducts, setGetProducts] = useState([])
    const getproducts = async () => {
        const id='650fcb8d32807c79b54c0baf'
        const response = await axios.get(`/products/${id}/category`);
        console.log(response.data)
        setGetProducts(response.data);
    }

    useEffect(() => {
        getproducts();
    }, [])
    return (
        <div className="Container-fluid">
            <Header />
            <h1 className="my-3" style={{ textAlign: "center" }}>Kids All product</h1>
            <div className="card-container" style={{display: "flex", flexWrap: "wrap", justifyContent:"space-between" }}>
                {GetProducts.map((product) => (
                    <div className="card product my-2" key={product.category_id} >
                        <img className="card-img-top img-fluid allproduct" src={product.images[0].image} alt={product.description} />
                        <div className="card-body">
                            <h5>{product.name}</h5>
                            <p>
                                <b>Rs. {product.price}/- </b>
                                <br />
                                {product.description}<br/>
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
export default KidsAll;