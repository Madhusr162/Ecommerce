import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Modal from 'react-bootstrap/Modal';

const Category = () => {
    /*Declared variables to the topsales and user details*/
    const [category, setCategory] = useState([]);
    const [desc, setDesc] = useState("");
    const [name, setName] = useState("");
    
    const [showUpdate, setShowUpdate] = useState(false);


    const handleUpdateClose = () => setShowUpdate(false);
    const handleUpdateShow = () => setShowUpdate(true);

    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }
    /*Function to fetch data using axios*/
    const getCategories = async () => {
        try {
            const response = await axios.get('/category');
            console.log(response.data);
            setCategory(response.data.Category);

        } catch (err) {

            console.error(err.message);
        }
    }
    const deleteCategory = async (id) => {
        try {
            const resp = await axios.delete(`/admin/${id}/deletecategory`, CONFIG_OBJ);
            console.log(resp.data);
            getCategories();
        } catch (error) {
            console.log(error)
        }
    }
    const updateCategory = async (id) => {
        try {
            const resp = await axios.put(`/admin/updatecategory/${id}`, CONFIG_OBJ);
            console.log(resp.data);
            getCategories();
        } catch (error) {
            if (error.response) {
                console.log(error.response.data); // Response data from the server
                console.log(error.response.status); // HTTP status code
                console.log(error.response.headers); // Response headers
            } else {
                console.log(error.message); // Error message if no response was received
            }
        }
    }

    /*useEffect to check whether the user logged in or not to display the top sales page*/
    useEffect(() => {
        getCategories();
    }, [])
    return (
        <>
            <Navbar />
            {/* Creating table format to display the users */}
            <div className="container-fluid">
                <h3 style={{ textAlign: "center" }} className="mb-5 mt-5">CATEGORY LIST</h3>
                <table className="table table-warning table-striped-columns justify-content-center">
                    <thead>
                        <tr >
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Update Category</th>
                            <th scope="col">Delete Category</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* Using map function to fetch array of data from backend */}
                        {category.map((item, index) => {
                            return (
                                <tr key={index}>

                                    <th scope="row">{index + 1}</th>
                                    <td >{item.name}</td>
                                    <td >{item.desc}</td>
                                    <td ><button className="btn btn-warning" onClick={handleUpdateShow}>update</button></td>
                                    <td ><button className="btn btn-danger" onClick={() => { deleteCategory(item._id) }}>X</button></td>
                                    <Modal show={showUpdate} onHide={handleUpdateClose} size="md" centered>
                                        <Modal.Header closeButton>
                                            <span className='fw-bold fs-5'>Update Category</span>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className='row'>
                                                <div className='col mb-3 note'>
                                                    <input type="text" placeholder="Enter category name"className='form-control mb-3' value={name} onChange={(e) => setName(e.target.value)} required/>
                                                    <input type="text" placeholder="Enter category description" className='form-control mb-3' value={desc} onChange={(e) => setDesc(e.target.value)} required/>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='row' >
                                                <div className='col-md-6 col-sm-12 mb-3' style={{ marginLeft: "320px" }}>
                                                    <button type="button" className="btn btn-secondary me-2 " onClick={handleUpdateClose}>Close</button>
                                                    <button type="button" className="btn btn-primary" onClick={()=>{updateCategory(item._id)}} >Edit</button>
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
export default Category;