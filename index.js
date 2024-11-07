const notesContainerEl = document.querySelector(".notesContainer");
const createBtnEl = document.querySelector(".createBtn");

createBtnEl.addEventListener("click",()=>{
    const noteEl = document.createElement("div");
    const pEl = document.createElement("p");
    const imgEl = document.createElement("img");
    noteEl.className = "note";
    imgEl.src = "delete.png";
    pEl.setAttribute("contenteditable","true")
    noteEl.appendChild(pEl);
    noteEl.appendChild(imgEl);
    notesContainerEl.appendChild(noteEl);
})

notesContainerEl.addEventListener("click",(event)=>{
    if(event.target.tagName==="IMG"){
        event.target.parentElement.remove();
        updateNotesStorage();
    }
    else if(event.target.tagName==="P"){
        noteEls = document.querySelectorAll(".note");
        noteEls.forEach(element => {
            element.onkeyup = function(){
                updateNotesStorage();
            }
        });
    }
})

document.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

function showNotes(){
    notesContainerEl.innerHTML = localStorage.getItem("notes");
}

function updateNotesStorage(){
    localStorage.setItem("notes",notesContainerEl.innerHTML);
    }

showNotes();