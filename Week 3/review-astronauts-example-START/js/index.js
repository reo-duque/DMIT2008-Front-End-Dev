//bootstrap css library
import 'bootstrap/dist/css/bootstrap.min.css'

//get astronaut list
import { getAstronautList } from "./api/astronaut";
import { renderAstronautListItem } from './dom/astronaut';

let astronautListElement = document.querySelector(".astronaut-list")

getAstronautList().then((data)=> {
    //loop through the astronauts
    data.results.map((astronaut) => {
        renderAstronautListItem(astronaut, astronautListElement)
    })
})