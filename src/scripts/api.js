const API = {
    getInterests () {
        return fetch("http://localhost:8088/interests?_expand=place")
        .then(interests => interests.json())
    },
    saveNewEntry (entryObject) {
        return fetch("http://localhost:8088/interests?_expand=place", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(entryObject)
   })
    },
    deleteEntry (id) {
        return fetch(`http://localhost:8088/interests/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    }

}

export default API