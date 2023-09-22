import Footer from "../Components/Footer";
import Header from "../Components/Header";
import jumpSuit from '../Images/jumpsuit.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <div className="container-fluid">
                <Header />
                <div className="row cart-container">
                    <div className="col-9 my-3 items">
                        <h2 className="my-3" style={{ textAlign: "center" }}>Items in your cart</h2>
                        <hr />
                        <div className="row cart">
                            <div className="col-sm-3 col-6">
                                <img src={jumpSuit} alt="jumpsuit" />
                            </div>
                            <div className="col-sm-3 col-6 mx-5 text-center cart-discription">
                                <h6 className="fs-3 text-capitalize font-monospace">Jumpsuit</h6>
                                <h6 className="fs-2">Rs.800/-</h6>
                                <FontAwesomeIcon icon={faTrash} style={{ fontSize: "2.0em", color: "rgb(204, 214, 7)" }} />
                            </div>
                            <div className="col-sm-3 col-12 text-center align-self-center">
                                <div className="text-center d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faPlus} style={{ fontSize: "1.6em", color: "rgb(204, 214, 7)" }} />
                                    <span><h6 className="fs-2">1</h6></span>
                                    <FontAwesomeIcon icon={faMinus} style={{ fontSize: "1.6em", color: "rgb(204, 214, 7)" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 my-3">
                        <div className="summary">
                            <h5 className="text-center fs-3">Summary</h5>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <strong className="fs-4">Cost
                                    <em className="px-2" style={{ fontSize: "15px", fontWeight: "bold" }}>Rs. 800/-</em>
                                </strong>
                            </div>
                            <div className="d-flex justify-content-between">
                                <strong className="fs-4">Shipping
                                    <em className="px-2" style={{ fontSize: "15px", fontWeight: "bold" }}>Rs. 100/-</em>
                                </strong>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <strong className="fs-4">Total
                                    <em className="px-2" style={{ fontSize: "15px", fontWeight: "bold" }}>Rs. 900/-</em>
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
export default Cart;