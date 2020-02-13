import API from "./api.js"
import renderInterests from "./render.js"
import events from "./events.js"

//   Set up interface in HTML with forms and labels
//       Set up fetch call to retrieve data
//       create HTML factory for data
//       create function to render data to DOM
//         DONE!

// Make a save button to reference the fieldset inputs
//      Make a click event to capture the inputs when save button is clicked
//      Make a fetch call to post values to the API
//      Make a function to render new and old entries to DOM
//        DOOOOOOOONNNNNNE

// 

API.getInterests()
.then(parsedEntries => {
    renderInterests(parsedEntries)
 })

 events.createEntry()
 events.deleteEntry()