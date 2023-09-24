import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Orders = () => {
    /*Declared variables to the topsales and user details*/
    const [order, setOrder] = useState([]);

    /*Function to fetch data using axios*/
    const getOrders = async () => {
        try {
            const response = await axios.get('/admin/allorders');
            console.log(response.data);
            setOrder(response.data.orders);

        } catch (err) {

            console.error(err.message);
        }
    }
    useEffect(() => {
        getOrders();
    }, [])
    return (
        <>
            <Navbar />
            {/* Creating table format to display the users */}
            <div className="container-fluid">
                <h3 style={{ textAlign: "center" }} className="mb-5 mt-5">ORDERS LIST</h3>
                <table className="table table-warning table-striped-columns justify-content-center">
                    <thead>
                        <tr >
                            <th scope="col">#</th>
                            <th scope="col">Order ID</th>
                            <th scope="col">User</th>
                            <th scope="col">Products</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Order Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* Using map function to fetch array of data from backend */}
                        {order.map((item, index) => {
                            return (
                                <tr key={index}>

                                    <th scope="row">{index + 1}</th>
                                    <td >{item._id}</td>
                                    <td >{item.user}</td>
                                    <td >{item.products}</td>
                                    <td >{item.amount}</td>
                                    <td >{item.orderStatus}</td>
                                    
                                    </tr>)
                        })
                        }
                    </tbody>
                </table>


            </div>

        </>
    )
}
export default Orders;