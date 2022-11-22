"use strict";

const menuItems = document.querySelectorAll(".menuli");
// console.log(menuItems[1]);
const products = document.querySelector(".products");
// console.log(products);
// const productsATag = document.querySelector(".menuli>*")
const body = document.querySelector("body");
    const productsMens = document.querySelector(".products-Mens");
    console.log(productsMens);
const productsMenuList = document.querySelectorAll(".productsMenuli");
// console.log(productsMenuList);

menuItems[1].addEventListener("mouseover", function(e){
    e.stopPropagation();
    products.classList.toggle("hidden");
});

    productsMenuList[0].addEventListener("mouseover", function(e){
        e.stopPropagation();
        productsMens.classList.toggle("hidden");
    })

body.addEventListener("click", function(){
    // e.stopPropagation;
    if(!products.classList.contains("hidden")){
        products.classList.add("hidden");
        productsMens.classList.add("hidden");
    }
})
