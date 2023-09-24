import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

const Product = () => {

    /*Declared variables to the topsales and user details*/
    const [product, setProduct] = useState([]);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");
    const [images, setImages] = useState("");
    const [showUpdate, setShowUpdate] = useState(false);

    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }

    const handleUpdateClose = () => setShowUpdate(false);
    const handleUpdateShow = () => setShowUpdate(true);

    /*Function to fetch data using axios*/
    const getProducts = async () => {
        try {
            const response = await axios.get('/products');
            console.log(response.data);
            setProduct(response.data.Products);

        } catch (err) {

            console.error(err.message);
        }
    }
    const deleteProduct = async (id) => {
        try {
            const resp = await axios.delete(`/admin/${id}/deleteproduct`, CONFIG_OBJ);
            console.log(resp.data);
            getProducts();
            if(resp.status===201){
                toast.success("product deleted")
            }
        } catch (error) {
            console.log(error)
            toast.warning(error.response.data.error)
        }
    }
    const updateProduct = async (id) => {
        try {
            const resp = await axios.put(`/admin/${id}/update`, CONFIG_OBJ);
            console.log(resp.data);
            getProducts();
            if(resp.status===201){
                toast.success("product updated")
            }
        } catch (error) {
            console.log(error)
            toast.warning(error.response.data.error)
        }
    }

    /*useEffect to check whether the user logged in or not to display the top sales page*/
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <Navbar />
            {/* Creating table format to display the users */}
            <div className="container-fluid">
                <h3 style={{ textAlign: "center" }} className="mb-5 mt-5">PRODUCT LIST</h3>
                <table className="table table-warning table-striped-columns justify-content-center">
                    <thead>
                        <tr >
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Update Product</th>
                            <th scope="col">Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* Using map function to fetch array of data from backend */}
                        {product.map((item, index) => {
                            return (
                                <tr key={index}>

                                    <th scope="row">{index + 1}</th>
                                    <td >{item.name}</td>
                                    <td >{item.price}</td>
                                    <td >{item.category_id.category}</td>
                                    <td ><button className="btn btn-warning" onClick={handleUpdateShow}>update</button></td>
                                    <td ><button className="btn btn-danger" onClick={() => { deleteProduct(item._id) }}>X</button></td>
                                    <Modal show={showUpdate} onHide={handleUpdateClose} size="md" centered>
                                        <Modal.Header closeButton>
                                            <span className='fw-bold fs-5'>Update Product</span>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className='row'>
                                                <div className='col mb-3 note'>
                                                    <input type="text" placeholder="Enter product name"className='form-control mb-3' value={productName} onChange={(e) => setProductName(e.target.value)} required/>
                                                    <input type="number" placeholder="Enter product price" className='form-control mb-3' value={price} onChange={(e) => setPrice(e.target.value)} required/>
                                                    
                                                    <input type="text" placeholder="Enter product description" className='form-control mb-3' value={desc} onChange={(e) => setDesc(e.target.value)} required/>
                                                    
                                                    <input type="string" placeholder="Enter category ID" className='form-control mb-3' value={category} onChange={(e) => setCategory(e.target.value)} required/>
                                                    
                                                    <input type="number" className='form-control mb-3' placeholder="Enter available stocks" value={stock} onChange={(e) => setStock(e.target.value)} required/>
                                                    
                                                    <input type="string" className='form-control mb-3' placeholder="Enter image URL" value={images} onChange={(e) => setImages(e.target.value)} required/>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='row' >
                                                <div className='col-md-6 col-sm-12 mb-3' style={{ marginLeft: "320px" }}>
                                                    <button type="button" className="btn btn-secondary me-2 " onClick={handleUpdateClose}>Close</button>
                                                    <button type="button" className="btn btn-primary" onClick={()=>{updateProduct(item._id)}} >Edit</button>
                                                </div>
                                            </div>


                                        </Modal.Body>
                                    </Modal>
                                </tr>)
                        })
                        }
                    </tbody>
                </table>


            </div>

        </>
    )
}
export default Product;