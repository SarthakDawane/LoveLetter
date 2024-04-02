const yourName = document.querySelector("span");
const addName = prompt("Add Your Name To See Further.");

let profileImage = document.getElementById("profile-pic");
let uploadImage = document.getElementById("upload-image");
let clearButton = document.querySelector("label");
let card = document.getElementById("card")

uploadImage.onchange = function(){
    profileImage.src = URL.createObjectURL(uploadImage.files[0]);
    clearButton.style.display = "none";
    
    card.style.height="auto";
}

yourName.style.color = "red";

yourName.innerHTML = addName;
