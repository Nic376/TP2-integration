import React, { useEffect, useState } from "react"
import { fetchCats } from "./Api/CatApi"
import CatImage from "./components/CatImage"
import CatPagination from "./components/CatPagination"
import LoadingCat from "../image/tumblr_mvtmj8Giy41qz6ygbo1_500.gif"

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
    // Affiche le loading tant que l'appel n'est pas fini
    if(loading) {
        return (
            <>
                <div className="d-flex row justify-content-center align-items-center">
                        <p className="text-center">Loading ...</p>
                        <img src={LoadingCat} alt="chat qui tourne" className="w-25 mb-5" />
                </div>
                <CatPagination currentPage={page} pageCount={pageCount} paginate={paginate} />
            </>
        )
    }

    return (
        <>
            <div className="container row">
                {/* boucle sur les informations de l'API pour afficher les chats */}
                {cats.map((cat) => (
                    <CatImage url={cat.url} id={cat.id} />
                ))}
            </div>
            <CatPagination currentPage={page} pageCount={pageCount} paginate={paginate} />
        </>
    )
}

export default CatScreen