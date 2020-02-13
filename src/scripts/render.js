import interestsHtmlFactory from "./htmlFactory.js"

const interestsContainer = document.querySelector(".poi_container")

const addEntryToDom = (entryHTML) => { 
    interestsContainer.innerHTML += entryHTML;
}

const renderInterests = (entriesArray) => {
    interestsContainer.innerHTML = "";
    entriesArray.forEach(entries => {
        const entryAsHTML = interestsHtmlFactory(entries)
        addEntryToDom(entryAsHTML)
    })
}

export default renderInterests