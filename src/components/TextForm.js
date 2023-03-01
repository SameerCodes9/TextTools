import React,{useState} from 'react'

export default function TextForm(props) {
  const [myStyle,setMyStyle]=useState({
    color:'white',
    backgroundColor:'black'
    })
    const[btnText,setbtnText]=useState("Enable Dark Mode")
    const toggleStyle=()=>{
      if(myStyle.color==='white'){
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        })
        setbtnText("Enable Dark Mode")
      }
      else{
        setMyStyle({
          color:'white',
          backgroundColor:'black',
          border: '2px solid white'
      })
      setbtnText("Enable Light mode")
      }
    }
   
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase()
        setText(newText);
        props.ShowAlert("Converted to Upper Case","Success");
    }
    const handleLoClick=()=>{
      console.log("Uppercase was clicked");
      let newText=text.toLowerCase()
      setText(newText);
      props.ShowAlert("Converted to Lower Case","Success");
  }
  const handleClear=()=>{
    console.log("ClearText was clicked");
    let newText='';
    setText(newText);
    props.ShowAlert("You've cleared the text","Success");
}
const handleCaps=()=>{
  let newText=()=>{
    let finalstrArr=[];
    let strArr=text.split(" ");
    strArr.forEach(element =>{
      finalstrArr.push(element.charAt(0).toUpperCase()+element.slice(1))
    })
  finalstrArr=finalstrArr.join(" ")
  return finalstrArr;
  }
  setText(newText(text))
  props.ShowAlert("Each word is capitalized","Success");
}
const Speak=()=>{
  let msg=new SpeechSynthesisUtterance();
  msg.text=text;
  window.speechSynthesis.speak(msg);
  props.ShowAlert("You're listening to what you've typed","Success");
}
/* const handleCopy=()=>{
  var text=document.getElementById("myBox");
  text.Select();
  navigator.clipboard.writeText(text.value);
} */

  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }
const[text,setText]=useState('Enter text here');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <div>
 <div>
<div>
  <div className="input-group-prepend">
    <span className="input-group-text mx-2" style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>{props.input}</span>
  </div>
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} onChange={handleOnChange} id="myBox" rows="10" cols="70"></textarea>
</div>
<br/>
<button className="btn btn-primary mx-1" style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onClick={handleClear}>Clear Text</button>
<button className="btn btn-primary mx-1" style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onClick={handleCaps}>Caps</button>
<button type="submit" className="btn btn-primary mx-1" style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} onClick={Speak}>Hear Loud</button>
<button className="btn btn-primary mx-1" style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-5">
      <p><b>Your Text Summary</b></p>
      <p>"{text.split(" ").length} words and {text.length} characters"</p>
    </div>
    
    </div>
    </div>
   
    <div className="text-center">
    {/* <button type="button" onClick={toggleStyle} className="btn btn-dark">{btnText}</button> */}
    </div>
   </>
  )
}
