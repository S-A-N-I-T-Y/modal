"use strict";

// Get modal, and buttons

let modalContainer = document.getElementById("modal-container");
let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let closebtn = document.getElementById("close");

yes.addEventListener("click", openModal1);
no.addEventListener("click", openModal2);
closebtn.addEventListener("click", closeModal);
modalContainer.addEventListener("click", closeModal);

function openModal1() {
  modalContainer.style.display = "block";
  modal1.style.display = "block";
}
function openModal2() {
  modalContainer.style.display = "block";
  modal2.style.display = "block";
}
function closeModal() {
  modalContainer.style.display = "none";
  modal1.style.display = "none";
  modal2.style.display = "none";
}
