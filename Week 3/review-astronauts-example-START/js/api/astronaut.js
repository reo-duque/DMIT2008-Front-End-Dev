const BASE_URL = "https://lldev.thespacedevs.com/2.2.0"

// api functions here.

/**
 * A function that returns data from the astronaut api
 * @example
 * getAstronautList().then((data)=> {
 *  //do something here.
 * })
 */

const getAstronautList = async () => {
    const response = await fetch(BASE_URL + '/astronaut/')
    const data = await response.json()
    return data
}

export { getAstronautList }