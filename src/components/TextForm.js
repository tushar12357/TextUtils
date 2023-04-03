import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Upper button clicked",text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = () => {
        // console.log("Upper button clicked",text)
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }
    const handleClear = () => {
        let newText = ''
        setText(newText)
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox")
        text.select()
        // text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    //declare a new state variable
    const [text, setText] = useState('')
    // console.log(useState('Enter Text Here'))
    // setText('tushar')
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder='Enter Text Here'></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-success mx-2" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}