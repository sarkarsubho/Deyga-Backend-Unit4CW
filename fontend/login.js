import navbar from '/navbar.js'
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()
import country_code from '/Data.js'
let country_div=document.getElementById("country-code");
country_div.innerHTML=country_code()
import footer from '/footer.js'
let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer()


document.querySelector("form").addEventListener("submit",log);
var regUser=JSON.parse(localStorage.getItem("userArr"));
console.log(regUser)
// console.log(regUser)
function log(event){
    event.preventDefault();
    var em=document.querySelector("#inps").value;
    var pass=document.querySelector("#inp").value;
    // console.log(em,pass)
       var flag=false;
       let first=0;
       let email=0;
    for(var i=0;i<regUser.length;i++){
        if((em==regUser[i].Email)&&(pass==regUser[i].Pass)){
            flag=true;
            first=regUser[i].First;
            email=regUser[i].Email;
        }
    }
    let dataArr=[];
    if(flag==true){
        let show=document.getElementById("show");
        show.textContent=first;
        dataArr.push(first,email)
       localStorage.setItem("regUsers",JSON.stringify(dataArr));
       alert("login Success.");
        window.location.href="allproduct.html";
    }
    else{
       alert("Your email or passworrd was incorrect")
    }
}