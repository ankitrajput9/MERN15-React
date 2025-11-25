import React, { useContext, useState } from 'react';
import { Mystore } from './context/Context';

const App = () => {
  let { setNum } = useContext(Mystore)

  const [inputVal, setInputVal] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setNum(inputVal)
    setInputVal('')
  }
  return (
    <div className='p-5'>
      <form className='flex gap-5' onSubmit={handleSubmit}>
        <input
          className='border px-3 rounded outline-none'
          value={inputVal}
          onChange={(e) => { setInputVal(e.target.value) }} type="text" placeholder='Type here...' />
        <input className='border rounded py-2 px-4 bg-red-200  font-semibold active:scale-95' type="submit" value="submit" />

      </form>

    </div>
  );
}

export default App;
