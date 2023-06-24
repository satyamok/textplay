import React, { useState } from 'react'

const TextForm = () => {


    const [text, setText] = useState('')

    const handleOnChange = (e) => {
        setText(e.target.value)
        console.log('value change');
    }

    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const cleart = () => {
        let newText = "";
        setText(newText)
    }


    return (
        <>
            <div>Text changer</div>



            <textarea className='my-20 rounded border-2 p-2' value={text} onChange={handleOnChange} id="w3review" name="w3review" rows="8" cols="150">
                At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
            </textarea>

            <div className='flex mx-48'>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={upperCase}>Text to Upper Case</button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mx-2" onClick={lowerCase}>Text to Lower Case</button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mx-2" onClick={cleart}>Clear Text</button>

            </div>

            <div className="container flex flex-start mx-48 my-4">
                <p>Your text summary _  </p>
                <p>  {text.split(" ").length}  words and {text.length} _characters _</p>
                <p className='bg-green-500 text-white text-clip rounded-md px-1 mx-1 '   > {0.008 * text.split(" ").length } minits Article reading time</p>
                
            </div>
        </>
    )
}

export default TextForm