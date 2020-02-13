const interestsHtmlFactory = (entries) => {
    return `
        <div class="entry entry--${entries.id}">
            <h2>${entries.place.name}</h2>
            <h3>${entries.name}</h3>
            <section>${entries.description}</section>
            <section>$${entries.cost}</section>
            <section>${entries.review}</section>
            <button id="editEntry--${entries.id}">Edit</button>
            <button id="deleteEntry--${entries.id}">Delete</button>
        </div> `
}

export default interestsHtmlFactory