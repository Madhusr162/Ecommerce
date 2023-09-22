import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Rate from "../Components/Rate";
import { useState } from "react";

const SpecificProduct = () => {
    const [rating, setRating] = useState(0);
    return (
        <>
            <Header />
            <div className="row">
                <div className="col text-center" style={{color: "black"}}>
                    <h2>Rate me</h2>
                    <p>Rating component</p>
                    <Rate rating={rating} onRating={rate => setRating(rate)} />
                    <p> Rating - {rating}</p>
                </div>
            </div>


            <Footer />
        </>
    )
}
export default SpecificProduct;