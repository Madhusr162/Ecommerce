import Header from "../Components/Header";
import Footer from '../Components/Footer';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import greenSkirt from '../Images/Green skirt.webp'
import jaipurSkirt from '../Images/jaipur skirt1.jpg'
import maxiSkirt from '../Images/maxi skirt.webp'
import miniSkirt from '../Images/mini skirt.webp'
import shortSkirt from '../Images/short skirt.webp'
import greenPleatedSkirt from '../Images/green pleated skirt.webp'
import bnwSkirt from '../Images/black and white skirt.webp'
import skirt from '../Images/skirt.jpg'

const WomenSkirts = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <h1 style={{textAlign: "center"}} className="my-3">Women Skirts</h1>
            <div className="row ">
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={greenSkirt} alt="green skirt" />
                        <div className="card-body">
                            <h4>Green skirt</h4>
                            <p><b>Rs.600/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={jaipurSkirt} alt="jaipur skirt" />
                        <div className="card-body">
                            <h4>Jaipur skirt</h4>
                            <p><b>Rs.800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={maxiSkirt} alt="maxi skirt" />
                        <div className="card-body">
                            <h4>Maxi skirt</h4>
                            <p><b>Rs.1100/-</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={miniSkirt} alt="mini skirt" />
                        <div className="card-body">
                            <h4>Mini skirt</h4>
                            <p><b>Rs.900/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={shortSkirt} alt="short skirt" />
                        <div className="card-body">
                            <h4>Short skirt</h4>
                            <p><b>Rs.800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={skirt} alt="skirt" />
                        <div className="card-body">
                            <h4>Skirt</h4>
                            <p><b>Rs.600/-</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={greenPleatedSkirt} alt="green pleated skirt" />
                        <div className="card-body">
                            <h4>Green pleated skirt</h4>
                            <p><b>Rs.900/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={bnwSkirt} alt="black and white skirt" />
                        <div className="card-body">
                            <h4>Black and white skirt</h4>
                            <p><b>Rs.700/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={greenSkirt} alt="green skirt" />
                        <div className="card-body">
                            <h4>Green skirt</h4>
                            <p><b>Rs.600/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={jaipurSkirt} alt="jaipur skirt" />
                        <div className="card-body">
                            <h4>Jaipur skirt</h4>
                            <p><b>Rs.800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={maxiSkirt} alt="maxi skirt" />
                        <div className="card-body">
                            <h4>Maxi skirt</h4>
                            <p><b>Rs.1100/-</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={miniSkirt} alt="mini skirt" />
                        <div className="card-body">
                            <h4>Mini skirt</h4>
                            <p><b>Rs.900/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={shortSkirt} alt="short skirt" />
                        <div className="card-body">
                            <h4>Short skirt</h4>
                            <p><b>Rs.800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={skirt} alt="skirt" />
                        <div className="card-body">
                            <h4>Skirt</h4>
                            <p><b>Rs.600/-</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={greenPleatedSkirt} alt="green pleated skirt" />
                        <div className="card-body">
                            <h4>Green pleated skirt</h4>
                            <p><b>Rs.900/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product" >
                        <img className="card-img-top allproduct" src={bnwSkirt} alt="black and white skirt" />
                        <div className="card-body">
                            <h4>Black and white skirt</h4>
                            <p><b>Rs.700/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
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
export default WomenSkirts;