import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleClearClick = () => {
        const newText = '';
        setText(newText);
        props.showAlert("Text Cleared!","success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text,setText] = useState("");

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3 ">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} type="button" onClick={handleUpClick} className="btn btn-primary mx-1 my-1">Convert to Uppercase</button>
            <button disabled={text.length===0} type="button" onClick={handleLoClick} className="btn btn-primary mx-1 my-1">Convert to Lowercase</button>
            <button disabled={text.length===0} type="button" onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
            <button disabled={text.length===0} type="button" onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
            <button disabled={text.length===0} type="button" onClick={handleClearClick} className="btn btn-primary mx-1 my-1">Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Nothing to preview!"}</p>
        </div>
        </> 
    );
}
