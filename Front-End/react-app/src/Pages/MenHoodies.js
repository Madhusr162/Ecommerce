import blackHoodie from '../Images/black hoodie.webp'
import californiaHoodie from '../Images/california hoodie.jpg'
import hoodies1 from '../Images/hoodies1.webp'
import streetwearHoodie from '../Images/streetwear hoodie.jpg'
import yellowHoodie from '../Images/yellow hoodie.jpg'
import winterHoodie from '../Images/winter hoodie.jpg'
import pinkHoodie from '../Images/pink hoodie.jpg'
import greenHoodie from '../Images/pista green hoodie.jpg'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const MenHoodies = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <h1 style={{ textAlign: "center" }} className='my-3'>Men Hoodies</h1>
            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={blackHoodie} alt=" saree" />
                        <div className="card-body">
                            <h4>Black hoodie</h4>
                            <p><b>Rs.1500/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={californiaHoodie} alt=" Lehenga" />
                        <div className="card-body">
                            <h4>California hoodie</h4>
                            <p><b>Rs.2200/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={hoodies1} alt=" long frock" />
                        <div className="card-body">
                            <h4>Black and white hoodie</h4>
                            <p><b>Rs.3200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={streetwearHoodie} alt=" jeans" />
                        <div className="card-body">
                            <h4>Streetwear hoodie</h4>
                            <p><b>Rs.2000/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={yellowHoodie} alt=" saree" />
                        <div className="card-body">
                            <h4>Yellow hoodie</h4>
                            <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={winterHoodie} alt=" Lehenga" />
                        <div className="card-body">
                            <h4>Winter hoodie</h4>
                            <p><b>Rs.900/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={pinkHoodie} alt=" long frock" />
                        <div className="card-body">
                            <h4>Pink hoodie</h4>
                            <p><b>Rs.1000/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={greenHoodie} alt=" jeans" />
                        <div className="card-body">
                            <h4>Pista green hoodie</h4>
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
                        <img className="card-img-top allproduct" src={blackHoodie} alt=" saree" />
                        <div className="card-body">
                            <h4>Black hoodie</h4>
                            <p><b>Rs.1500/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={californiaHoodie} alt=" Lehenga" />
                        <div className="card-body">
                            <h4>California hoodie</h4>
                            <p><b>Rs.2200/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={hoodies1} alt=" long frock" />
                        <div className="card-body">
                            <h4>Black and white hoodie</h4>
                            <p><b>Rs.3200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={streetwearHoodie} alt=" jeans" />
                        <div className="card-body">
                            <h4>Streetwear hoodie</h4>
                            <p><b>Rs.2000/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={yellowHoodie} alt=" saree" />
                        <div className="card-body">
                            <h4>Yellow hoodie</h4>
                            <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={winterHoodie} alt=" Lehenga" />
                        <div className="card-body">
                            <h4>Winter hoodie</h4>
                            <p><b>Rs.900/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={pinkHoodie} alt=" long frock" />
                        <div className="card-body">
                            <h4>Pink hoodie</h4>
                            <p><b>Rs.1000/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card product">
                        <img className="card-img-top allproduct" src={greenHoodie} alt=" jeans" />
                        <div className="card-body">
                            <h4>Pista green hoodie</h4>
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
export default MenHoodies;