import React from 'react'
import samplejson from '../sample.json';
console.log(samplejson.id)
function Design() {
    const red = (e) => {
        const data = samplejson.filter((v, i) => v.group === "Mumbai")
        alert(JSON.stringify(data))

        //    alert( JSON.stringify(samplejson.id))


    }

    const yellow = (e) => {
        const data = samplejson.filter((v, i) => v.group === "Delhi")
        alert(JSON.stringify(data))

        //    alert( JSON.stringify(samplejson.id))


    }

    const blue = (e) => {
        const data = samplejson.filter((v, i) => v.group === "Kolkata")
        alert(JSON.stringify(data))
        // alert(<h1>{(JSON.stringify(data.id))}</h1>)
        // return <form>
        //     <input type="text" name="" id="" />
        // </form>
        //    alert( JSON.stringify(samplejson.id))


    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 mred">
                    Mumbai

                </div>
                <div className="col-3 dyellow">
                    Delhi
                </div>
                <div className="col-4 kblue">
                    Kolkata
                </div>
            </div>
            <br /><br /><br />
            <div className="row">



                <><div className="col-4">
                    <div className="row">
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button className="col mred" onClick={red}>1</button>
                            <button className="col mred" onClick={red}>2</button>
                            <button className="col mred" onClick={red}>3</button>
                        </div>
                    </div>
                </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button className="col dyellow" onClick={yellow}>4</button>
                                <button className="col dyellow" onClick={yellow}>5</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button className="col kblue" onClick={blue}>6</button>
                                <button className="col kblue" onClick={blue}>7</button>
                                <button className="col kblue" onClick={blue}>8</button>
                            </div>
                        </div>
                    </div>
                </>

            </div>
        </div>
    )
}

export default Design