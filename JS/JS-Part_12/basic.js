// async function
async function Hello() {
    return "completed"
}

Hello()
    .then(() => {
        console.log("completed");
    })
    .catch(() => {
        console.log("error");
    })

// await
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1
            console.log(num);
            resolve()
        }, 1000)
    })
}

async function rNum() {
    await getNum()
    await getNum()
    await getNum()
    await getNum()
    await getNum()
    await getNum()
}

// try catch
// Used to catch error in the callings ex: API
// try {
//     ...
// } catch {
//     ...
// }

// JSON
let dogData = '{"message": "https://images.dog.ceo/breeds/shihtzu/n02086240_5443.jpg","status": "success"}'
let dogJSON = JSON.parse(dogData)
console.log(dogJSON.message);

// JSON back to String
console.log(JSON.stringify(dogJSON));

// API Calling
function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((result) => {
        result.json().then((data) => {
            console.log(data.message);
        }).catch((error) => {
            console.log(error);
        })
    })
    .catch((error) => {
        console.log(error);
    })
}

// Using Async & Await functions
async function getImage() {
    let response = await fetch("https://dog.ceo/api/breeds/image/random")
    let result = await response.json()
    console.log(result.message);
}