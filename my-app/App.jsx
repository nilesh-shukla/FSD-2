import React, {useState} from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count + 1);
    }
    function toggle(){
        console.log('Hello');
        setCount(count + 1);
    }
  return (
    <div>
        <button onClick={toggle}>Click</button>
    </div>
  )
}

export default UseState;