import React from "react"

const CatImage = ({ url, id, loading }) => {
    // Affiche le loading tant que l'appel n'est pas fini
    if(loading) {
        return <h3>Loading...</h3>
    }
    
    return (
        <div className="col-3 my-5">
            <div className="card p-3 h-100">
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