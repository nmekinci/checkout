


// ******selectors


// const main = document.querySelector(".main__product")
const main = document.getElementById("products-preview")
document.getElementsByClassName

main.addEventListener("click", (e) => {
    // console.log(e.target.classList);
    if(e.target.classList.contains("fa-minus")) {
        if(e.target.nextElementSibling.innerText > 1) {
            e.target.nextElementSibling.innerText --
        }        
    } else if (e.target.classList.contains("fa-plus")) {
        e.target.previousElementSibling.innerText ++;
        e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".main__product-line-price").innerText = e.target.previousElementSibling.innerText * e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".dollar").innerText
        //! element.closest(".main__product-line-price") use this, instead for above shit 


        // e.target.previousElementSibling.innerText
        // e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".dollar").innerText
    } else if (e.target.classList.contains("fa-trash-can")){
       e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
    }
    
})