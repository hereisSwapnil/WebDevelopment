// Promises
function saveToDB(data) {
    return new Promise((success, failure) => {
        let connectionSpeed = Math.floor(Math.random() * 10)
        if (connectionSpeed > 4) {
            success("success: data was saved")
        } else {
            failure("error: internet error")
        }
    })
}

// Then / Catch
saveToDB("Data1").then(() => {
    console.log("promise1 resolved");
}).catch(() => {
    console.log("weak connection");
})

// Promise chaining
// Inefficient way
saveToDB("Data1").then(() => {
    console.log("promise1 resolved");
    saveToDB("Data2").then(() => {
        console.log("promise2 resolved");
    })
}).catch(() => {
    console.log("weak connection");
})

// Promise Chaining
// Efficient way
saveToDB("Data1").then((result) => {
    console.log("promise1 resolved");
    console.log("Result ->> ", result);
    return saveToDB("Data2")
}).then((result) => {
    console.log("promise2 resolved");
    console.log("Result ->> ", result);
    return saveToDB("Data3")
}).then((result) => {
    console.log("promise3 resolved");
    console.log("Result ->> ", result);
}).catch((error) => {
    console.log("weak connection");
    console.log("Error ->> ", error);
})