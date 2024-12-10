import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";

import Blog from "./components/Blog/Blog.jsx";
import Mejoresproductos from "./components/MejoresProductos/Mejoresproductos.jsx";
import Category from "./components/Category/Category.jsx";
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx";
import CartPage from "./components/Cart/Cart.jsx";
import Acercade from "./components/Acercade/Acercade.jsx";
import Contacto from "./components/Contacto/Contacto.jsx";
import Recetas from "./components/Recetas/Recetas.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/category/:categoryId' element={<Category />} />
                    <Route path='/products/:productId' element={<ItemDetail />} />
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/mejoresproductos' element={<Mejoresproductos/>}/>
                    <Route path='/acercade' element ={<Acercade/>}/>
                    <Route path='/contacto' element ={<Contacto/>}/>
                    <Route path='/carrito' element={<CartPage/>}/>
                    <Route path='/recetas' element={<Recetas/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}


export default App;
