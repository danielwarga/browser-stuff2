// alert("I'm loaded from file!")

// DOM - Document Object Modul


// document.getElementById("main-title").textContent = "Hi, everyone!"
const divs= document.querySelectorAll("div");

for (let d of divs) {
    d.innerText = "Changed"
}

// divs.forEach(d, i) => {
//     d.textConten = `I'm at index ${i};`
// }
