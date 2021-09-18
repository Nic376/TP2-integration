import React, { useEffect, useState } from "react"
import { fetchCats } from "./Api/CatApi"
import CatImage from "./components/CatImage"
import CatPagination from "./components/CatPagination"


const CatScreen = () => {
    // Mets en place et retourne les informations de l'API
    const [ cats, setCats ] = useState([])
    // Permet de déterminer la page courante
    const [ page, setPage ] = useState(1)
    // Permet de déterminer combien de page la pagination devra afficher
    const [ pageCount, setPageCount ] = useState(0)
    // Lorsque loading est a true loading.. s'affiche à la place des images
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        const updateCatsValue = async () => {
            setLoading(true)
            // Appel à l'API pour recevoir les informations
            const catsAndPagination = fetchCats(page)
            setCats((await catsAndPagination).cats)
            setPageCount((await catsAndPagination).pageCount)
            setLoading(false)
        }

        updateCatsValue()
        // updateCatsValue est appellé quand la dépendance page change
    }, [page])

    // Va être envoyer à CatPagination pour permettre de faire les liens dans la pagination
    const paginate = (pagenumber) => setPage(pagenumber)

    return (
        <>
            <div className="container row">
                {/* boucle sur les informations de l'API pour afficher les chats */}
                {cats.map((cat) => (
                    <CatImage url={cat.url} id={cat.id} loading={loading} />
                ))}
            </div>
            <CatPagination currentPage={page} pageCount={pageCount} paginate={paginate} />
        </>
    )
}

export default CatScreen