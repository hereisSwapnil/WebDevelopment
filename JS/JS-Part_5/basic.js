// Object Literals 
const student = {
    name : "swamp",
    age : 19,
    city : "kanpur"
}

console.log(student.name)

const post = {
    username: "swamp",
    content: "Hey everyone!!",
    tags: ["@shagun", "@shradha"],
    likes: 95
}

post.likes += 1
console.log(post)

// Objects of Objects
const classInfo = {
    aman: {
        grade: "A+",
        city: "kanpur" 
    },
    piyush: {
        grade: "B+",
        city: "lucknow" 
    },
    rajveer: {
        grade: "B",
        city: "banaras" 
    },
    sid: {
        grade: "C+",
        city: "mumbai" 
    }
}

console.log(classInfo.aman.grade)

// Array of objects

const students = [
    {
        name: "shradha",
        age: 25,
        city: "delhi"
    },
    {
        name: "aman",
        age: 29,
        city: "delhi"
    },
    {
        name: "swamp",
        age: 20,
        city: "kanpur"
    },
    {
        name: "ayush",
        age: 19,
        city: "noida"
    },
]

console.log(students[0].name)
for(let i in students){
    console.log(students[i].name)
}

// random
console.log(Math.random()*20)