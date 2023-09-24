import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify'
import Navbar from "./Navbar";

function AddProduct() {
    /*Declared variables to add the product, quantity, amount and user details*/
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");
    const [images, setImages] = useState("");

    /*Declared variables to add loading and navigate feature*/
    const [loading, setLoading] = useState(false);

    /*Declared variable to add the protected route*/
    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }

    /*Function to be called when submit button is clicked and passing the protected route*/
    const addProduct = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = {
            name: productName,
            price: price,
            description: desc,
            category_id: category,
            stock: stock,
            images: images
        }
        axios.post('/admin/addproduct', requestData, CONFIG_OBJ)
            .then((result) => {

                /*Checking conditions whether sales added successfully or not*/
                if (result.status === 201) {
                    setLoading(false);
                    toast.success("Product added")
                }
                /*Setting the fields empty after adding the sales entry*/
                setProductName('');
                setPrice('');
                setDesc('');
                setCategory('');
                setStock('');
                setImages('');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                toast.warning(error.response.data.error)
            })

    }

    return (
        /*Add sales form*/
        <div className="container-fluid">
            <Navbar />
            <h3 style={{ textAlign: "center" }} className="mb-5 mt-5">Add Product</h3>
            <div className='d-flex justify-content-center'>
                <form onSubmit={(e) => addProduct(e)}>
                    <div className='' style={{width: "500px"}}>
                        { /*Loading feature*/}
                        {loading ? <div className="col-md-12 mt-3 text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> : ''}
                        <div className="mb-3 text-start">
                            <label for="exampleInputPname" className="form-label">Product Name:</label>
                            <input required type="text" value={productName} onChange={(ev) => setProductName(ev.target.value)} className="form-control" id="exampleInputPname" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 text-start">
                            <label for="exampleInputQuantity" className="form-label">Price:</label>
                            <input required type="number" value={price} onChange={(ev) => setPrice(ev.target.value)} className="form-control" id="exampleInputQuantity" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 text-start">
                            <label for="exampleInputAmount" className="form-label">Description:</label>
                            <input required type="text" value={desc} onChange={(ev) => setDesc(ev.target.value)} className="form-control" id="exampleInputAmount" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 text-start">
                            <label for="exampleInputAmount" className="form-label">Enter category ID:</label>
                            <input required type="string" value={category} onChange={(ev) => setCategory(ev.target.value)} className="form-control" id="exampleInputAmount" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 text-start">
                            <label for="exampleInputAmount" className="form-label">No of Stock:</label>
                            <input required type="number" value={stock} onChange={(ev) => setStock(ev.target.value)} className="form-control" id="exampleInputAmount" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 text-start">
                            <label for="exampleInputAmount" className="form-label">Enter image URL:</label>
                            <input required type="string" value={images} onChange={(ev) => setImages(ev.target.value)} className="form-control" id="exampleInputAmount" aria-describedby="emailHelp" />
                        </div>
                        <div className='d-grid mb-5'>
                            <button type="submit" className="btn btn-warning" >Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default AddProduct;