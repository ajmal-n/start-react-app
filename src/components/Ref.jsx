import React, {useRef} from 'react'

function Ref() {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const submitRef = useRef(null)
  const usernameKeyDown = (e)=> {
    if(e.key === "Enter") passwordRef.current.focus()
  }
  const passwordKeyDown = (e)=> {
    if(e.key === "Enter") submitRef.current.focus()
  }
  const submitKeyDown = (e)=> {
    if(e.key === "Enter") alert("Form submitted")
  }
  return (
    <div>
      <p> use Ref Test</p>
        <input type="text" ref={usernameRef} onKeyDown={usernameKeyDown} placeholder='Enter username' />
        <input type="text" ref={passwordRef} onKeyDown={passwordKeyDown} placeholder='Enter password' />
        <button ref={submitRef} onKeyDown={submitKeyDown}  >Submit</button>
    </div>
  )
}

export default Ref