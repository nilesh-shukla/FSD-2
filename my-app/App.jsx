import React from 'react'

const UseState = () => {
    function toggle(){
        console.log('Hello');
        
    }
  return (
    <div>
        <button onClick={toggle}>Click</button>
    </div>
  )
}

export default UseState;