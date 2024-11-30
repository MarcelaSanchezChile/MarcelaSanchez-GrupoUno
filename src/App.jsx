import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Galletadechips from "./components/Galletadechips/Galletadechips.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Mejoresproductos from "./components/MejoresProductos/Mejoresproductos.jsx";
import Category from "./components/Category/Category.jsx";
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx";


function App() {
    return (
        <>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/galletaclasica' element={<Galletadechips/>}/>
                    <Route path='/category/:categoryId' element={<Category />} />
                    <Route path='/products/:productId' element={<ItemDetail />} />
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/mejoresproductos' element={<Mejoresproductos/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}


export default App;
