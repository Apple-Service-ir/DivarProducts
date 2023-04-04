var updateBtn = document.getElementById("btn-update")

updateBtn.addEventListener("click", async () => {
    updateBtn.disabled = true
    await axios.post("/api/products/update",{}).then((result) => {
        location.reload()
    })
})

var acceptBtns = document.querySelectorAll(".acceptBtn")
var rejectBtns = document.querySelectorAll(".rejectBtn")
var products = document.querySelectorAll(".product")

for(let i = 0; i < acceptBtns.length; i++){
    acceptBtns[i].addEventListener("click", async () => {
        await axios.post("/api/products/accept", {id : acceptBtns[i].id}).then(() => {
            products[i].style.opacity = "0"
            setTimeout(() => {
                products[i].style.display = "none"
            }, 200);
        })
    })
}

for(let i = 0; i < rejectBtns.length; i++){
    rejectBtns[i].addEventListener("click", async () => {
        await axios.post("/api/products/reject", {id : rejectBtns[i].id}).then(() => {
            products[i].style.opacity = "0"
            setTimeout(() => {
                products[i].style.display = "none"
            }, 200);
        })
    })
}