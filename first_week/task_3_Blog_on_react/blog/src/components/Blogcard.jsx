
import React from "react"
function Blogcard({title,text}){
    return(
        <>
        <div className="box">
            <h1>
                {title}
            </h1>
            <p>{text}</p>
            <button>Open</button>
        </div>
        </>
    )
}
export default Blogcard