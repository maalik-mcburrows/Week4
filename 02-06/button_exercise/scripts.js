"use strict";

const holderList = document.querySelectorAll(".wordInput");
const clickTheButton = document.querySelector("#myButton");
const myListArea = document.querySelector("#myList");

function generateMyList(list){
    const listElement = document.createElement("ul")
    
    list.forEach(function(wordInput){
        const newText = document.createElement("li");
        newText.innerHTML = wordInput.value;
        listElement.appendChild(newText); 
        });
        return list;
}

clickTheButton.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("fsdhjs");
    const theList = generateMyList(holderList);
    generateMyList();
    // myListArea.appendChild();

});