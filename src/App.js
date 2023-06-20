import './style/Navbar.css';
import Navbar from './Navbar';
import Textbox from './Textbox';
import Alert from './Alert';
import './style/App.css';
import React,{useState} from 'react';


function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const[alertState, setAlertState] = useState(null);
  


  
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      setAlert("Dark mode has been enabled")
      setAlertState("success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setAlert("light mode has been enabled")
      setAlertState("success")
    }
  }
  return (
  <>
  <div className = 'DivNavBar'>
  <Navbar title = 'TextConverter' modecolorfun = {toggleMode} modecolor = {mode} aboutText = 'About' moreInfo = 'Info'/>
  <Alert alert = {alert} alertState = {alertState}/>
  </div>
  <div>
  <Textbox heading = 'Enter you text below' modecolor = {mode} />
  
  </div>

  </>
  );
}

export default App;
