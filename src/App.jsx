import { Route, Routes } from 'react-router-dom'; 
import './App.scss'; 
import Main from './pages/Main/Main'; 
import Second from './pages/Second/Second'; 
import Third from './pages/Third/Third'; 
import Riel from './pages/Rieltoriy/Riel'; 
import Footer from './components/Footer/Footer';
 
function App() { 
  return ( 
    <div className="App"> 
       <Routes> 
        <Route path='/' element={<Main/>}/> 
        <Route path='/second' element={<Second/>}/> 
        <Route path='/third' element={<Third/>}/> 
        <Route path='/rieltoriy' element={<Riel/>}/> 
       </Routes> 
      <Footer/>
    </div> 
  ); 
} 
 
export default App;