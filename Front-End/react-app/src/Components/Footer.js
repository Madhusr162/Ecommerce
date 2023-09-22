import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            {/* links for women section */}
            <div className="container-fluid my-3" style={{ backgroundColor: "black" }}>
                <div className="row text-center">
                    <div className="col-md-3 col-sm-6 col-xs-12 mt-3">
                        <h4 className='mb-4 links'><Link to="/womenall">Women</Link></h4>
                        <div className="footer_links-parent">
                            <h6 className='mb-4 links'> <Link to="/womendresses">Dresses</Link></h6>
                            <h6 className='mb-4 links'><Link to="/womenpants">Pants</Link></h6>
                            <h6 className='mb-4 links'><Link to="/womenskirts">Skirts</Link></h6>
                        </div>
                    </div>
                    {/* links for men section */}
                    <div className="col-md-3 col-sm-6 col-xs-12 mt-3">
                        <h4 className='mb-4 links'><Link to="/menall">Men</Link></h4>
                        <div className="footer_links-parent">
                            <h6 className='mb-4 links'> <Link to="/menshirts">Shirts</Link></h6>
                            <h6 className='mb-4 links'> <Link to="/menpants">Pants</Link></h6>
                            <h6 className='mb-4 links'><Link to="/menhoodies">Hoodies</Link></h6>
                        </div>
                    </div>
                    {/* kid section */}
                    <div className="col-md-3 col-sm-6 col-xs-12 mt-3">
                        <h4 className='links'><Link to="/kidsall">Kids</Link></h4>

                    </div>
                    {/* links for other different pages */}
                    <div className="col-md-3 col-sm-6 col-xs-12 mt-3">
                        <h4 className='mb-4 links'>Links</h4>
                        <div className="footer_links-parent">
                            <h6 className='mb-4 links'> <Link to="/">Home</Link></h6>
                            <h6 className='mb-4 links'> <Link to="/login">Login</Link></h6>
                            <h6 className='mb-4 links'> <Link to="/contactus">Contact</Link></h6>
                        </div>
                    </div>
                </div>
                {/* copyright */}
                <footer className="page-footer" style={{ backgroundColor: "black" }}>
                    <div className="footer-copyright justify-content-center py-3" style={{ color: "white" }}>
                        <div className="col-md-4 offset-4 font-small">
                            <hr />Copyright ©Madhu's Wardrobe 2023-24
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    );
}
export default Footer;