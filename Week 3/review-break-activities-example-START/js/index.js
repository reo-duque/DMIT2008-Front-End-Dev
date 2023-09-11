/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/
console.log("js is linked")

let newTopicForm = document.querySelector(".new-topic-form")
let topicList = document.querySelector(".topics-list")

const addTopicToPage = (topicName, topicList) => {
    topicList.innerHTML += `<li class="list-group-item">
        ${topicName}
    </li>`
}

newTopicForm.addEventListener("submit", (event) => {
    event.preventDefault()
    
    //let's get the form from the event object
    let form = event.target
    
    //get the input value (if using form.elements, use the "name" of input)
    let topic = form.elements["new-topic"]
    
    //to get the value of the input, use topic.value
    //validation
    if (topic.value === ""){
        //invalid
        topic.classList.add("is-invalid")
    } else {
        //valid
        topic.classList.remove("is-invalid")
        addTopicToPage(topic.value, topicList)
    }
    
    //reset form
    topic.value = ""
})
