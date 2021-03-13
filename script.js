let cartBtn = document.querySelectorAll(".add-cart");
let cartNum = document.querySelector(".cart-number");
let navBar = document.querySelector("nav");
let btn = document.querySelector("button");
let buyBtn = document.querySelectorAll(".buy-button");
let section = document.querySelector("section");
let buyInfoDiv = document.querySelector(".buy-info-div");
let buyInfoUnlist = document.querySelector(".buyInfo-unlist");
let buyInfoPrice = document.querySelector(".buyInfo-price");
let buyBtnCancel = document.querySelector(".buy-button-cancel");
let buyBtnOk = document.querySelector(".buy-button-ok");
let hamburger = document.querySelector(".sticky-user-info-container");

let cartItemInfoContainer = document.querySelector(".cart-item-info");



//Item container

let collections = {
    // items : {
    //     img : ["img/items-collection/item-1.jpg",
    //     "img/items-collection/item-2.jpg",
    //     "img/items-collection/item-3.jpg",
    //     "img/items-collection/item-4.jpg",
    //     "img/items-collection/item-5.jpg",
    //     "img/items-collection/item-6.jpg",
    //     "img/items-collection/item-7.png",
    //     "img/items-collection/item-8.jpg",
    //     "img/items-collection/item-9.jpg",
    //     "img/items-collection/item-10.jpg",
    //             ],
    //     h4:["Rs.4000" , "Rs.1100" , "Rs.2100" , "Rs.3050" , "Rs.980" , "Rs.990" , "Rs.15000" , "Rs.4400" , "Rs.2260" , "Rs.44000"],
    // },
    cartCount : 0,
    itemInfo : {
        1 : "Black Fashion Shoes",
        2 : "Black MI Airpods",
        3 : "Blue MPOW Headphones",
        4 : "Men's HMTE Watch",
        5 : "Black Fashion T-Shirt",
        6 : "Stylish Computer Glasses",
        7 : "Acoustic Guitar",
        8 : "Black Thor Helmet",
        9 : "Black and Red Women's Bag",
        10 : "Oppo Note 10",
    },

}

// {/* <div class="item">
//                     <div class="item-image-container">
//                         <img src="img/items-collection/item-1.jpg">
//                     </div>
//                     <div class="item-info-container">
//                         <h4>Rs.4000</h4>
//                         <button>Buy</button>
//                         <h4 class="add-cart">Add to Cart</h4>
//                     </div>
//                 </div> */}

// // Add Attribute function
// const addAttribute = (el , attr) => {
//     for(const i in attr) {
//         el.setAttribute(i , attr[i]);
//     }
// }

// // Adding the cart items dynamically
// const makeItem = (items) => {
//     items[img].map((el) => {

//     });
    
    

// }
let list=null;
// Create Item List
const createItemList = (event) => {
    let clickedItemId = event.target.parentNode.parentNode.id;
    for(let i in collections.itemInfo) {
        if(i===clickedItemId) {
            if(list!==null && buyInfoUnlist.children) {
                buyInfoUnlist.removeChild(list);
            }
            list = document.createElement("li");
            list.innerHTML = collections.itemInfo[i];
            buyInfoUnlist.appendChild(list);
        }
    }
    let clickedItemPrice = event.target.previousElementSibling.textContent;
    clickedItemPrice = clickedItemPrice.slice(3,clickedItemPrice.length);
    buyInfoPrice.textContent = clickedItemPrice;
}

// Function to show a div when we click the buy button
const showBuyDiv = (e) => {
    createItemList(e);
    section.style.display = "none";
    buyInfoDiv.style.display = "block";
}

const cartAdd = () => {
    collections.cartCount++;
    cartNum.textContent = collections.cartCount;
}

// const showStickyUserInfo = () => {

// }

// converting nodelist into array. cartBtn was nodeList as we used querySelectorAll 
cartBtn = Array.from(cartBtn);
cartBtn.map(el => {
    el.addEventListener("click" , cartAdd);
});


document.addEventListener("scroll" , () => {
    navBar.classList.toggle("sticky" , window.scrollY > 100);
})

btn.addEventListener("click" , (event) => {
    event.preventDefault();
})

// When we click Buy Button
buyBtn = Array.from(buyBtn);
buyBtn.map(el => {
    el.addEventListener("click" , (e) => {
        showBuyDiv(e);
    });
});


// When we click Cancel button inside the buy info div
buyBtnCancel.addEventListener("click" , () => {
    // let items = buyInfoUnlist.childNode;
    // items.remove();
    section.style.display = "block";
    buyInfoDiv.style.display = "none";
});

// When we click Buy It button inside the buy info div
buyBtnOk.addEventListener("click" , (e) => {
    section.style.display = "block";
    buyInfoDiv.style.display = "none";
    alert(`Thanks for buying the ${e.target.parentNode.previousElementSibling.previousElementSibling.childNodes[0].textContent}`);
    console.log(e.target.parentNode.previousElementSibling.previousElementSibling.childNodes[0].innerHTML);
});

// When we click the hamburger 
hamburger.addEventListener("click" , () => {
    
    cartItemInfoContainer.style.display = "initial";
});
