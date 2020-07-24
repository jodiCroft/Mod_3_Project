const BASE_URL = "http://localhost:3000"
const PAPAYA_URL = "http://localhost:3000/papayas"

document.addEventListener("DOMContentLoaded", () => {
    fetch(PAPAYA_URL)
        .then(resp => resp.json())
        .then(object => console.log(object))
})