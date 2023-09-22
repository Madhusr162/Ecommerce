import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import saree from '../Images/saree.webp'
import lehenga from '../Images/lehenga.webp'
import longfrock from '../Images/longfrock.jpg'
import jeans from '../Images/jeans.webp'
import longMidi from '../Images/long midi.jpg'
import coat from '../Images/coa.webp'
import checkedSuit from '../Images/checked suit.webp'
import jeanShirt from '../Images/jean shirt.jpg'
import jean from '../Images/jean.jpg'
import safari from '../Images/safari.webp'
import aLineFrock from '../Images/a line frock.webp'
import jumpSuit from '../Images/jumpsuit.jpg'
import longGown from '../Images/longgown.jpg'
import safariKids from '../Images/safarikids.jpg'
import pinkFrock from '../Images/pink frock.jpg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getProducts } from '../Actions/productsAction';
const Slider = () => {

    const dispatch=useDispatch();
    const [GetProducts,setGetProducts]=useState([])
    const getproducts = async () => {
        const response = await axios.get('/products');
        setGetProducts(response.data.Products);
    }

    useEffect(() => {
        getproducts();
        dispatch(getProducts)
    }, [])
    return (
        <div className="container-fluid mt-5">
            {GetProducts.map((product)=>{
                return(
                    <div className="card">
                    <img className="card-img-top" src={product.images[0].image} alt="saree"
                        height="300px" width="200px" />
                    <div className="card-body">
                        <h5>{product.name}</h5>
                        <p> <b>Rs. {product.price}/- </b><br />{product.description}
                            <button type="button" className="btn btn-light mt-2"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to
                                cart</button>
                        </p>
                    </div>
                </div>   
                )

            })
        }
            
            <h1 style={{ textAlign: "center" }}>Featured products</h1>
            {/* carousel for showing the featured products of men, women and kids */}
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner mt-5">
                    <div className="carousel-item active">
                        <div className="row">
                            {/* Each row has 5 cols and 5 cards */}
                            <div className="col mb-4">
                                {/* products are displayed in the form of cards */}
                                <div className="card">
                                    <img className="card-img-top" src={saree} alt="saree"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>Saree</h5>
                                        <p> <b>Rs.1500/- </b><br />Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit, sed
                                            do eiusmod
                                            tempor.
                                            <button type="button" className="btn btn-light mt-2"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to
                                                cart</button>
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="col mb-4">
                                <div className="card" >
                                    <img className="card-img-top" src={lehenga} alt="Lehenga"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>Lehenga</h5>
                                        <p><b>Rs.1200/-</b><br />Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit,
                                            sed do eiusmod
                                            tempor.
                                            <button type="button" className="btn btn-light mt-2">
                                                <FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col mb-4">
                                <div className="card" >
                                    <img className="card-img-top" src={longfrock} alt="long frock"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>Long Frock</h5>
                                        <p><b>Rs.1600/- </b><br />Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit, sed
                                            do eiusmod
                                            tempor.
                                            <button type="button" className="btn btn-light mt-2"
                                            ><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to
                                                cart</button>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col mb-4">
                                <div className="card" >
                                    <img className="card-img-top" src={jeans} alt="jeans"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>Jeans</h5>
                                        <p><b>Rs.800/- </b><br />Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit, sed
                                            do eiusmod
                                            tempor.
                                            <button type="button" className="btn btn-light mt-2"
                                            ><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to
                                                cart</button>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col mb-4">
                                <div className="card" >
                                    <img className="card-img-top" src={longMidi} alt="long midi"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>Long midi</h5>
                                        <p><b>Rs.1800/- </b><br />Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit, sed
                                            do eiusmod
                                            tempor.
                                            <button type="button" className="btn btn-light mt-2"
                                            ><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to
                                                cart</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="row ">
                            <div className="col mb-4">
                                <div className="card" >
                                    <img className="card-img-top" src={coat} alt="coat"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>Coat</h5>
                                        <p><b>Rs.5500/- </b><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                            <button type="button" className="btn btn-light mt-2"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card" >
                                    <img className="card-img-top" src={checkedSuit} alt="checked suit"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>Checked suit</h5>
                                        <p><b>Rs.7200/-</b><br />Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit,
                                            sed do eiusmod
                                            tempor.
                                            <button type="button" className="btn btn-light mt-2"
                                            ><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to
                                                cart</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card" >
                                    <img className="card-img-top" src={jeanShirt} alt="jean shirt"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>Jean shirt</h5>
                                        <p><b>Rs.1600/- </b><br />Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit,
                                            sed do eiusmod
                                            tempor.
                                            <button type="button" className="btn btn-light mt-2"
                                            ><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to
                                                cart</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card">
                                    <img className="card-img-top" src={jean} alt="jeans"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>Jeans</h5>
                                        <p><b>Rs.700/- </b><br />Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit,
                                            sed do eiusmod
                                            tempor.
                                            <button type="button" className="btn btn-light mt-2"
                                            ><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to
                                                cart</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card">
                                    <img className="card-img-top" src={safari} alt="safari"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>Safari</h5>
                                        <p><b>Rs.3800/- </b><br />Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit,
                                            sed do eiusmod
                                            tempor.
                                            <button type="button" className="btn btn-light mt-2"
                                            ><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to
                                                cart</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="row ">
                            <div className="col mb-4">
                                <div className="card">
                                    <img className="card-img-top" src={aLineFrock} alt="frock"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>A line Frock</h5>
                                        <p><b>Rs.800/- </b><br />Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit, sed
                                            do eiusmod
                                            tempor.
                                            <button type="button" className="btn btn-light mt-2"
                                            ><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to
                                                cart</button>
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card">
                                    <img className="card-img-top" src={jumpSuit} alt="jump suit"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>Jumpsuit</h5>
                                        <p><b>Rs.700/-</b><br />Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed
                                            do eiusmod
                                            tempor.
                                            <button type="button" className="btn btn-light mt-2"
                                            ><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to
                                                cart</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card" >
                                    <img className="card-img-top" src={longGown} alt="long gown"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>Long gown</h5>
                                        <p><b>Rs.4200/- </b><br />Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit, sed
                                            do eiusmod
                                            tempor.
                                            <button type="button" className="btn btn-light mt-2"
                                            ><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to
                                                cart</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card">
                                    <img className="card-img-top" src={safariKids} alt="safari"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>Safari</h5>
                                        <p><b>Rs.2200/- </b><br />Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit, sed
                                            do eiusmod
                                            tempor.
                                            <button type="button" className="btn btn-light mt-2"
                                            ><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to
                                                cart</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card">
                                    <img className="card-img-top" src={pinkFrock} alt="frock"
                                        height="300px" width="200px" />
                                    <div className="card-body">
                                        <h5>Pink frock</h5>
                                        <p><b>Rs.1800/- </b><br />Lorem ipsum dolor sit amet, consectetur
                                            adipiscing
                                            elit, sed
                                            do eiusmod
                                            tempor.
                                            <button type="button" className="btn btn-light mt-2"
                                            ><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to
                                                cart</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Buttons to move the carousel */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Slider;