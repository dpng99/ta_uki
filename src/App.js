
import './App.css';
import HomePage from './Component/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ImageData } from './Component/data';
function App() {
  return (
    <HomePage imaging={ImageData}/>
  );
}

export default App;
