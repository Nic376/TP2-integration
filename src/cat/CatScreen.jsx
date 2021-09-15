import React, { useEffect, useState } from "react"
import { fetchCats } from "./Api/CatApi"
import CatImage from "./components/CatImage"
import CatPagination from "./components/CatPagination"


const CatScreen = () => {

    const [ cats, setCats ] = useState([])
    const [ page, setPage ] = useState(1)
    const [ paginationCount, setPaginationCount ] = useState(0)
    const [ pageCount, setPageCount ] = useState(0)
    // const [ goTo ] = useState(2)

    // const pagination = PaginationControlled()

    useEffect(() => {
        const updateCatsValue = async () => {
            const catsAndPagination = fetchCats(page)
            setCats((await catsAndPagination).cats)
            setPaginationCount((await catsAndPagination).paginationCount)
            setPageCount((await catsAndPagination).pageCount)
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

    // const handleChange = (event, value) => {
    //     setPage(value)
    //     console.log("value : ", value)
    // }

    const paginate = (pagenumber) => setPage(pagenumber)

    return (
        <>
            <h1>Cat Screen</h1>

            <div className="container row">
                {cats.map((cat) => (
                    <CatImage url={cat.url} id={cat.id} /> 
                ))}
            </div>

            <button onClick={goToPreviousPage} className="btn btn-primary"> Page précédente </button>
            <CatPagination currentPage={page} paginationCount={paginationCount} pageCount={pageCount} paginate={paginate} />
            <button onClick={goToNextPage} className="btn btn-primary"> Prochaine page </button>
        </>
    )
}

export default CatScreen