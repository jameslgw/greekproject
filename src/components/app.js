import React, { useState } from 'react'
import ToggleText from './toggleText'
import Button from './button/button'
import Pelopidas from './copy/Pelopidas'
import Epaminondas from './copy/Epaminondas'

// const App = () => {

//   const myItem = 'myItem'

//   return (
//     <div>
//       <ToggleText />
//       <Button reveal='One' /> <Button reveal='Five' />
//     </div>
//   )
// }


const App = () => {
  const [show, setShow] = React.useState(true)

  // const handleClick = () => {
  //   setShow = () => {
  //     (true);
  //   }
  // }


  return (
    <div className="parent-div">
      <div className="row"><h1>Βοιωτία</h1><h1>Boiotia</h1></div>
      <div className="row">
        <button onClick={() => setShow(true)}>Epaminondas</button>
        <button onClick={() => setShow(false)}>Pelopidas</button>
        {
          show ? < Epaminondas /> :
            <Pelopidas />

        }
        {/* <button onClick={() => setShow(!show)}>Toggle</button> */}
      </div>
    </div>
  )
}


export default App