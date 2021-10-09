import { useState } from 'react'
import './style/main.css'
function App() {
  
  const [infor, setInfor] = useState({
    name: 'Vu Duy Nhien',
    age: 18, 
    address: 'Nam Dinh, Viet Nam'
  })

  const handleUpdate = () => {
    setInfor({
      ...infor,
      bio: 'yeu mau hong'
    })
  }

  // const [counter, setCounter] = useState(0)
  // const handleIncrease = () => {
  //   setCounter(counter + 1);
  // }
  return (
    <div className="App">
      {/* <h1 style={{ padding: 20 }}> { counter }</h1> */}
      <h1> { JSON.stringify(infor)} </h1>
      <button onClick={ handleUpdate }> update ! </button>
    </div>
  );
}

export default App;
