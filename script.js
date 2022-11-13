let form = document.getElementById("form");
let fname = document.getElementById("firstName")
let lname = document.getElementById("lastName")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let address = document.getElementById("address")
let course = document.getElementById("course")
let timePeriod = document.getElementById("timePeriod")
let formcontrol1 =document.querySelector("form_control")


form.addEventListener("submit",function(evt){
    evt.preventDefault();
    inputCheck();

       
    
    // FormData
   
  
});
 function inputCheck(){
    let fnameValue = fname.value
    let lnameValue = lname.value
    let emailValue = email.value
    let phoneValue = phone.value
    let addressValue = address.value
    let courseValue = course.value
    let timePeriodValue = timePeriod.value

 

    // for First Name
    if(fnameValue === ""){
        setError(fname , "Please Enter First Name")
         
    }
    else if(!allLetter(fnameValue)){
        setError(fname, "Please Enter Valid Name")
         
    }
    else {
        setSuccess(fname)
          
    }

    // For Last Name
    if(lnameValue === ""){
        setError(lname , "Please Enter Last Name")
         
    }
    else if(!allLetter(lnameValue)){
        setError(lname, "Please Enter Valid Name")
         
    }
    else {
        setSuccess(lname)
          
     
    }

    // for Email
    if(emailValue=== ""){
        setError(email , "Please Enter Last Name")
         
    }
    else if(!isEmail(emailValue)){
        setError(email, "Please Enter Valid Name")
         
    }
    else {
        setSuccess(email)
          
     
    }

    // for Phone Number  
    if(phoneValue ===""){
        setError(phone,"Pleae Enter Your Phone Number")
         
    }
    else if(!checkPhoneValue(phoneValue)){
        setError(phone,"Please Enter Number in this format : +91-00000-00000")
         
    }
    else{
        setSuccess(phone)
          
     
    }

    // for Address
    if(addressValue === ""){
        setError(phone,"Pleae Enter Your Address")
         
    }
    else if(!checkAddress(addressValue)){
        setError(address,"Pleae Enter a valid Address")
         
    }
    else{
        setSuccess(address)
          
    }

    // for Course 
    if(courseValue === "select"){
        setError(course,"Please Select a Course")
         
    }
    else{
        setSuccess(course)  
          
    }

    // for Time Period
    if(timePeriodValue==="select"){
        setError(timePeriod,"Please Select a Time Period")
         
    }
    else{
        setSuccess(timePeriod)
          
    }

    // for Subjects
    let subject =document.querySelector("#subjects")
    let a=[]
    let check=document.getElementsByName("subjects") 
    for(let i = 0 ; i< check.length ; i++ ){
        if(check[i].checked){
            a.push(check[i].value)
        }
    }

    if(a.length < 2){
        setError(subject,"Select Atleast 2 Subjects")
         
    }
    else{
        setSuccess(subject)
          
    }
       
   validation()
   

}


// Check the Validation of Form

function validation(){
    
    let formControl = document.getElementsByClassName("form_control")
    let count = formControl.length-1
    for(let i =0;i< formControl.length;i++){
        if(formControl[i].className === "form_control success"){
            let sRate = 0+i;
            setData(count ,sRate)
           
        }
        else {
            return false
        }
    }
}

function setData (count ,sRate ){
    if(count === sRate){
        // FormData
        let data = new FormData(form)
        // let arr= []
        // for(let val of data.values()){
        //   arr.push(val)
        // }
        // console.log(data)
        // console.log(arr)
    
         for (const pair of data.entries()) {
              console.log(`${pair[0]} : ${pair[1]}`);
        }
    
    
       document.querySelector("#fname1").textContent = data.get("firstName")
       document.querySelector("#lname1").textContent = data.get("lastName")
       document.querySelector("#email1").textContent = data.get("email")
       document.querySelector("#phone1").textContent = data.get("phone")
       document.querySelector("#address1").textContent =data.get("address")
       document.querySelector("#course1").textContent = data.get("course")
       document.querySelector("#subjects1").textContent =data.getAll("subjects")
       document.querySelector("#timePeriod1").textContent = data.get("timePeriod")

       alert("Submitted Sucessfully")
    }
}




 function setError(input ,message){
    let formControl = input.parentElement;
    formControl.className = "form_control error"

    formControl.querySelector("small").textContent = message  
 }

function setSuccess(input){
    let formControl = input.parentElement;
    formControl.className = "form_control success"

    formControl.querySelector("small").textContent = "Successful"  
}


 function allLetter(inputtxt)
 {
  var letters = /^[A-Za-z]+$/;
  if(inputtxt.match(letters))
    {
        return true
    }
  else
    {
        return false
    }
 }


 function isEmail(input){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);
}


let onlyNumber = (evt)=>{
    let ch = String.fromCharCode(evt.which)
    if(!(/[^a-zA-Z]/).test(ch)){
        evt.preventDefault();
    }

}

function checkAddress(text){
    let re= /^[a-zA-Z0-9\s#,'-]*$/
    if(text.match(re)){
     return true
    }
    else false
}

// ^((\+)?(\d{2}[-]))?(\d{10}){1}?$

// /^[a-zA-Z0-9\s#,'-]*$/

function checkPhoneValue(text){
    let reg=/^((\+)?((\91)[-]))\d{5}-\d{5}$/
    if(text.match(reg)){
     return true
    }
    else {
        return false
    }
}

// function checkDate(input){
//     let arr = input.split("-")
//     let date = new Date()
//    if( date.getDate() > arr[1]){
//     return true
//    }
//    else {
//         return false
//    }
// }


// let a=[]
// let check=document.getElementsByName("subjects") 
// for(let i = 0 ; i< check.length ; i++ ){
//    if(check[i].checked){
//     a.push(check[i].value)
//    }

// }
// if(a.length < 2){
//     alert("select atleast 2 subjects")
// }
// console.log(a)
//  document.querySelector("#result li #subjects1").innerText = a