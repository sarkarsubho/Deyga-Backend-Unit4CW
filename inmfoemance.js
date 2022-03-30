let totalAmount=JSON.parse(localStorage.getItem("totalAmount"));
console.log(totalAmount);


let parent=document.getElementById("items")



// function go(){
// let firstname=document.getElementById("fs").value;
// let lastname=document.getElementById("ls").value;
// let address=document.getElementById("ad").value;
// let appertment=document.getElementById("ap").value;
// let countrey=document.getElementById("cu").value;
// let pin= document.getElementById("pin").value;
// let city=document.getElementById("live").value;
// let state=document.getElementById("state").value;
// let phno=document.getElementById("number").value;
// let altphno=document.getElementById("alt").value;
// let obj={
//     firstName:firstname,
//     lastName:lastname,
//     Address:address,
//     Appertment:appertment,
//     Countrey:countrey,
//     Pin:pin,
//     City:city,
//     State:state,
//     Phone:phno,
//     Alternative:altphno
// };

// localStorage.setItem("oderuseradd",JSON.stringify(obj));
// window.location.href="payment.html"
// }

// function returnto(){
//     window.location.href="cart.html"
// }

// let cartItems= JSON.parse(localStorage.getItem("cart"));
// let totalPrice=0;

// cartItems.array.forEach((element,parent) => {

//     totalPrice+=element.price;
    
//     let div =document.createElement("div");

//     let image_div =document.createElement("div");
//     let image=document.createElement("img");
//     image.src= element.image;
//     image_div.append(image);

//     let text_div =document.createElement("div");
//     let name=document.createElement("p");
//     name.innerText=element.name;

//     let price =document.createElement("p");
//     price.innerText=element.price;

//     text_div.append(name,price)

//     div.append(image_div,text_div);

//     parent.append(div);
// });

let amount=document.getElementById("total")
amount.innerText=`₹${totalAmount}`

let totalAmout=document.getElementById("gt");
totalAmout.innerText=`₹${totalAmount+30}`;

function discount(){
    let input =document.getElementById("ele").value;

    if(input==="masai30"){
        let distotal= +(totalAmount*.7+30);
        localStorage.setItem("disAmount",JSON.stringify(distotal));
        amount.textContent=distotal;
        totalAmout.textContent=distotal;
       
    }
}