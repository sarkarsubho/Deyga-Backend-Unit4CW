let address=document.getElementById("add");

let res=JSON.parse(localStorage.getItem("oderuseradd"));
// console.log("res",res[0].Address)
let addresss=res[0].Address;
let pin=res[0].Pin;
let city=res[0].City;
let state=res[0].State;
let country=res[0].Countrey;
address.innerText=`${addresss},${pin},${city},${state},${country}`;
function back(){
    window.location.href="information.html";
}
function go(){
    window.location.href="order.html";
}




let cartItems= JSON.parse(localStorage.getItem("cart"));
let totalPrice=0;

cartItems.array.forEach((element,parent) => {

    totalPrice+=element.price;
    
    let div =document.createElement("div");

    let image_div =document.createElement("div");
    let image=document.createElement("img");
    image.src= element.image;
    image_div.append(image);

    let text_div =document.createElement("div");
    let name=document.createElement("p");
    name.innerText=element.name;

    let price =document.createElement("p");
    price.innerText=element.price;

    text_div.append(name,price)

    div.append(image_div,text_div);

    parent.append(div);
});

let amount=document.getElementById("total")
amount.innerText=`₹${totalPrice}`

let totalAmout=document.getElementById("gt");
totalAmout.innerText=`₹${totalPrice+30}`;