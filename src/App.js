import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Views/Blog';
import ListadoPeliculas from './Views/ListadoPeliculas';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/blog' element={<Blog/>}/>
      <Route path='/' element={<ListadoPeliculas/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
