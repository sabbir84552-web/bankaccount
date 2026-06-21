 let phonenum="";
 let pin ="";
 let balance ="";
// second dilam iccha kori or name 
let secsdivid = document.getElementById("secsdivid")
let secsinputid = document.getElementById("secsinputid")
let secsainputid = document.getElementById("secsainputid")
let secsbid = document.getElementById("secsbid")
let secsperaid = document.getElementById("secsperaid")
// first screen ar element 
let stsdivid = document.getElementById("stsdivid")
let stsinputid = document.getElementById("stsinputid")
let stsainputid = document.getElementById("stsainputid")
let stsbid = document.getElementById("stsbid")
let stspid = document.getElementById("stspid")
let thirsdiv = document.getElementById("thirsdiv")
let cashinbid = document.getElementById("cashinbid")
let cashobid = document.getElementById("cashobid")
let cashinface  = document.getElementById("cashinface")
let cashoutface = document.getElementById("cashoutface")
let cashininput =document.getElementById("cashininput")
let cashoutinput =document.getElementById("cashoutinput")
let Addmoney =document.getElementById("Addmoney")
let cashoutinputb =document.getElementById("cashoutinputb")
let cashinerror =document.getElementById("cashinerror")
let cashouterror =document.getElementById("cashouterror")
let amount =document.getElementById("amount")


secsbid.addEventListener("click",()=>{
    if (secsinputid.value === "" || secsainputid.value ==="") {
        secsperaid.removeAttribute("hidden")
    }
    else{
        // console.log("kaj hoise");
        secsperaid.setAttribute("hidden",true)
        phonenum=secsinputid.value;
        pin=secsainputid.value;
        secsdivid.setAttribute("hidden",true)
        stsdivid.removeAttribute("hidden")       
    }
})
stsbid.addEventListener("click",()=>{
   if (stsinputid.value !==phonenum  || stsainputid.value !==pin) {
    // stspid.removeAttribute("hidden")
    stspid.removeAttribute("hidden")
    // thirsdiv.removeAttribute("hidden")
   }
   else{
    // stspid.setAttribute("hidden",true)
    // console.log(`hoy nai`);
    stspid.setAttribute("hidden",true)
    stsdivid.setAttribute("hidden",true)
    thirsdiv.removeAttribute("hidden")
   }
})
cashinbid.addEventListener("click",()=>{
  cashinface.removeAttribute("hidden")
  cashoutface.setAttribute("hidden",true)
})
cashobid.addEventListener("click",()=>{
cashoutface.removeAttribute("hidden")
cashinface.setAttribute("hidden",true)
})
Addmoney.addEventListener("click",()=>{
    if (cashininput.value ==="" || cashininput.value <=0) {
        cashinerror.removeAttribute("hidden")
    }
    else{
        cashinerror.setAttribute("hidden",true)
        let total = parseInt(amount.innerText) + parseInt(cashininput.value);
        amount.innerText = total
        cashininput.value=""
    }
})
cashoutinputb.addEventListener("click",()=>{
    if (cashoutinput.value ==="" || cashoutinput.value >amount.innerText) {
        cashouterror.removeAttribute("hidden")
        alert("insuffisient balance")
    }
    else{
        cashouterror.setAttribute("hidden",true)
        let total = parseInt(amount.innerText) - parseInt(cashoutinput.value);
        amount.innerText = total
        cashoutinput.value=""
    }
})



// === "create an account" বাটনে ক্লিক করলে রেজিষ্ট্রেশন পেজে নিয়ে যাবে ===
// stscreatid.addEventListener("click", () => {
//     stsdivid.setAttribute("hidden", true);     // লগইন পেজ হাইড
//     secsdivid.removeAttribute("hidden");       // রেজিষ্ট্রেশন পেজ শো
// });

// // === রেজিষ্ট্রেশন পেজের "login" বাটনে ক্লিক করলে লগইন পেজে ফেরত আনবে ===
// secdownlogid.addEventListener("click", () => {
//     secsdivid.setAttribute("hidden", true);    // রেজিষ্ট্রেশন পেজ হাইড
//     stsdivid.removeAttribute("hidden");        // লগইন পেজ শো
// });