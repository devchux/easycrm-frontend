import React from 'react'

function RenderProp({children}) {
    console.log(children)
    return (
        <div className="container mt-3 mt-lg-5">
            {children}
        </div>
    )
}

export default RenderProp
