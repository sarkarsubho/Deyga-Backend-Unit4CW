// import navbar from '/navbar.js'
// let navbar_div=document.getElementById("navbar");
// navbar_div.innerHTML=navbar()
// import country_code from '/Data.js'
// import footer from '/footer.js'
// let country_div=document.getElementById("country-code");
// country_div.innerHTML=country_code()
// let footer_div=document.getElementById("footer");
// footer_div.innerHTML=footer()

// document.querySelector("form").addEventListener("submit",getData);
// let dataArr=JSON.parse(localStorage.getItem("userArr"))||[];
// function getData(event){
//     event.preventDefault();
//    let First=document.getElementById("first").value;
//    let last=document.getElementById("last").value
//    let email=document.getElementById("eml").value
//    let pass=document.getElementById("pass").value;
//    let objData={
//        First:First,
//        Last:last,
//        Email:email,
//        Pass:pass
//    }
//    dataArr.push(objData);
//    localStorage.setItem("userArr",JSON.stringify(dataArr))
//    alert("Your Details are successfully Submited");
//    window.location.href="Login.html"
// }


import navbar from '/navbar.js'
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()
import country_code from '/Data.js'
import footer from '/footer.js'
let country_div=document.getElementById("country-code");
country_div.innerHTML=country_code()
let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer()

document.querySelector("form").addEventListener("submit",getData);
let dataArr=JSON.parse(localStorage.getItem("userArr"))||[];
async function getData(event){
    try{
        event.preventDefault();
   let First=document.getElementById("first").value;
   let last=document.getElementById("last").value
   let email=document.getElementById("eml").value
   let pass=document.getElementById("pass").value;
   var objData={
       firstName:First,
       lastName:last,
       email:email,
       password:pass
   }
   ,
   objData = JSON.stringify(objData);
    }
    catch(err)
    {
        console.log(err.message);
    }

    let reg_api = `https://authodegya.herokuapp.com/registeration`;

    let resp = await fetch(reg_api , {
        method : "POST",
        body : objData,
        headers : {
            "content-Type" : "application/json"
        }
    })

    let data = await resp.json();
    console.log(data);
    if(data.error == false)
    {
        console.log(data.registeration.firstName)
        alert("Registeration succesful");
        window.location.href="Login.html"

    }
    else{
        console.log(err.message)
        alert("user not exist !")
    }

//    dataArr.push(objData);
//    localStorage.setItem("userArr",JSON.stringify(dataArr))
//    alert("Your Details are successfully Submited");
   
}



