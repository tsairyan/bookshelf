const newBook = document.querySelector(".addBook");
newBook.addEventListener('click', addBookToLibrary);
const text = document.querySelector(".text");
const bookList = document.querySelector(".bookList");

let myLibrary = [];

function book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.getInfo = function() {
        return "Title: " + title + "\r\n" + "Author: " + author + "\r\n" + "Page Count: "
         + pages + "\r\n" + "Reading Status: " + read + "\r\n";
    }
}

function addBookToLibrary() {   
    const inputs = document.querySelectorAll("input");
    const title = inputs[0].value;
    const author = inputs[1].value;
    const pages = inputs[2].value;
    const readVar = document.getElementById("readInput");
    const read = readVar.options[readVar.selectedIndex].text;

    myLibrary.push(new book(title, author, pages, read));

    inputs.forEach(element => element.value = "");
    readVar.selectedIndex = 0;
    display();
}

let counter = 0;
function display() {
    const currStatus = myLibrary[counter].read;
    //Adding to display
    const li = document.createElement("li");
    li.textContent = myLibrary[counter].getInfo();
    li.style.whiteSpace = "pre-line";

    //Book Card Customization
    li.style.border = "solid 1px black";

    li.style.height =  "100%";

    bookList.appendChild(li);
    counter++;

    //Read Status button
    const readLabel = document.createElement("label");
    readLabel.textContent = "Status";
    readLabel.setAttribute("for", "status");

    const readStatus = document.createElement("select");
    readStatus.setAttribute("name", "status");
    readStatus.setAttribute("id", "select");

    const completed = document.createElement("option");
    completed.textContent = "Completed";
    const progress = document.createElement("option");
    progress.textContent = "In-Progress";
    const none = document.createElement("option");
    none.textContent = "Not Started";
    switch (currStatus) {
        case "Completed":
        completed.setAttribute("selected", "true");
        break;
        case "In-Progress":
        progress.setAttribute("selected", "true");
        break;
        case "Not Started":
        none.setAttribute("selected", "true");
        break;
    }

    li.appendChild(readLabel);
    li.appendChild(readStatus);
    readStatus.appendChild(completed);
    readStatus.appendChild(progress);
    readStatus.appendChild(none);

    //Remove button
    const remove = document.createElement("button");
    remove.classList.add("remove" + counter);
    remove.textContent = "Remove Book";
    const br = document.createElement("br");
    li.appendChild(br);
    li.appendChild(remove);

    remove.addEventListener('click', function () {
        li.remove();
    }, false);

        
}
