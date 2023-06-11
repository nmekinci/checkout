


// ******selectors


const main = document.getElementById("products-preview")
document.getElementsByClassName


// ******** events
main.addEventListener("click", (e) => {
 
    if(e.target.classList.contains("fa-minus")) {
        if(e.target.nextElementSibling.innerText > 1) {
            e.target.nextElementSibling.innerText --
            
        }        
    } else if (e.target.classList.contains("fa-plus")) {
        e.target.previousElementSibling.innerText ++;
        e.target.closest(".main__product").querySelector(".main__product-line-price").innerText = e.target.previousElementSibling.innerText * e.target.closest(".main__product-info").querySelector(".dollar").innerText

    } else if (e.target.classList.contains("fa-trash-can")){
       e.target.closest(".main__product").remove()

    }
    
})
