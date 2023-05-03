import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextBar from './components/TextForm.js';
import Alert from './components/Alert.js';
import About from './components/About.js';
import{
   BrowserRouter,
   Route,
   Routes,
} from "react-router-dom";


function App() {
   const [mode,setMode]=useState('light');
   const [alert,setAlert]=useState(null);

   const ShowAlert=(message,type)=>{
      setAlert({
         msg:message,
         type:type
       })
       setTimeout(() => {
         setAlert(null);
       }, 2500);
   }

   const toggleMode=()=>{
      if(mode==='light'){
         setMode('dark');
         document.body.style.backgroundColor='grey';
         ShowAlert("Dark Mode has been enabled","Success");
         document.title='Text Tool-dark';
      }
      else{
         setMode('light');
         document.body.style.backgroundColor='white';
         ShowAlert("Light Mode has been enabled","Success");
         document.title='Text Tool-light';
      }
   }
  return (
    <BrowserRouter>
 <Navbar title="Menuu"  mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className="container my-3">
 <Routes>
   <Route path="/about" element={<About mode={mode}/>}/>
      <Route path="/" element={<TextBar ShowAlert={ShowAlert} input="Ur Text"  mode={mode}/>}/>
 </Routes>
 </div>
 </BrowserRouter>
   );
}

export default App;
