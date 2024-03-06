import { Route, Routes } from 'react-router-dom'; 
import './App.scss'; 
import Main from './pages/Main/Main'; 
import Second from './pages/Second/Second'; 
import Third from './pages/Third/Third'; 
import Riel from './pages/Rieltoriy/Riel'; 
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useState } from 'react';
 
function App() { 
  let [selectedLanguage, setSelectLanguage] = useState(0);
  console.log(setSelectLanguage);
  return ( 
    <div className="App"> 
    <Header
    selectedLanguage={selectedLanguage}
    setSelectLanguage={setSelectLanguage}
    />
       <Routes> 
        <Route path='/' element={<Main lang={selectedLanguage} />}/> 
        <Route path='/second' element={<Second lang={selectedLanguage} />}/> 
        <Route path='/third' element={<Third lang={selectedLanguage} />}/> 
        <Route path='/rieltoriy' element={<Riel lang={selectedLanguage} />}/> 
       </Routes> 
       <Footer/>
    </div> 
  ); 
} 
 
export default App;