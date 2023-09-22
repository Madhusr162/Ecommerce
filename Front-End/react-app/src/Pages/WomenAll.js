import Header from "../Components/Header";
import Footer from '../Components/Footer';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import saree from '../Images/saree.webp'
import lehenga from '../Images/lehenga.webp'
import longFrock from '../Images/longfrock.jpg'
import jeans from '../Images/jeans.webp'
import checkedTrouser from '../Images/checked trouser.jpg'
import girlsTrouser from '../Images/girls-trouser.jpg'
import greenSkirt from '../Images/Green skirt.webp'
import jaipurSkirt from '../Images/jaipur skirt1.jpg'
import maxiSkirt from '../Images/maxi skirt.webp'
import miniSkirt from '../Images/mini skirt.webp'
import palazzoPant from '../Images/palazzo pant.jpg'
import shortSkirt from '../Images/short skirt.webp'
import skirt from '../Images/skirt.jpg'
import solidPant from '../Images/solid pant.webp'
import cargoPant from '../Images/cargo pants.webp'

const WomenAll = () => {
    return (
        <div className="Container-fluid">
            <Header/>
            <h1 style={{textAlign: "center"}} className="my-3">Women All products</h1>
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
                        <img className="card-img-top allproduct" src={jeans} alt="jeans" />
                        <div className="card-body">
                            <h4>Jeans</h4>
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
                        <img className="card-img-top allproduct" src={checkedTrouser} alt="checked trouser" />
                        <div className="card-body">
                            <h4>Checked trouser</h4>
                            <p><b>Rs.800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

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
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={greenSkirt} alt="Green skirt" />
                        <div className="card-body">
                            <h4>Green skirt</h4>
                            <p><b>Rs.600/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={jaipurSkirt} alt="jaipur skirt" />
                        <div className="card-body">
                            <h4>Jaipur skirt</h4>
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
                        <img className="card-img-top allproduct" src={jeans} alt="jeans" />
                        <div className="card-body">
                            <h4>Jeans</h4>
                            <p><b>Rs.1200/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
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
                    <div className="card product">
                        <img className="card-img-top allproduct" src={miniSkirt} alt="mini skirt" />
                        <div className="card-body">
                            <h4>Mini skirt</h4>
                            <p><b>Rs.900/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
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
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
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
                    <div className="card product">
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
                    <div className="card product">
                        <img className="card-img-top allproduct" src={solidPant} alt="solid pant" />
                        <div className="card-body">
                            <h4>Solid pant</h4>
                            <p><b>Rs.1200/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={cargoPant} alt="cargo pants" />
                        <div className="card-body">
                            <h4>Cargo pants</h4>
                            <p><b>Rs.1800/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
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
export default WomenAll;