import API from "./api.js"
import renderInterests from "./render.js"

const entrySave = document.querySelector(".save_entry")
const entryPlace = document.querySelector(".location_place")
const entryPoi = document.querySelector(".location_interest")
const entryDescription = document.querySelector(".description")
const entryCost = document.querySelector(".cost")
const entryReview = document.querySelector(".review")
const interestsContainer = document.querySelector(".poi_container")

const createNewEntryFactory = (place, poi, description, cost, review) => {
    return {
        "placeId": parseInt(place),
        "name": poi,
        "description": description,
        "cost": parseInt(cost),
        "review": review
    }
}

const events = {
    createEntry() {
        entrySave.addEventListener("click", event => {
            const createNewEntry = createNewEntryFactory(entryPlace.value, entryPoi.value, entryDescription.value, entryCost.value, entryReview.value)
            API.saveNewEntry(createNewEntry)
                .then(() => {
                    API.getInterests()
                    .then(renderInterests)
                })
        })

    }


}

export default events