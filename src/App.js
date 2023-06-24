import './style/Navbar.css';
import Navbar from './Navbar';
import Textbox from './Textbox';
import About from './About';
import Alert from './Alert';
import './style/App.css';
import React,{useState} from 'react';
import { Route, Routes}from 'react-router-dom';




function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState({
    type : null,
    message : null
  });

  const showAlert = (type, message) =>{
    setAlert({
      type : type,
      message : message
    })

    setTimeout (() =>{
      setAlert({
        type : null,
        message : null
      })
    },3000);
   
  }
  
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("success", "darkMode has been enabled")
     
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("success", "lightMode has been enabled")
    }
  }
  return (
  <>
  <div className = 'DivNavBar'>
  <Navbar title = 'TextConverter' modecolorfun = {toggleMode} modecolor = {mode} aboutText = 'About' moreInfo = 'Info'/>
 <Alert alertType= {alert.type}  alertMesssage= {alert.message}/>
 
  </div>
  <div>
   
  
 

  <Routes>
        <Route path="/" element={<Textbox heading = 'Enter you text below' modecolor = {mode} showAlert = {showAlert} />} />
        <Route path="/about" element={<About  />} />
      </Routes>


  </div>

  </>
  );
}

export default App;
