import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css'

const MenAll = () => {
    const [GetProducts, setGetProducts] = useState([])
    const getproducts = async () => {
        const id='650fcb8d32807c79b54c0ba9'
        const response = await axios.get(`/products/${id}/category`);
        console.log(response.data)
        setGetProducts(response.data);
        const Id='650fcb8d32807c79b54c0baa'
        const resp = await axios.get(`/products/${Id}/category`);
        console.log(resp.data)
        setGetProducts(resp.data);
        const _id='650fcb8d32807c79b54c0bab'
        const res = await axios.get(`/products/${_id}/category`);
        console.log(res.data)
        setGetProducts(res.data);
    }

    useEffect(() => {
        getproducts();
    }, [])
    return (
        <div className="Container-fluid">
             <Header/>
            <h1 style={{textAlign:"center"}} className="my-3">Men All products</h1>
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
            <Footer/>
        </div>
    );
}
export default MenAll;