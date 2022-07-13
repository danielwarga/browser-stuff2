// alert("I'm loaded from file!")

// DOM - Document Object Modul
// document.getElementById("main-title").textContent = "Hi, everyone!"
const divs= document.querySelectorAll("div");

// for (let d of divs) {
//     d.innerText = "Changed"
// }

divs.forEach((d, i) => {
    d.textContent = `I'm at index ${i}`;
})

const button = document.getElementById('bitcoin-button');
button.addEventListener('click', (e) => {
    e.target.textContent = "Hi!"
})

// document.getElementById('bitcoin-button').addEventListener("mouseover", () => {
//     console.log('Hi as well!')
// })
