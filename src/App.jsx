import React, { Fragment } from 'react'
import FRParent from './components/FRParent'
import Ref from './components/Ref'

function App() {
  return (
    <div styles={{display: "flex", justifyContent: "center"}} >
        <p> App created by ajmal</p>
        <br />
        <Fragment />
        <Ref />
    </div>

  )
}

export default App