import Header from "../Components/Header";
import Footer from "../Components/Footer";
import contactUs from '../Images/contact-us-concept-free-photo.webp'

const ContactUs = () => {

    return (
        <div className="container-fluid">
            <Header />
            <h1 style={{ textAlign: "center" }} className="my-3">Contact Us</h1>
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={contactUs} alt="contact us" className="img-fluid" />
                </div>

                <div className="col-12 col-md-6">
                    <div className="mb-3">
                        <label for="name" className="form-label"><b>Name:</b></label>
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label"><b>Email address:</b></label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="message" className="form-label"><b>Message:</b></label>
                        <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-light me-2" style={{ backgroundColor: "rgb(204, 214, 7)", width: "400px", height: "50px" }}>submit</button>
                </div>
            </div>

            <Footer />
        </div>


    );
}
export default ContactUs;