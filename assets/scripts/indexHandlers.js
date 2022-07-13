document.getElementById('bitcoin-button').addEventListener('click', (e) => {
    e.target.textContent = "Hi!"
})

document.querySelectorAll("div").forEach((d, i) => {
    d.addEventListener("click", (e) => {
        updateBitcoinButtonText(i);
    })
})
