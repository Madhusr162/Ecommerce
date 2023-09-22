import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import casualShirt from '../Images/casual shirt.jpg'
import shirt2 from '../Images/shirt2.webp'
import shirt1 from '../Images/shirt1.webp'
import flowerShirt from '../Images/flower shirt.webp'
import jeanShirt from '../Images/jean shirt.jpg'
import purpleShirt from '../Images/purple shirt.webp'
import slimFit from '../Images/slim fit casual shirt.jpg'
import stylishShirt from '../Images/stylish shirt.webp'
const MenShirts = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <h1 style={{textAlign:"center"}} className='my-3'>Men Shirts</h1>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={casualShirt} alt="casual shirt" />
                        <div className="card-body">
                            <h4>Casual shirt</h4>
                            <p><b>Rs.900/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={shirt2} alt="shirt2" />
                        <div className="card-body">
                            <h4>Shirt</h4>
                            <p><b>Rs.700/-</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={shirt1} alt="shirt 1" />
                        <div className="card-body">
                            <h4>Checked shirt</h4>
                            <p><b>Rs.600/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={flowerShirt} alt="flower shirt" />
                        <div className="card-body">
                            <h4>Flower shirt</h4>
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
                        <img className="card-img-top allproduct" src={jeanShirt} alt="jean shirt" />
                        <div className="card-body">
                            <h4>Jean shirt</h4>
                            <p><b>Rs.1200/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={purpleShirt} alt="purple shirt" />
                        <div className="card-body">
                            <h4>Purple shirt</h4>
                            <p><b>Rs.1100/-</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={slimFit} alt="slim fit casual shirt" />
                        <div className="card-body">
                            <h4>Slimfit casual shirt</h4>
                            <p><b>Rs.900/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={stylishShirt} alt="stylish shirt" />
                        <div className="card-body">
                            <h4>Stylish shirt</h4>
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
                        <img className="card-img-top allproduct" src={casualShirt} alt="casual shirt" />
                        <div className="card-body">
                            <h4>Casual shirt</h4>
                            <p><b>Rs.900/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={shirt2} alt="shirt 2" />
                        <div className="card-body">
                            <h4>Shirt</h4>
                            <p><b>Rs.700/-</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={shirt1} alt="shirt 1" />
                        <div className="card-body">
                            <h4>Checked shirt</h4>
                            <p><b>Rs.600/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={flowerShirt} alt="flower shirt" />
                        <div className="card-body">
                            <h4>Flower shirt</h4>
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
                        <img className="card-img-top allproduct" src={jeanShirt} alt="jean shirt" />
                        <div className="card-body">
                            <h4>Jean shirt</h4>
                            <p><b>Rs.1200/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={purpleShirt} alt="purple shirt" />
                        <div className="card-body">
                            <h4>Purple shirt</h4>
                            <p><b>Rs.1100/-</b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={slimFit} alt="slim fit casual shirt" />
                        <div className="card-body">
                            <h4>Slimfit casual shirt</h4>
                            <p><b>Rs.900/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={stylishShirt} alt="stylish shirt" />
                        <div className="card-body">
                            <h4>Stylish shirt</h4>
                            <p><b>Rs.1200/- </b> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default MenShirts;