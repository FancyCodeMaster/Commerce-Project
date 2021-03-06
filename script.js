const cartBtn = document.querySelectorAll(".add-cart");
const cartNum = document.querySelector(".cart-number");
const navBar = document.querySelector("nav");


let collections = {
    cartCount : 0
}

const cartAdd = () => {
    collections.cartCount++;
    console.log(collections.cartCount);
    cartNum.textContent = collections.cartCount;
}

for (let i = 0 ; i<cartBtn.length ; i++) {
    cartBtn[i].addEventListener("click" , cartAdd);
}


document.addEventListener("scroll" , () => {
    navBar.classList.toggle("sticky" , window.scrollY > 100);
})