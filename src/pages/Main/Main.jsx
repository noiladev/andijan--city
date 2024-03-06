import React, { useState } from 'react'
import './Main.scss'
import Header from '../../components/Header/Header'; 
import { rielData } from '../../lib/Header/header';

// Feruza
function Main({lang}) {
  // let [selectedLanguage, setSelectLanguage] = useState(1);
  const data = rielData[lang];
  return (
    <div> 
      {/* <Header selectedLanguage={selectedLanguage} setSelectLanguage={setSelectLanguage}/>  */}
    </div>
  )
}

export default Main