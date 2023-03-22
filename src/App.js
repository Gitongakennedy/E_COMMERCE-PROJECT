import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/PageNotFound'
import Modal from './components/Modal'



function App() {
  return (
   <>
   <Navbar />
    <Modal />
   <Routes>
   <Route path='/' element={<ProductList />} />
   <Route path='/details' element={<Details />} />
   <Route path='/cart' element={<Cart />} />
  <Route path='*' element={<Default />} />
    </Routes>
   </>
  );
}

export default App;   
