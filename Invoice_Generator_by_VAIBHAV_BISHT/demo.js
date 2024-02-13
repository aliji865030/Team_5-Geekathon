// this data is for 1st part invoice number and date
let vNumber=document.getElementById("voice")


//fetch tha value for current date
let currentDate=document.getElementById("cDate")


let whom2=document.getElementById("whom2");
// bill to section values
let from=document.getElementById("from");
let mailTo=document.getElementById("to2")
let addTo=document.getElementById("address_to")

// bill from section values
let billFrom=document.getElementById("from")
let mailFrom=document.getElementById("fromMail")
let addFrom=document.getElementById("FromAdd")


let itemToBeAdded=document.getElementById("added")
let allItemsDetails = [];

let addItem=document.getElementById("add-row")

addItem.addEventListener("click", createItem);
function createItem(newItem){
    if (newItem?.length !== undefined) {
        allItemsDetails = newItem;
      }else{
        allItemsDetails.push({
          name: "",
          des: "",
          qty: 1,
          price: 1,
        });
    
      // calculateTotalSub();
      addItem.innerHTML = "";
  allItemsDetails.map((item, idx) => {
    let div=document.createElement('div')
    div.classList.add("third")
    div.innerHTML=`
    <div class="third_left">
                                <p>ITEMS</p>
                                <input type="text" placeholder="Item Name">
                                 <input type="text" placeholder="Item Description"> 

                            </div>
                            <div class="third_right" style="display: flex;gap: 20%;">

                                <div class="qty">
                                    <p>QTY</p>
                                    <input type="number" id="unit">
                                </div>
                                <div class="price">
                                    <p>PRICE/ITEMS</p>
                                    <input type="number" id="price">
                                </div>
                                <div class="action">
                                    <p>ACTION</p>
                                    <img id="trash" src="./images/trash.png" alt="">
                                </div>

                            </div>
    
    
    `
    let priceRate=document.querySelector("#price")
    priceRate.value = item.price;
    priceRate.addEventListener("input", () => {
      item.price= priceRate.value;
      // calculateTotalSub();
    });

    itemToBeAdded.append(div)
  })


  console.log(allItemsDetails.price);
        
      }
}