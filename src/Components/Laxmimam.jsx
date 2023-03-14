import React, { useState } from 'react'

function Laxmimam() {
    const [name,setName]=useState('')
  return (
    <div className='App'>
        <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/><br/>
        <button type="submit" className='btn btn-primary'>Submit</button>
        <br/><br/>
        {name.charAt(0).toUpperCase()+name.slice(1)}
    </div>
  )
}

export default Laxmimam