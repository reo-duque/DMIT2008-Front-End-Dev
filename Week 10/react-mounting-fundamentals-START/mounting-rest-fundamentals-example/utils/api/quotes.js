const BASE_URL = "https://api.quotable.io"

const getRandomQuote = async () => {
    const response = await fetch(`${BASE_URL}/random`)
    const data = await response.json()
    return data
}

export { getRandomQuote }
