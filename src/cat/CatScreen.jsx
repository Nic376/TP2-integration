import React, { useEffect, useState } from "react"
import { fetchCats, pagination } from "./Api/CatApi"
import CatImage from "./components/CatImage"

const CatScreen = () => {

    const [cats, setCats] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        const updateCatsValue = async () => {
            setCats(await fetchCats(page))
        }

        updateCatsValue()
    }, [page])

    const goToNextPage = () => {
        setPage(page + 1)
    }

    const goToPreviousPage = () => {
        if(page > 0) {
            setPage(page - 1)
        }
        }

        console.log(cats)

    return (
        <>
            <h1>Cat Screen</h1>

            {cats.map((cat) => (
                <>
                    <h6>image ici</h6>
                    <CatImage cat={cat} /> 
                </>
            ))}

            <button onClick={goToPreviousPage}> Page précédente </button>
            <button onClick={goToNextPage}> Prochaine page </button>
        </>
    )
}

export default CatScreen