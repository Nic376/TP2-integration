const fetchCats = async (page) => {
    const limit = 4
    const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=ASC`
    const response =  await fetch(url, {
        method: "GET",
        headers: {
            "x-api-key": "1f56fd17-3602-421d-9fe4-dd2270a764a8"
        }
    })

    pagination(response)

 return response.json()
}

const pagination = async (response) => {
    const paginationCount = response.headers.get("pagination-count")
    const page = response.headers.get("pagination-page")
    const nbrPagesMax = paginationCount / Math.floor(limit)
    const shownPage = 0
    const maxShownPages = 10
    const pagination = []

    // - afficher maximum 10 page
    // - apres les 10 pages afficher ...
    // - si apres les 10 premieres pages afficher ... 
    // - boucler pour afficher le num de la page et le lien vers la page
    while(shownPage < maxShownPages) {
        pagination.push(() => {
           let msg = "<h4>" + page + "</h4>"
        })
    }

}

export { fetchCats, pagination }