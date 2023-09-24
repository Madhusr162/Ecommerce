import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify'
import Navbar from "./Navbar";

function AddCategory() {
    /*Declared variables to add the product, quantity, amount and user details*/
    const [categoryName, setCategoryName] = useState("");
    const [desc, setDesc] = useState("");

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
    const addCategory = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = {
            name: categoryName,
            desc: desc
        }
        axios.post('/admin/addcategory', requestData, CONFIG_OBJ)
            .then((result) => {

                /*Checking conditions whether category added successfully or not*/
                if (result.status === 201) {
                    setLoading(false);
                    toast.success("Category added")
                }
                /*Setting the fields empty after adding the category entry*/
                setCategoryName('');
                setDesc('');
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
            <h3 style={{ textAlign: "center" }} className="mb-5 mt-5">Add Category</h3>
            <div className='d-flex justify-content-center'>
                <form onSubmit={(e) => addCategory(e)}>
                    <div className='' style={{width: "500px"}}>
                        { /*Loading feature*/}
                        {loading ? <div className="col-md-12 mt-3 text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> : ''}
                        <div className="mb-3 text-start">
                            <label for="exampleInputPname" className="form-label">Category Name:</label>
                            <input required type="text" value={categoryName} onChange={(ev) => setCategoryName(ev.target.value)} className="form-control" id="exampleInputPname" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 text-start">
                            <label for="exampleInputAmount" className="form-label">Description:</label>
                            <input required type="text" value={desc} onChange={(ev) => setDesc(ev.target.value)} className="form-control" id="exampleInputAmount" aria-describedby="emailHelp" />
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
export default AddCategory;