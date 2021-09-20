import React, { useState } from 'react'
import Pelopidas from './copy/Pelopidas'
import Epaminondas from './copy/Epaminondas'
import Intro from './copy/Intro'
import Image from './images/image'

const App = () => {
  const [show, setShow] = React.useState(true)

  return (
    <div className="parent-div">
      <div className="row1"><h1>Ἐπαμεινώνδας &nbsp; και &nbsp; Πελοπίδας</h1></div>
      <div className="row2"><h3>Epaminondas &nbsp; and &nbsp; Pelopidas</h3></div>
      <div className="row3">
        < Intro />
      </div>
      <div className="row4">
        < Image />
        </div>
      <div className="row5">
        <button onClick={() => setShow(true)}>Epaminondas</button>
        <button onClick={() => setShow(false)}>Pelopidas</button>
      </div>
      <div className="row6"> 
        {
          show ? < Epaminondas /> : <Pelopidas />
        }
      </div>
      </div>
  )
}

export default App