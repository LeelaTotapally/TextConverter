import './style/Textbox.css';
import React,{useState} from 'react';

function Textbox(props) {
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event) =>{
    console.log("changed");
    console.log(event.target.value)

    setText(event.target.value)
    console.log(text)
  }
  const handledownClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = () =>{
    setText('');
  }

 

  const [text, setText] = useState('')
    return (
      <>
        <div className="mb-3">
        <div className = "container">
             <h5 className = {`text-${props.modecolor === 'light' ? 'dark':'light'}`} >{props.heading}</h5>
        <textarea className={`form-control text-${props.modecolor === 'dark' ? 'light':'dark'} bg-${props.modecolor === 'dark' ? 'dark':'light'}`}  onChange = {handleOnChange}  value = {text} id="exampleFormControlTextarea1" rows="6" ></textarea>
        <button type="button" className="btn btn-primary mx-3"onClick = {handleUpClick}>Convert to upper case</button>
        <button type="button" className="btn btn-primary mx-3"onClick = {handledownClick}>Convert to lower case</button>
        <button type="button" className="btn btn-primary mx-3"onClick = {handleClearClick}>Clear</button>
        
        </div>
      </div>
      <h3 className={`text-${props.modecolor === 'light' ? 'dark':'light'}`}>Preview</h3>
      <p className={`text-${props.modecolor === 'light' ? 'dark':'light'}`}> {text}</p>
      </>
    );
  }
  
  export default Textbox;
  