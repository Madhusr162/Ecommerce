import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import denisPant from '../Images/denim pant.jpg'
import blackPant from '../Images/black pant.webp'
import boysJoggers from '../Images/boys joggers.jpg'
import cargoPant from '../Images/cargo pant boy.webp'
import gymPant from '../Images/gym pant.jpg'
import jean from '../Images/jean.jpg'
import slimfitJoggers from '../Images/slim fit jogger.jpg'
import trackPant from '../Images/track pant.jpg'

const MenPants = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <h1 style={{textAlign: "center"}} className="my-3">Men Pants</h1>
            <div className="row ">
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={denisPant} alt="denim pant" />
                        <div className="card-body">
                            <h4>Denim pant</h4>
                            <p><b>Rs.800/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={blackPant} alt="black pant" />
                        <div className="card-body">
                            <h4>Black pant</h4>
                            <p><b>Rs.800/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={boysJoggers} alt="boys joggers" />
                        <div className="card-body">
                            <h4>Joggers</h4>
                            <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={cargoPant} alt="cargo pant boy" />
                        <div className="card-body">
                            <h4>Cargo pant</h4>
                            <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={gymPant} alt="gym pant" />
                        <div className="card-body">
                            <h4>Gym pant</h4>
                            <p><b>Rs.800/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={jean} alt="jean" />
                        <div className="card-body">
                            <h4>Jean</h4>
                            <p><b>Rs.1200/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={slimfitJoggers} alt="slim fit jogger" />
                        <div className="card-body">
                            <h4>Slimfit joggers</h4>
                            <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={trackPant} alt="track pant" />
                        <div className="card-body">
                            <h4>Track pant</h4>
                            <p><b>Rs.900/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={denisPant} alt="denim pant" />
                        <div className="card-body">
                            <h4>Denim pant</h4>
                            <p><b>Rs.800/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={blackPant} alt="black pant" />
                        <div className="card-body">
                            <h4>Black pant</h4>
                            <p><b>Rs.800/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={boysJoggers} alt="boys joggers" />
                        <div className="card-body">
                            <h4>Joggers</h4>
                            <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={cargoPant} alt="cargo pant" />
                        <div className="card-body">
                            <h4>Cargo pant</h4>
                            <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={gymPant} alt="gym pant" />
                        <div className="card-body">
                            <h4>Gym pant</h4>
                            <p><b>Rs.800/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>

                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={jean} alt="jean" />
                        <div className="card-body">
                            <h4>Jean</h4>
                            <p><b>Rs.1200/-</b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={slimfitJoggers} alt="slim fit joggers" />
                        <div className="card-body">
                            <h4>Slimfit joggers</h4>
                            <p><b>Rs.1200/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor.
                                <button type="button" className="btn btn-light"><FontAwesomeIcon className="cart me-2" icon={faCartShopping} />Add to cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="col my-2">
                    <div className="card  product">
                        <img className="card-img-top allproduct" src={trackPant} alt="track pant" />
                        <div className="card-body">
                            <h4>Track pant</h4>
                            <p><b>Rs.900/- </b><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
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
export default MenPants;