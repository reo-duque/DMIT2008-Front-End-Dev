const BASE_URL = "https://lldev.thespacedevs.com/2.2.0"

// api functions here.

/**
 * A function that returns data from the astronaut api
 * @example
 * getAstronautList().then((data)=> {
 *  //do something here.
 * })
 */

const getAstronautList = () => {
    return fetch(`${BASE_URL}/astronaut/`) //promise
        .then((response)=> {
            return response.json() //a promise
        }).then((data) => {
            return data // this is what will be returned
        })
}

export { getAstronautList }