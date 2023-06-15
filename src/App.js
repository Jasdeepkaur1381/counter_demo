import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const App = () => {

  let [num, setnum] = useState(0);

  const Increm = (e) => {
    console.log(e.target);
    setnum(num + 1);
    // setnum = (e) => {
    //   return Number(e.target.value) + 1;
    // };
  }
  const Decrem = (e) => {
    console.log(e.target);
    if (e.target.value === "0") {
      alert("sorry zero limit reached");
    }
    else {
      setnum(num - 1);
    }

  };
  return (
    <>
      <div className='outerDiv'>
        <div className='innerDiv'>
          <h1 className='heading'>
            {num}
          </h1>
          <div className='btnDiv'>
            <button className='btn' value={num} onClick={Increm}>Increm</button>
            <button className='btn' value={num} onClick={Decrem}>Decrem</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
