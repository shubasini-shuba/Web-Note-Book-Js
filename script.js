
//select overlay, popupbox 
var overlay = document.querySelector(".overlay");
var popupbox = document.querySelector(".popup-section");

function openpop() {

    overlay.style.display = "block";
    popupbox.style.display = "block";
}
function cancelpop() {

    overlay.style.display = "none";
    popupbox.style.display = "none";

}
//select note-section 
var notesection = document.querySelector(".note-section");
var addnote = document.getElementById("addnote");
var popuptitle = document.getElementById("title-input");
var popupauthor = document.getElementById("author-input");
var popupdes = document.getElementById("description-input");

addnote.addEventListener("click", function (event) {

    var div = document.createElement("div");
    div.setAttribute("class", "note-body");
    div.innerHTML = `<h2 class="note-title">${popuptitle.value}</h2>
    <h4 class="note-author">${popupauthor.value}</h4>
    <p class="note-description">${popupdes.value}</p>
    <button onclick="deletenote(event)" class="delete-note">Delete</button>`;

    notesection.append(div);

    overlay.style.display = "none";
    popupbox.style.display = "none";

    popuptitle.value = "";
    popupauthor.value = "";
    popupdes.value = "";
});

// select delete note

function deletenote(event) {
    event.target.parentElement.remove();
}
