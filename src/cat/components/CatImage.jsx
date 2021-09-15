import React from "react"

const CatImage = ({ url, id }) => {
    return (
        <div className="card col-3 m-1">
            <img src={url} key={id} alt="" className="card-img-top" />
            <div className="card-body">
                <a className="card-text" href={url}>{url}</a>
            </div>
        </div>
    )
}

export default CatImage