import React, { useEffect, useRef, useState } from 'react'

function Sujatamamtask() {
    const inputRef=useRef();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const enterValue=inputRef.current.value;
        // const data={
        //     name:enterValue,
         
        // };
        console.log(enterValue)
        // const data={
        //     name:enterValue,
        //     // email:enterValue
        // };
    //    console.log(data)
        // console.log(data.name,data.email)
        // alert(enterValue)
        // alert(JSON.stringify(data))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text"  ref={inputRef}/>
            {/* <label>Email</label>
            <input type="email"  ref={inputRef}/> */}
            <br/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Sujatamamtask