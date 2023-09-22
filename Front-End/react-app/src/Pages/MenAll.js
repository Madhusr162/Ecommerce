import waistcoat from '../Images/waistcoat.jpg'
import safari from '../Images/safari.webp'
import coat from '../Images/coa.webp'
import checkedSuit from '../Images/checked suit.webp'
import casualShirt from '../Images/casual shirt.jpg'
import shirt2 from '../Images/shirt2.webp'
import shirt1 from '../Images/shirt1.webp'
import flowerShirt from '../Images/flower shirt.webp'
import jeanShirt from '../Images/jean shirt.jpg'
import purpleShirt from '../Images/purple shirt.webp'
import slimFit from '../Images/slim fit casual shirt.jpg'
import stylishShirt from '../Images/stylish shirt.webp'
import winepoloShirt from '../Images/wine polo shirt.jpg'
import blackPant from '../Images/black pant.webp'
import boysJoggers from '../Images/boys joggers.jpg'
import cargoPant from '../Images/cargo pant boy.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const MenAll = () => {
    return (
        <div className="Container-fluid">
             <Header/>
            <h1 style={{textAlign:"center"}} className="my-3">Men All products</h1>
            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={waistcoat} alt="saree" />
                        <div className="card-body">
                            <h4>Waistcoat</h4>
                            <p><b>Rs.2500/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={safari} alt="Lehenga" />
                        <div className="card-body">
                            <h4>Safari</h4>
                            <p><b>Rs.7200/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={coat} alt="long frock" />
                        <div className="card-body">
                            <h4>Coat</h4>
                            <p><b>Rs.3200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={checkedSuit} alt="jeans" />
                        <div className="card-body">
                            <h4>Checked suit</h4>
                            <p><b>Rs.8000/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={casualShirt} alt="saree" />
                        <div className="card-body">
                            <h4>Casual shirt</h4>
                            <p><b>Rs.900/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={shirt2} alt="Lehenga" />
                        <div className="card-body">
                            <h4>Shirt</h4>
                            <p><b>Rs.700/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={shirt1} alt="long frock" />
                        <div className="card-body">
                            <h4>Checked shirt</h4>
                            <p><b>Rs.600/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={flowerShirt} alt="jeans" />
                        <div className="card-body">
                            <h4>Flower shirt</h4>
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
                        <img className="card-img-top allproduct" src={jeanShirt} alt="saree" />
                        <div className="card-body">
                            <h4>Jean shirt</h4>
                            <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={purpleShirt} alt="Lehenga" />
                        <div className="card-body">
                            <h4>Purple shirt</h4>
                            <p><b>Rs.1100/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={slimFit} alt="long frock" />
                        <div className="card-body">
                            <h4>Slimfit casual shirt</h4>
                            <p><b>Rs.900/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={stylishShirt} alt="jeans" />
                        <div className="card-body">
                            <h4>Stylish shirt</h4>
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
                        <img className="card-img-top allproduct" src={winepoloShirt} alt="saree" />
                        <div className="card-body">
                            <h4>Wine polo shirt</h4>
                            <p><b>Rs.800/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={blackPant} alt="Lehenga" />
                        <div className="card-body">
                            <h4>Black pant</h4>
                            <p><b>Rs.800/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={boysJoggers} alt="long frock" />
                        <div className="card-body">
                            <h4>Joggers</h4>
                            <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={cargoPant} alt="jeans" />
                        <div className="card-body">
                            <h4>Cargo pant</h4>
                            <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
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
export default MenAll;