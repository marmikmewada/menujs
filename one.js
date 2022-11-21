"use strict";

const menuItems = document.querySelectorAll(".menuli");
// console.log(menuItems[1]);
const products = document.querySelector(".products");
// console.log(products);

menuItems[1].addEventListener("click", function(){
    // e.stopPropagation();
    if(products.classList.contains("hidden")){
        products.classList.remove("hidden");
    }
});