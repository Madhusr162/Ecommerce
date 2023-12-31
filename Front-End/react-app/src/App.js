import { Route, Routes , BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import AllProducts from './Pages/AllProducts';
import WomenAll from './Pages/WomenAll';
import WomenDresses from './Pages/WomenDresses';
import WomenPants from './Pages/WomenPants';
import WomenSkirts from './Pages/WomenSkirts';
import MenAll from './Pages/MenAll';
import MenHoodies from './Pages/MenHoodies';
import MenPants from './Pages/MenPants';
import MenShirts from './Pages/MenShirts';
import ContactUs from './Pages/ContactUs';
import KidsAll from './Pages/KidsAll';
import SpecificProduct from './Pages/SpecificProduct';
import Register from './Pages/Register';
import User from './Pages/admin/User';
import Product from './Pages/admin/Product';
import AddProduct from './Pages/admin/AddProduct';
import Category from './Pages/admin/Category';
import AddCategory from './Pages/admin/AddCategory';
import Orders from './Pages/admin/Orders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route path="/kidsall" element={<KidsAll></KidsAll>}></Route>
          <Route path="/allproducts" element={<AllProducts></AllProducts>}></Route>
          <Route path="/womenall" element={<WomenAll></WomenAll>}></Route>
          <Route path="/womendresses" element={<WomenDresses></WomenDresses>}></Route>
          <Route path="/womenpants" element={<WomenPants></WomenPants>}></Route>
          <Route path="/womenskirts" element={<WomenSkirts></WomenSkirts>}></Route>
          <Route path="/menall" element={<MenAll></MenAll>}></Route>
          <Route path="/menhoodies" element={<MenHoodies></MenHoodies>}></Route>
          <Route path="/menpants" element={<MenPants></MenPants>}></Route>
          <Route path="/menshirts" element={<MenShirts></MenShirts>}></Route>
          <Route path="/SpecificProduct" element={<SpecificProduct></SpecificProduct>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/user" element={<User></User>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="/category" element={<Category></Category>}></Route>
          <Route path="/addcategory" element={<AddCategory></AddCategory>}></Route>
          <Route path="/orders" element={<Orders></Orders>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
