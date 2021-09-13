import React from "react"

const CatImage = ({ cat }) => {
    return (
        <img src={cat.url}  alt="catApi"/>
    )
}

export default CatImage