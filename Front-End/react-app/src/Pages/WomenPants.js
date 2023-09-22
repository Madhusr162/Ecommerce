import Header from "../Components/Header";
import Footer from '../Components/Footer';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import checkedTrouser from '../Images/checked trouser.jpg'
import girlsTrouser from '../Images/girls-trouser.jpg'
import jeans from '../Images/jeans.webp'
import olivePant from '../Images/olive pant.jpg'
import blackPant from '../Images/black pantwomen.webp'
import palazzoPant from '../Images/palazzo pant.jpg'
import solidPant from '../Images/solid pant.webp'
import cargoPants from '../Images/cargo pants.webp'

const WomenPants = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <h1 style={{textAlign: "center"}} className="my-3">Women Pants</h1>
            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={checkedTrouser} alt="checked trouser" />
                        <div className="card-body">
                            <h4>Checked trouser</h4>
                            <p><b>Rs.800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={girlsTrouser} alt="girls-trouser" />
                        <div className="card-body">
                            <h4>Trouser</h4>
                            <p><b>Rs.700/-</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={jeans} alt="jeans" />
                        <div className="card-body">
                            <h4>Jeans</h4>
                            <p><b>Rs.1200/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={olivePant} alt="olive pant" />
                        <div className="card-body">
                            <h4>Olive pant</h4>
                            <p><b>Rs.800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={blackPant} alt="black pantwomen" />
                        <div className="card-body">
                            <h4>Black pant</h4>
                            <p><b>Rs.800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={palazzoPant} alt="palazzo pant" />
                        <div className="card-body">
                            <h4>Palazzo pant</h4>
                            <p><b>Rs.1200/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={solidPant} alt="solid pant" />
                        <div className="card-body">
                            <h4>Solid pant</h4>
                            <p><b>Rs.1200/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={cargoPants} alt="cargo pants" />
                        <div className="card-body">
                            <h4>Cargo pants</h4>
                            <p><b>Rs.1800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={checkedTrouser} alt="checked trouser" />
                        <div className="card-body">
                            <h4>Checked trouser</h4>
                            <p><b>Rs.800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={girlsTrouser} alt="girls trouser" />
                        <div className="card-body">
                            <h4>Trouser</h4>
                            <p><b>Rs.700/-</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={jeans} alt="jeans" />
                        <div className="card-body">
                            <h4>Jeans</h4>
                            <p><b>Rs.1200/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={olivePant} alt="olive pant" />
                        <div className="card-body">
                            <h4>Olive pant</h4>
                            <p><b>Rs.800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={blackPant} alt="black pant" />
                        <div className="card-body">
                            <h4>Black pant</h4>
                            <p><b>Rs.800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={palazzoPant} alt="palazzo pant" />
                        <div className="card-body">
                            <h4>Palazzo pant</h4>
                            <p><b>Rs.1200/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={solidPant} alt="solid pant" />
                        <div className="card-body">
                            <h4>Solid pant</h4>
                            <p><b>Rs.1200/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={cargoPants} alt="cargo pants" />
                        <div className="card-body">
                            <h4>Cargo pants</h4>
                            <p><b>Rs.1800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}
export default WomenPants;