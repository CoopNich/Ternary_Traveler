const API = {
    getInterests () {
        return fetch("http://localhost:8088/interests?_expand=place")
        .then(interests => interests.json())
    }

}

export default API