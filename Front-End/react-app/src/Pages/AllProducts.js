import Header from "../Components/Header";
import Footer from "../Components/Footer";
import './AllProducts.css'
import saree from '../Images/saree.webp';
import lehenga from '../Images/lehenga.webp'
import longfrock from '../Images/longfrock.jpg'
import jeans from '../Images/jeans.webp'
import longMidi from '../Images/long midi.jpg'
import tshirt from '../Images/tshirt.webp'
import coat from '../Images/coa.webp'
import checkedSuit from '../Images/checked suit.webp'
import jeanShirt from '../Images/jean shirt.jpg'
import jean from '../Images/jean.jpg'
import safari from '../Images/safari.webp'
import shirt1 from '../Images/shirt1.webp'
import aLineFrock from '../Images/a line frock.webp'
import jumpSuit from '../Images/jumpsuit.jpg'
import longGown from '../Images/longgown.jpg'
import safariKids from '../Images/safarikids.jpg'
import pinkFrock from '../Images/pink frock.jpg'
import suit from '../Images/suit.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const AllProducts = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <h1 className="my-3"style={{textAlign: "center"}}>All products</h1>

            <div className="row ">
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={saree} alt="saree"  />
                        <div className="card-body">
                            <h4>Saree</h4>
                            <p><b>Rs.1500/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={lehenga}alt="Lehenga"  />
                        <div className="card-body">
                            <h4>Lehenga</h4>
                            <p><b>Rs.1200/-</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light" ><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={longfrock} alt="long frock"  />
                        <div className="card-body">
                            <h4>Long Frock</h4>
                            <p><b>Rs.1600/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={jeans} alt="jeans"  />
                        <div className="card-body">
                            <h4>Jeans</h4>
                            <p><b>Rs.800/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={longMidi} alt="long midi"  />
                        <div className="card-body">
                            <h4>Long midi</h4>
                            <p><b>Rs.1800/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={tshirt}alt="t-shirt"  />
                        <div className="card-body">
                            <h4>T-shirt</h4>
                            <p><b>Rs.700/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={coat} alt="coat"  />
                        <div className="card-body">
                            <h4>Coat</h4>
                            <p><b>Rs.5500/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={checkedSuit} alt="checked suit"  />
                        <div className="card-body">
                            <h4>Checked suit</h4>
                            <p><b>Rs.7200/-</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={jeanShirt} alt="jean shirt"  />
                        <div className="card-body">
                            <h4>Jean shirt</h4>
                            <p><b>Rs.1600/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={jean} alt="jeans"  />
                        <div className="card-body">
                            <h4>Jeans</h4>
                            <p><b>Rs.700/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={safari} alt="safari"  />
                        <div className="card-body">
                            <h4>Safari</h4>
                            <p><b>Rs.3800/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={shirt1} alt="shirt"  />
                        <div className="card-body">
                            <h4>Shirt</h4>
                            <p><b>Rs.700/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={aLineFrock} alt="frock"  />
                        <div className="card-body">
                            <h4>A line Frock</h4>
                            <p><b>Rs.800/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={jumpSuit} alt="jump suit"  />
                        <div className="card-body">
                            <h4>Jumpsuit</h4>
                            <p><b>Rs.700/-</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={longGown} alt="long gown"  />
                        <div className="card-body">
                            <h4>Long gown</h4>
                            <p><b>Rs.4200/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={safariKids} alt="safari"  />
                        <div className="card-body">
                            <h4>Safari</h4>
                            <p><b>Rs.2200/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={pinkFrock} alt="frock"  />
                        <div className="card-body">
                            <h4>Pink frock</h4>
                            <p><b>Rs.1800/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={suit} alt="suit"  />
                        <div className="card-body">
                            <h4>Suit</h4>
                            <p><b>Rs.1700/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={saree} alt="saree"  />
                        <div className="card-body">
                            <h4>Saree</h4>
                            <p><b>Rs.1500/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={lehenga} alt="Lehenga"  />
                        <div className="card-body">
                            <h4>Lehenga</h4>
                            <p><b>Rs.1200/-</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={longfrock} alt="long frock"  />
                        <div className="card-body">
                            <h4>Long Frock</h4>
                            <p><b>Rs.1600/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={jeans} alt="jeans"  />
                        <div className="card-body">
                            <h4>Jeans</h4>
                            <p><b>Rs.800/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={longMidi} alt="long midi"  />
                        <div className="card-body">
                            <h4>Long midi</h4>
                            <p><b>Rs.1800/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card products" >
                        <img className="card-img-top allproducts" src={tshirt} alt="t-shirt"  />
                        <div className="card-body">
                            <h4>T-shirt</h4>
                            <p><b>Rs.700/- </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default AllProducts;