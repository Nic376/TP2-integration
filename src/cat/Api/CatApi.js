const fetchCats = async (page) => {
    // Nombre de cartes qui seront afficher dans la page
    const limit = 12
    let actualPage = page -1
    const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${actualPage}&order=ASC`
    const response =  await fetch(url, {
        method: "GET",
        // La clé est requise dans le header par l'API
        headers: {
            "x-api-key": "1f56fd17-3602-421d-9fe4-dd2270a764a8"
        }
    })

    // Convertie la réponse de l'API
    const data = await response.json()

    // Boucle au travers des données pour en extraire l'id et l'url seulement
    const cats = data.map((cat) => {
        return {
            id: cat.id,
            url: cat.url,
        }
    })

    const paginationCount = response.headers.get("pagination-count")
    // Calcul qui détermine le nombre maximale des pages qui pourront être afficher dans la pagination
    const pageCount = Math.ceil(paginationCount / limit)

    return {
        cats,
        paginationCount: paginationCount || 0,
        pageCount: pageCount,
    }
}

export { fetchCats }