let cartBtn = document.querySelectorAll(".add-cart");
let cartNum = document.querySelector(".cart-number");
let cartClick = document.querySelector(".cart-icon-container");
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
let caret = document.querySelector(".caret");
let sidebar = document.querySelector(".sidebar");
let toScroll = document.querySelector(".toScroll");

let backdrop = document.querySelector(".backdrop");



//Item container

let collections = {
    itemImg : {
        1 : "img/items-collection/item-1.jpg",
        2 : "img/items-collection/item-2.jpg",
        3 : "img/items-collection/item-3.jpg",
        4 : "img/items-collection/item-4.jpg",
        5 : "img/items-collection/item-5.jpg",
        6 : "img/items-collection/item-6.jpg",
        7 : "img/items-collection/item-7.png",
        8 : "img/items-collection/item-8.jpg",
        9 : "img/items-collection/item-9.jpg",
        10 : "img/items-collection/item-10.jpg",
                },
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
    cartIndCount : {
        1 : 0,
        2 : 0,
        3 : 0,
        4 : 0,
        5 : 0,
        6 : 0,
        7 : 0,
        8 : 0,
        9 : 0,
        10 : 0,     
    },
    prevCartItem : null

}


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
            list.setAttribute("id" , i);
            buyInfoUnlist.appendChild(list);
        }
    }
    let clickedItemPrice = event.target.previousElementSibling.textContent;
    clickedItemPrice = clickedItemPrice.slice(3,clickedItemPrice.length);
    buyInfoPrice.textContent = clickedItemPrice;
}

// Function to set Attribute
const setAttr = (el , prop) => {
    for(let i in prop) {
        el.setAttribute(i , prop[i]);
    }
}

// Disabling the cart icon when the cart amount is zero
if(collections.cartCount===0) {
    cartBtn.disabled = true;
}else {
    cartBtn.disabled = false;
}

// Function to show a div when we click the buy button
const showBuyDiv = (e) => {
    createItemList(e);
    buyInfoDiv.style.display = "block";
    backdrop.style.display = "block";
}

// When we click the backdrop
backdrop.addEventListener("click" , () => {
    buyInfoDiv.style.display = "none";
    backdrop.style.display = "none";
    sidebar.classList.remove("sidebarActive");
})

// Function to make dropdown when we click the cart icon
const createDropDown = (e) => {

    let dropDownItemInfo = document.createElement("div");
    let dropDownItemOption = document.createElement("div");
    let cartItemImageContainer = document.createElement("div");
    let cartItemInfoHeading = document.createElement("div");

    setAttr(dropDownItemInfo , {
        "class" : "item-info"
    });
    setAttr(dropDownItemOption , {
        "class" : "cart-item-buy-option-container"
    });
    setAttr(cartItemImageContainer , {
        "class" : "cart-item-image-container"
    });
    setAttr(cartItemInfoHeading , {
        "class" : "cart-item-info-heading"
    });

    let itemId = e.target.parentNode.parentNode.id;

    let imgSrc = collections.itemImg[itemId];
    let dropDownImg = document.createElement("img");
    setAttr(dropDownImg , {
        "src" : imgSrc,
        "alt" : "itemimage"
    });
    let itemHeading = document.createElement("h3");
    itemHeading.textContent = collections.itemInfo[itemId];
    cartItemImageContainer.appendChild(dropDownImg);
    console.log(cartItemImageContainer);
    cartItemInfoHeading.appendChild(itemHeading);
    console.log(cartItemInfoHeading);

    let cartOptionHeading = document.createElement("h3");
    let minusQuantityIcon = document.createElement("ion-icon");
    let addQuantityIcon = document.createElement("ion-icon");
    let itemQuantityNumber = document.createElement("span");
    let strongText = document.createElement("strong");

    strongText.textContent = "Qty : ";

    itemQuantityNumber.textContent = collections.cartIndCount[itemId];

    setAttr(minusQuantityIcon , {
        "name" : "remove-outline",
        "class" : "minus-item-quantity"
    });
    setAttr(addQuantityIcon , {
        "name" : "add-outline",
        "class" : "add-item-quantity"
    });
    cartOptionHeading.appendChild(minusQuantityIcon);
    cartOptionHeading.appendChild(strongText);
    cartOptionHeading.appendChild(itemQuantityNumber);
    cartOptionHeading.appendChild(addQuantityIcon);
    
    dropDownItemOption.appendChild(cartOptionHeading);

    dropDownItemInfo.appendChild(cartItemImageContainer);
    dropDownItemInfo.appendChild(cartItemInfoHeading);
    dropDownItemInfo.appendChild(dropDownItemOption);

    toScroll.appendChild(dropDownItemInfo);
};

/*

let dropDownItemInfo = document.querySelector(".item-info");
let cartItemImageContainer = document.querySelector(".cart-item-image-container");
let cartItemInfoHeading = document.querySelector(".cart-item-info-heading");
let dropDownItemOption = document.querySelector(".cart-item-buy-option-container");
                        <div class="item-info">
                            <div class="cart-item-image-container">
                                <img src="img/items-collection/item-1.jpg" alt="check">
                            </div>
                            <div class="cart-item-info-heading">
                                <h3>Black Stylish Shoe</h3>
                            </div>
                            <div class="cart-item-buy-option-container">
                                <h3>
                                    <ion-icon name="remove-outline" class="minus-item-quantity"></ion-icon>
                                    <strong>Qty :</strong> <span class="item-quantity-number">5</span>
                                    <ion-icon name="add-outline" class="add-item-quantity"></ion-icon></h3>
                            </div>
                        </div>
*/

const cartAdd = (e) => {
    collections.cartCount++;
    cartNum.textContent = collections.cartCount;
    createDropDown(e);
}

// const showStickyUserInfo = () => {

// }

// converting nodelist into array. cartBtn was nodeList as we used querySelectorAll 
cartBtn = Array.from(cartBtn);
cartBtn.map(el => {
    el.addEventListener("click" , (e) => {
        collections.cartIndCount[e.target.parentNode.parentNode.id]++;
        cartAdd(e);
    });
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
    backdrop.style.display = "none";
});

// When we click Buy It button inside the buy info div
buyBtnOk.addEventListener("click" , (e) => {
    section.style.display = "block";
    buyInfoDiv.style.display = "none";
    backdrop.style.display = "none";
    alert(`Thanks for buying the ${collections.itemInfo[e.target.parentNode.previousElementSibling.previousElementSibling.childNodes[0].id]}`);
});

// When we click the cart icon
cartClick.addEventListener("click" , () => {
    cartItemInfoContainer.classList.toggle("active");
})

// When we click the caret icon
caret.addEventListener("click" , () => {
    cartItemInfoContainer.classList.remove("active");
})

//When we click the hamburger 
hamburger.addEventListener("click" , () => {
    cartItemInfoContainer.style.display = "none";
    sidebar.classList.add("sidebarActive");
    backdrop.style.display = "block";
});

