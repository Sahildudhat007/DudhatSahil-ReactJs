import { useState } from 'react';

const TextConverter = () => {

  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const toUpperCase = () => {
    setConvertedText(text.toUpperCase());
  }

  const toLowerCase = () => {
    setConvertedText(text.toLowerCase());
  }

  const reverseText = () => {
    setConvertedText(text.split("").reverse().join(""));
  }

  const clearText = () => {
    setText("");
    setConvertedText("");
  }

  const inputChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className='container mx-auto px-10 w-[680px]'>
      <h1 className='text-lg text-center my-3'>Text Converter</h1>
      <textarea
        onChange={inputChange}
        value={text}
        placeholder='Enter Your text...'
        className='border border-black text-lg p-2 w-[600px] h-[100px] outline-none' />

      <div className='my-5 flex justify-evenly'>
        <button
          onClick={toUpperCase}
          className='text-white bg-blue-500 hover:bg-blue-600 p-2 w-[100px] rounded-full'>Uppercase</button>
        <button
          onClick={toLowerCase}
          className='text-white bg-blue-500 hover:bg-blue-600 p-2 w-[100px] rounded-full'>Lowercase</button>
        <button
          onClick={reverseText}
          className='text-white bg-blue-500 hover:bg-blue-600 p-2 w-[100px] rounded-full'>Reverse</button>
        <button
          onClick={clearText}
          className='text-white bg-blue-500 hover:bg-blue-600 p-2 w-[100px] rounded-full'>Clear</button>
      </div>

      <h1 className='text-lg text-center my-3'>Converted Text</h1>
      <textarea
        placeholder='Converted Text...'
        value={convertedText}
        className='border border-black text-lg p-2 w-[600px] h-[100px] outline-none' />
    </div>

  );
};

export default TextConverter;