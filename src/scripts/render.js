import interestsHtmlFactory from "./htmlFactory.js"

const interestsContainer = document.querySelector(".poi_container")
const allInputs = document.querySelectorAll(".clear")

const addEntryToDom = (entryHTML) => { 
    interestsContainer.innerHTML += entryHTML;
}

const renderInterests = (entriesArray) => {
    interestsContainer.innerHTML = "";
    entriesArray.forEach(entries => {
        const entryAsHTML = interestsHtmlFactory(entries)
        addEntryToDom(entryAsHTML)
    })
    allInputs.forEach(input => {
        input.value = ""
    })
}

export default renderInterests