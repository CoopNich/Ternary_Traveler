import API from "./api.js"
import renderInterests from "./render.js"


// TODO  ! Set up interface in HTML with forms and labels
//       Set up fetch call to retrieve data
//       create HTML factory for data
//       create function to render data to DOM

API.getInterests()
.then(parsedEntries => {
    renderInterests(parsedEntries)
 })