import './App.css';
import HomePage from './Component/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ImageData } from './Component/data';
import ProductPage from './Component/ProductPage';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
function App() {
  return (
    <>
    <Container fluid>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<HomePage imaging={ImageData} />} />
     {Object.keys(ImageData).map((item, index) =>
     <Route key={index} path={ImageData[item].path} element={<ProductPage dataIsi={ImageData[item]}/>}/>
     )}
    </Routes>
    </BrowserRouter>
    </Container>
    </>
  );
}

export default App;
