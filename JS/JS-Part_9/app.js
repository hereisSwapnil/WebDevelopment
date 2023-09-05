// By Id Name
let description_para =  document.getElementById("description")
console.log(description_para.innerText);

// By Class Name
let Old_img = document.getElementsByClassName("oldImg")
console.log(Old_img[0].src);

// By Tag Name
let title = document.getElementsByTagName("h1")
console.log(title[0].innerText);

// Query Selector
let first_anchor_tag = document.querySelector("a")
console.log(first_anchor_tag.href);

// Class List Properties
let image_spiderman = document.getElementById("mainImg")
console.log(image_spiderman);

// Add
image_spiderman.classList.add("funny")
// Remove
image_spiderman.classList.remove("funny")
// Contains
image_spiderman.classList.contains("funny")
// Toggle
image_spiderman.classList.toggle("funny")

// Navigation Properties
let h4_element = document.getElementsByTagName("h4")

// 1. parentElement
let box = h4_element[0].parentElement

// 2. ChildElementCount
console.log(box.childElementCount);

// 3. Children
console.log(box.children);

// 4. nextElementSibling
let ul = h4_element[0].nextElementSibling
console.log(h4_element[0].nextElementSibling);

// 5. previousElementSibling
console.log(ul.previousElementSibling);

// Creating Element
let newP = document.createElement('p')

// Inserting element into end of box
box.appendChild(newP)
console.log(box);

// Setting content inside newP
newP.innerText = "Hello Guys!!!"

// Inserting element into the start of the box
let btn = document.createElement("button")
btn.innerText = "Click ME"
box.prepend(btn)

// insertAdjacentElement
h4_element[0].insertAdjacentElement("afterbegin", btn)
// afterbegin
// afterend
// beforebegin
// beforeend

// remove
btn.remove()