import React from "react"

const CatImage = ({ url, id }) => {
    return (
        <div className="col-3 my-5">
            <div className="card p-3">
                    <div className="card-image">
                        <img src={url} key={id} alt="" className="card-img-top image" />
                    </div>
                    <div className="card-body">
                        <a className="card-text" href={url}>{url}</a>
                    </div>
            </div>
        </div>
    )
}

export default CatImage