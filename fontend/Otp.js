  let value="1234";
  function myValue(){
      let otp=document.getElementById("val").value;
      console.log(otp)
      if(otp==value){
          alert("Your Order has been placed! Happy Buying");
          window.location.href="index.html"
      }
      else {
          alert("Invalid OTP")
      }
  }