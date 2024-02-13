
//work on clicking on review option
let review=document.getElementById("review")
review.addEventListener("click",()=>{

    // this data is about bill to and bill from

let whom2=document.getElementById("whom2").value;
document.getElementById("whom").value=whom2

let from=document.getElementById("from").value;
document.getElementById("from3").value=from


let mailTo=document.getElementById("to2").value
document.getElementById("idTo").value=mailTo



let addTo=document.getElementById("address_to").value
document.getElementById("addTo").value=addTo

let addFrom=document.getElementById("FromAdd").value
document.getElementById("billAdd").value=addFrom


let billFrom=document.getElementById("from").value

let mailFrom=document.getElementById("fromMail").value
document.getElementById("billmail").value=mailFrom

// this data is for 1st part invoice number and date
let vNumber=document.getElementById("voice").value
document.getElementById("voice2").value=vNumber

//fetch tha value for current date
let currentDate=document.getElementById("cDate").innerText
document.getElementById("cdate").innerText=currentDate

//now data fetch for due date

// let due_date=document.getElementById("dDate").value
// document.getElementById("due_date").value=new Date(due_date)



})



// let review=document.getElementById("review")
// review.addEventListener("click",()=>{
   

//     let whom2=document.getElementById("whom2").value;
// document.getElementById("whom").value=whom2




// })