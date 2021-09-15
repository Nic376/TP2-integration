const fetchCats = async (page) => {
    const limit = 10
    const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=ASC`
    const response =  await fetch(url, {
        method: "GET",
        headers: {
            "x-api-key": "1f56fd17-3602-421d-9fe4-dd2270a764a8"
        }
    })

    const data = await response.json()

    console.log(data)

    const cats = data.map((cat) => {
        return {
            id: cat.id,
            url: cat.url,
        }
    })

    const paginationCount = response.headers.get("pagination-count")
    const pageCount = Math.floor(paginationCount / limit)

    console.log(paginationCount)

    return {
        cats,
        paginationCount: paginationCount || 0,
        pageCount: pageCount,
    }
}

export { fetchCats }