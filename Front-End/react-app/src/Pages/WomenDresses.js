import Header from "../Components/Header";
import Footer from '../Components/Footer';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import saree from '../Images/saree.webp'
import lehenga from '../Images/lehenga.webp'
import longFrock from '../Images/longfrock.jpg'
import tshirt from '../Images/tshirt.webp'
import maroonGown from '../Images/maroon gown.webp'
import partyWear from '../Images/party wear.webp'
import rayonTop from '../Images/rayon top.jpg'
import blackTops from '../Images/black tops.jpg'

const WomenDresses = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <h1 style={{textAlign:"center"}}className="my-3">Women Dresses</h1>
            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={saree} alt="saree" />
                        <div className="card-body">
                            <h4>Saree</h4>
                            <p><b>Rs.1500/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={lehenga} alt="Lehenga" />
                        <div className="card-body">
                            <h4>Lehenga</h4>
                            <p><b>Rs.1200/-</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={longFrock} alt="long frock" />
                        <div className="card-body">
                            <h4>Long Frock</h4>
                            <p><b>Rs.1600/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={tshirt} alt="tshirt" />
                        <div className="card-body">
                            <h4>T-shirt</h4>
                            <p><b>Rs.500/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={maroonGown} alt="maroon gown" />
                        <div className="card-body">
                            <h4>Maroon gown</h4>
                            <p><b>Rs.1200/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={partyWear} alt="party wear" />
                        <div className="card-body">
                            <h4>Party wear</h4>
                            <p><b>Rs.1700/-</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={rayonTop} alt="rayon top" />
                        <div className="card-body">
                            <h4>Rayon top</h4>
                            <p><b>Rs.1400/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={blackTops} alt="black tops" />
                        <div className="card-body">
                            <h4>Black tops</h4>
                            <p><b>Rs.800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={saree} alt="saree" />
                        <div className="card-body">
                            <h4>Saree</h4>
                            <p><b>Rs.1500/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={lehenga} alt="Lehenga" />
                        <div className="card-body">
                            <h4>Lehenga</h4>
                            <p><b>Rs.1200/-</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={longFrock} alt="long frock" />
                        <div className="card-body">
                            <h4>Long Frock</h4>
                            <p><b>Rs.1600/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={tshirt} alt="tshirt" />
                        <div className="card-body">
                            <h4>T-shirt</h4>
                            <p><b>Rs.500/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={maroonGown} alt="maroon gown" />
                        <div className="card-body">
                            <h4>Maroon gown</h4>
                            <p><b>Rs.1200/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={partyWear} alt="party wear" />
                        <div className="card-body">
                            <h4>Party wear</h4>
                            <p><b>Rs.1700/-</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={rayonTop} alt="rayon top" />
                        <div className="card-body">
                            <h4>Rayon top</h4>
                            <p><b>Rs.1400/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={blackTops} alt="black tops" />
                        <div className="card-body">
                            <h4>Black tops</h4>
                            <p><b>Rs.800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}
export default WomenDresses;