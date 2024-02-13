

let filteredProducts=[]

function loadItems(){
  for(let i=0;i<products.length;i++){
    const CARD= document.createElement("div")
    CARD.classList.add("card")
    CARD.innerHTML=`
    <div class="heart">
    <i class="fa-solid fa-heart"></i>
 </div>
 <div class="image">
    <img src="${products[i].image}" alt="">
 </div>
 <div class="content">
    <div class="title">
        <p>${products[i].title}</p>
    </div>
    <div class="rating-container">
       <span class="rating">${products[i].rating} <i class="fa-solid fa-star" style="color: rgb(255, 255, 255);"></i></span>
 
       
       ${loder(i)}
    </div>
    <div class="price">
        <span class="new-price">
            $${products[i].specialPrice}
        </span>
        <span class="original-price">
            $${products[i].price}
        </span>
        <span class="price-off">
            ${Math.floor(((products[i].price-products[i].specialPrice)/products[i].price)*100)}% off
        </span>
    </div>
 </div>
    `

    document.querySelector(".card-container").append(CARD)
  }
}

loadItems();

function loder(i){
  if(products[i].flipkartAssured){
    return `<img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt=""></img>`
  }else{
    return ""
  }
}




function sortbypopularity(){
    document.querySelector(".card-container").innerHTML=""
    products.sort((p1,p2)=>p2.popularity-p1.popularity)
    loadItems()
}

function sortByPriceHtoL(){
    document.querySelector(".card-container").innerHTML=""
    products.sort((p1,p2)=>p2.specialPrice-p1.specialPrice)
    loadItems()
}

function sortByPriceLtoH(){
    document.querySelector(".card-container").innerHTML=""
    products.sort((p1,p2)=>p1.specialPrice-p2.specialPrice)
    loadItems()
}



function displayProducts(products){
    document.querySelector(".card-container").innerHTML=""
    // console.log(products);
    for(let i=0;i<products.length;i++){
        const CARD= document.createElement("div")
        CARD.classList.add("card")
        CARD.innerHTML=`
        <div class="heart">
        <i class="fa-solid fa-heart"></i>
     </div>
     <div class="image">
        <img src="${products[i].image}" alt="">
     </div>
     <div class="content">
        <div class="title">
            <p>${products[i].title}</p>
        </div>
        <div class="rating-container">
           <span class="rating">${products[i].rating} <i class="fa-solid fa-star" style="color: rgb(255, 255, 255);"></i></span>
     
           
           ${loder(i)}
        </div>
        <div class="price">
            <span class="new-price">
                $${products[i].specialPrice}
            </span>
            <span class="original-price">
                $${products[i].price}
            </span>
            <span class="price-off">
                ${Math.floor(((products[i].price-products[i].specialPrice)/products[i].price)*100)}% off
            </span>
        </div>
     </div>
        `
    
        document.querySelector(".card-container").append(CARD)
      }

}

function filterByPrice(){
    let minPrice=Number(document.querySelector(".min-price").value)
    let maxPrice=Number(document.querySelector(".max-price").value)

    var filteredProducts = products.filter(function(product) {
        return product.price >= minPrice && product.price <= maxPrice;
    });

    displayProducts(filteredProducts);

    
}

function filterByFlipkart(){
    const filteredProducts = products.filter(product => product.flipkartAssured);
    displayProducts(filteredProducts)
    

}

function nocostemi(){
    const filteredProducts = products.filter(product => product.noCostEMI);
    displayProducts(filteredProducts)
}

function s4(){
    const filteredProducts = products.filter(product => product.rating>=4);
    displayProducts(filteredProducts)
}

function s3(){
    const filteredProducts = products.filter(product => product.rating>=3);
    displayProducts(filteredProducts)
}

function s2(){
    const filteredProducts = products.filter(product => product.rating>=2);
    displayProducts(filteredProducts)
}

function s1(){
    const filteredProducts = products.filter(product => product.rating>=1);
    displayProducts(filteredProducts)
}