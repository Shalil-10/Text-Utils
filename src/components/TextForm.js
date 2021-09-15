import React, { useState } from 'react'




export default function TextForm({ heading, mode, showAlert }) {
    const [text, setText] = useState("")


    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        showAlert("Converted to lowercase!", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClearText = () => {
        setText("")
        showAlert("Text Cleared!", "success")
    }

    const getWordCount = (v) => {
        let word = v.match(/\S+/g);
        return word ? word.length : 0;
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        showAlert("Copied to Clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        showAlert("Extra spaces removed!", "success")
    }
    // const extractEmails = (t) => {
    //     return t.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);

    // }

    return (
        <>
            <div className="container" style={{color: mode==='dark'?'white':'#042743'}}>
                <h1>{heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Start typing here" value={text} onChange={handleOnChange} style={{backgroundColor:mode==='dark'?'#13466e':'white', color:mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>

                {/* <button className="btn btn-primary " onClick={extractEmails(text)}>Extract email</button> */}
            </div>

            <div className="container my-3" style={{color: mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{getWordCount(text)} words and {text.length} characters</p>
            </div>

            {/* <div>
            <h2>Extracted emails:</h2>
            <p>{extractEmails(text)}</p>
            </div> */}
        </>
    )
}
