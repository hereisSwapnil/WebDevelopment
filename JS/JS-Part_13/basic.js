let url = "https://dog.ceo/api/breeds/image/random"

// Fetch API Content using Axios <don't forget to use the CDN link or install the Axios library/package>
async function getDogImage() {
    try {
        let response = await axios.get(url)
        console.log(response.data.message);
    } catch (e) {
        console.log(e);
    }
}
// Calling the function
// getDogImage()

// Passing Headers when API Calling
async function getDog() {
    try {
        let headers = { "Content-Type": "application/json" }
        let response = await axios.get(url, headers)
        console.log(response.data.message);
    } catch (e) {
        console.log(e);
    }
}

// College API
async function getCollegesIN() {
    try {
        url = "http://universities.hipolabs.com/search?country=india"
        let response = await axios.get(url)
        for (data of response.data) {
            console.log(data.name);
        }
    } catch (e) {
        console.log(e);
    }
}