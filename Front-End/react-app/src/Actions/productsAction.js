import axios from 'axios'
import { productsFail, productsRequest, productsSuccess } from '../Slices/productsSlice';


export const getProducts = async(dispatch)=>{
    try{
        dispatch(productsRequest())
        const {data}=await axios.get('/products');
        dispatch(productsSuccess(data))
    }catch(error){
        dispatch(productsFail(error.response.data.message))
    }
   
}