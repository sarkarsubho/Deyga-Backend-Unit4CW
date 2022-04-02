const makeAPIcall = async()=>{

    try{
        let res = await fetch("https://young-lake-81950.herokuapp.com/data")

        let data = await res.json()

    
        return data
    }
    catch(err){
        console.error("err:",err)
    }

}
function addtocart(){
    console.log("Adding to cart")
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
 }
 


function appendData(data,parent){

    data.forEach(element => {
        console.log(element)
    
        
        let carddiv = document.createElement("div")
        carddiv.setAttribute('id',"card")
    
        let img = document.createElement('img')
        img.src = element.imageurl

        let name = document.createElement("h2")
        name.setAttribute("id","name")
        name.innerText = element.Name

        let revdiv = document.createElement('div')
        revdiv.setAttribute("id","revdiv")

        let revcount = randomNum(200, 2000)
        let revn = document.createElement('p')
        revn.setAttribute("id","rev")
        revn.innerText = `${revcount} reviews`

        let star1 = document.createElement('span')
        star1.setAttribute("class","fa fa-star checked")
        let star2 = document.createElement('span')
        star2.setAttribute("class","fa fa-star checked")
        let star3 = document.createElement('span')
        star3.setAttribute("class","fa fa-star checked")
        let star4 = document.createElement('span')
        star4.setAttribute("class","fa fa-star checked")
        let star5 = document.createElement('span')
        star5.setAttribute("class","fa fa-star checked")

        revdiv.append(star1,star2,star3,star4,star5,revn)
              
        let pricetag = +(randomNum(100, 600))
        let price = document.createElement('p')
        price.setAttribute('id','price')
        price.innerText = `MRP ₹ ${pricetag.toFixed(2)} `

        let delprice = document.createElement('del')
        delprice.setAttribute('id','delprice')
        delprice.innerText = `${pricetag+102}`
        price.append(delprice)
        
     
        let cartbtn = document.createElement('button')
        cartbtn.setAttribute("id","cartbtn")
        cartbtn.innerText = "Add to Cart"
        cartbtn.onclick = addtocart()
          

    
        carddiv.append(img,name,revdiv,price,cartbtn)
        parent.append(carddiv)
        
    });
    
    }


export {makeAPIcall,appendData}
 