import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { toast } from 'react-toastify';

const User = () => {
    /*Declared variables to the topsales and user details*/
    const [user, setUser] = useState([]);

    /*Declared variable to add the protected route*/
    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }
     /*Function to fetch data using axios*/
    const getUsers = async () => {
        try {
            const response = await axios.get('/admin/alluser', CONFIG_OBJ);
            console.log(response.data);
            setUser(response.data.Users);

        } catch (err) {

            console.error(err.message);
        }
    }
    const deleteUser = async (id) => {
        try {
            const resp = await axios.delete(`/admin/${id}/delete`, CONFIG_OBJ);
            console.log(resp.data);
            getUsers();
            if(resp.status===200){
                toast.success("User deleted")
            }
        } catch (error) {
            console.log(error)
            toast.warning(error.response.data.error)
        }
    }
    /*useEffect to check whether the user logged in or not to display the top sales page*/
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <>
        <Navbar/>
            {/* Creating table format to display the users */}
            <div className="container-fluid">
                <h3 style={{ textAlign: "center" }} className="mb-5 mt-5">USER LIST</h3>
                <table className="table table-warning table-striped-columns justify-content-center">
                    <thead>
                        <tr >
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Delete User</th>
                        </tr>
                    </thead>
                        <tbody>
                        
                            {/* Using map function to fetch array of data from backend */}
                        {user.map((item, index) => {
                            return (
                            <tr key={index}> 
                                       
                                <th scope="row">{index+1}</th>
                                <td >{item.name}</td>
                                <td >{item.email}</td>
                                <td >{item.address}</td>
                                <td >{item.phone}</td>
                                <td ><button className="btn btn-danger" onClick={() => { deleteUser(item._id) }}>X</button></td>
                        
                            </tr>)
                        })
                    }
                        </tbody>
                </table>
            </div>

        </>
    )
}
export default User;