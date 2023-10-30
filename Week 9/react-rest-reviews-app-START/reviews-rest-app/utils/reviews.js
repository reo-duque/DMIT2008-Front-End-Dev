import { BASE_URL } from "./api/base";

//create a function to getReviews
const getReviews = async () => {
    const response = await fetch(`${BASE_URL}/reviews`, {
        method: 'GET'
    })
    const reviewData = await response.json()
    return reviewData
}

//create a function posting a review
const postReview = async ({title, comment, rating}) => {
    const response = await fetch(`${BASE_URL}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            comment: comment,
            rating: parseInt(rating)
        })
    })
    const postData = await response.json()
    return postData
}

const deleteReview = async (id) => {
    const response = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: 'DELETE',
    })
    const deleteData = await response.json()
}

export { getReviews, postReview, deleteReview }
