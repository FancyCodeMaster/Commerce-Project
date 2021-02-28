const cartBtn = document.querySelectorAll(".add-cart");
const cartNum = document.querySelector(".cart-number");


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