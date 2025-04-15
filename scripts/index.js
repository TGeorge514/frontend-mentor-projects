/** Select/deselect thumbnail pictures **/
const mainSneakerImg = document.querySelector('#main-sneaker-img');

const selectThumbnail1 = document.querySelector('.thumbnail-img a:nth-child(1) img');
const selectThumbnail2 = document.querySelector('.thumbnail-img a:nth-child(2) img');
const selectThumbnail3 = document.querySelector('.thumbnail-img a:nth-child(3) img');
const selectThumbnail4 = document.querySelector('.thumbnail-img a:nth-child(4) img');

/*FIGURE OUT HOW TO LOOP THROUGH ELELMENTS TO DESELECT THE OTHERS*/
const selectDeselectThumbnail = (element) =>{   
    let selectedElement = element.currentTarget;
    if(selectedElement.className == 'active-thumbnail'){
        selectedElement.className = "";
    }else{
        selectedElement.classList.add('active-thumbnail');
        mainSneakerImg.src = selectedElement.src;
    }
}

selectThumbnail1.addEventListener('click', selectDeselectThumbnail);
selectThumbnail2.addEventListener('click', selectDeselectThumbnail);
selectThumbnail3.addEventListener('click', selectDeselectThumbnail);
selectThumbnail4.addEventListener('click', selectDeselectThumbnail);

/** Lightbox gallery **/
//const originalImg = document.querySelector('#main-sneaker-img');
const LightboxDiv = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const lightboxClose = document.querySelector('.close');

mainSneakerImg.onclick = function(){
    LightboxDiv.style.display = 'block';
    lightboxImg.src = this.src;   
}

const closeBox = () =>{
    LightboxDiv.style.display = 'none';
}

//mainSneakerImg.addEventListener('click', activateBox);
lightboxClose.addEventListener('click', closeBox);



/** Add/remove to basket buttons **/
const selectButtonMinus = document.querySelector('div [type=button]:nth-child(1)');
const sneakerQtyButton = document.querySelector('div [type=button]:nth-child(2)');
const selectButtonPlus = document.querySelector('div [type=button]:nth-child(3)');

const removeItem = () =>{
    if(sneakerQtyButton.value > 0)
        sneakerQtyButton.value--;
}

const addItem = () =>{
    sneakerQtyButton.value++;
}

selectButtonMinus.addEventListener('click', removeItem);
selectButtonPlus.addEventListener('click', addItem);

/** Add to cart button and basket icon **/
const addToCartBtn = document.querySelector('button.addToCart');
const cartQty = document.querySelector('#cart-qty');
const basketBox = document.querySelector("#basket-box");
const basketIcon = document.querySelector("header div:nth-child(2) img");
const basketBoxSpan = document.querySelector("#basket-box span");
const trashSpanBtn = document.querySelector(".trash");

const addToCart = () =>{
    if(sneakerQtyButton.value > 0){
        cartQty.innerHTML = sneakerQtyButton.value;
        cartQty.style.display = "inline";
        basketBoxSpan.innerHTML = `<img src=${mainSneakerImg.src}><p>Fall Limited Edition Sneakers<br>$125.00 x ${sneakerQtyButton.value} = <strong>$${sneakerQtyButton.value * 125}</strong></p>`;
        const div = document.createElement("div");
        basketBoxSpan.append(div);
        div.innerText = "checkout";
        div.classList.add("addToCart");
        div.classList.add("basket-box-btn");
        trashSpanBtn.style.display = "inline";
    }
}

addToCartBtn.addEventListener('click', addToCart);

const showBasket = () =>{
    basketBox.style.display = "block";
}

[cartQty, basketIcon].forEach(function(element){
    element.addEventListener('click', showBasket);
});

const trashCart = () =>{
    basketBoxSpan.innerHTML = "your cart is empty.";
    trashSpanBtn.style.display = "none";
    sneakerQtyButton.value = 0;
    cartQty.style.display = "none";
}

trashSpanBtn.addEventListener('click', trashCart);

/** Hamburger button and menu **/
const topNav = document.querySelector("header div nav");

const topMenuUp = () =>{
    topNav.classList.add("top-menu-display");
    document.querySelector("header div nav span").style.display = "block";
}

const topMenuDown = () =>{
    topNav.classList.remove("top-menu-display");
}