var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")
addpopupbutton.addEventListener("click",function(){
popupoverlay.style.display="block"
popupbox.style.display="block"
})

//selecting cancel button
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
event.preventDefault()
popupoverlay.style.display="none"
popupbox.style.display="none"
})
//selecting container,add-book,std-name-input,reg-no-input,birthdate-input,yearofstudy-input,grade-input
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var stdnameinput=document.getElementById("std-name-input")
var regnoinput=document.getElementById("reg-no-input")
var birthdateinput=document.getElementById("birthdate-input")
var gradeinput=document.getElementById("grade-input")
var yearofstudyinput=document.getElementById("yearofstudy-input")
addbook.addEventListener("click",function(event){
  event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","book-container")
div.innerHTML=`<h5>Student Name:${stdnameinput.value}</h5>
<h5>Register Number:${regnoinput.value }</h5>
<h5>D.O.B:${birthdateinput.value }</h5>
<h5>Grade:${gradeinput.value }</h5>
<h5>Year Of Study:${ yearofstudyinput.value }</h5>
 <button onclick="deletebook(event)">Delete</button>`
container.append(div)
popupoverlay.style.display="none"
popupbox.style.display="none"
})
function deletebook(event)
{
  event.target.parentElement.remove()
}