import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ManageProducts from './pages/admin/ManageProducts'
import ManageCategories from './pages/admin/ManageCategories'
import EditProduct from './pages/admin/EditProduct'
import AddProduct from './pages/admin/AddProduct'
import Cart from './pages/Cart'
import HomePage from './pages/HomePage'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <>
      <Link to="/">
      <button>Avalehele</button>
      </Link>

      <Link to="/cart">
      <button>Ostukorv</button>
      </Link>

      <Link to="add-product">
      <button>Lisa toode</button>
      </Link>

      <Link to="manage-categories">
      <button>Kategooriad</button>
      </Link>
      
      <Link to="manage-products">
      <button>Halda tooteid</button>
      </Link>
      
      <Link to="/signup">
      <button>Registreeru</button>
      </Link>

      <Link to="/login">
      <button>Logi sisse</button>
      </Link>

      <Link to="/profile">
      <button>Profiil</button>
      </Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/edit-product/:id" element={<EditProduct />} />
        <Route path="/admin/manage-categories" element={<ManageCategories />} />
        <Route path="/admin/manage-products" element={<ManageProducts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
