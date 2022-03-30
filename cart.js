
let item=document.getElementById("items");
let buttonarea= document.getElementById("button");
var items =JSON.parse(localStorage.getItem("cart"));
console.log(items);

function home(){
    let len =document.getElementById("cartlength");
    len.innerHTML=`Total Cart Item -${items.length}`;
}
home();

var totalPrice=0;



if(items.length==0){
    item.innerHTML=`Your Carrt is Empty`;
}

else{

    function appenddata(items){
    item.innerHTML=null;
    items.forEach((element,index) => {

         totalPrice+=(element.product_price);

        let div= document.createElement("div");

        let image=document.createElement("img");
        image.src=element.product_image;
    
        let name= document.createElement("p");
        name.textContent=element.product_name;

        let price= document.createElement("p");
        price.textContent=`MRP ₹ ${element.product_price}`;

       let remove =document.createElement("button");
       remove.textContent="Remove";
       remove.addEventListener("click",function(){
        deletetask(index);
        
       });
        
        div.append(image,name,price,remove);

        item.append(div);
    });

  };
 appenddata(items);
}

function deletetask(index){
    items.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(items));
   
   
    appenddata(items);
    window.location.href="cart.html";
}




let tpdiv=document.getElementById("totalprice");
tpdiv.textContent=`Total Amount-₹ ${totalPrice}`;
console.log(totalPrice);

localStorage.setItem("totalAmount",JSON.stringify(totalPrice));


