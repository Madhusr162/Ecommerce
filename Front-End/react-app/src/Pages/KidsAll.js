import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import AlineFrock from '../Images/a line frock.webp'
import FashionWear from '../Images/fashion wear.jpg'
import Jumpsuit from '../Images/jumpsuit.jpg'
import suit from '../Images/suit.jpg'
import longGown from '../Images/longgown.jpg'
import pinkfrock from '../Images/pink frock.jpg'
import safariKids from '../Images/safarikids.jpg'
import FancyDress from '../Images/fancy dress.jpg'
import './Products.css'
import { Link } from 'react-router-dom'

const KidsAll = () => {
    return (
        <div className="Container-fluid">
            <Header />
            <h1 className="my-3" style={{ textAlign: "center" }}>Kids All product</h1>
            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <Link to ="/SpecificProduct"><img className="card-img-top allproduct" src={AlineFrock} alt=" saree" /></Link>
                        <div className="card-body">
                            <h4>A line frock</h4>
                            <p><b>Rs.900/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={FashionWear} alt=" Lehenga" />
                        <div className="card-body">
                            <h4>Fashion wear</h4>
                            <p><b>Rs.1200/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={Jumpsuit} alt=" long frock" />
                        <div className="card-body">
                            <h4>Jumpsuit</h4>
                            <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={suit} alt=" jeans" />
                        <div className="card-body">
                            <h4>Suit</h4>
                            <p><b>Rs.3000/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={longGown} alt=" saree" />
                        <div className="card-body">
                            <h4>Party wear</h4>
                            <p><b>Rs.5200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={pinkfrock} alt=" Lehenga" />
                        <div className="card-body">
                            <h4>Pink frock</h4>
                            <p><b>Rs.1900/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={safariKids} alt=" long frock" />
                        <div className="card-body">
                            <h4>Safari</h4>
                            <p><b>Rs.1900/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={FancyDress} alt=" jeans" />
                        <div className="card-body">
                            <h4>Fancy dress</h4>
                            <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={AlineFrock} alt=" saree" />
                        <div className="card-body">
                            <h4>A line frock</h4>
                            <p><b>Rs.900/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={FashionWear} alt=" Lehenga" />
                        <div className="card-body">
                            <h4>Fashion wear</h4>
                            <p><b>Rs.1200/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>


                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={Jumpsuit} alt=" long frock" />
                        <div className="card-body">
                            <h4>Jumpsuit</h4>
                            <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={suit} alt=" jeans" />
                        <div className="card-body">
                            <h4>Suit</h4>
                            <p><b>Rs.3000/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col my-2">
                        <div className="card product">
                            <img className="card-img-top allproduct" src={longGown} alt=" saree" />
                            <div className="card-body">
                                <h4>Party wear</h4>
                                <p><b>Rs.5200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor.
                                    <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                            </div>
                        </div>
                    </div>
                    <div className="col my-2">
                        <div className="card product">
                            <img className="card-img-top allproduct" src={pinkfrock} alt=" Lehenga" />
                            <div className="card-body">
                                <h4>Pink frock</h4>
                                <p><b>Rs.1900/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor.
                                    <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="col my-2">
                        <div className="card product">
                            <img className="card-img-top allproduct" src={safariKids} alt=" long frock" />
                            <div className="card-body">
                                <h4>Safari</h4>
                                <p><b>Rs.1900/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor.
                                    <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="col my-2">
                        <div className="card product">
                            <img className="card-img-top allproduct" src={FancyDress} alt=" jeans" />
                            <div className="card-body">
                                <h4>Fancy dress</h4>
                                <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor.
                                    <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
export default KidsAll;