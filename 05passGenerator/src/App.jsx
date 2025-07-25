import { useState, useCallback } from "react";


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass = str.charAt(char)
    }

    setPassword(pass)


  },
    [length, numAllowed, charAllowed, setPassword])

  return (

    // <h1 className="text-4xl text-center text-white">Password Generator</h1 >

    <div className=" text-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700 my-8">

      <h1 className="text-white text-center ">Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>



        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 rounded-lg 
    "
          placeholder="Password"
          readOnly
        ></input>

        <button
          className="outline-none bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-800 shrink-0"
        >copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            name=""
            id=""
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => { setLength(e.target.value) }}

          />
          <label>Length:{length} </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />

        </div>
        <label htmlFor="numberInput">Numbers</label>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>

  )
}

export default App
