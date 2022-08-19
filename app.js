const newBook = document.querySelector(".addBook");
const dropdown = document.getElementById("readInput");
dropdown.addEventListener("change", function () {
    dropdown.style.color = "white", false
    dropdown.style.borderBottom = "2px solid #006fff";


    });
const inputs = document.querySelectorAll("input");
const errorMsg = document.querySelector(".test2");

const titleInput = document.querySelector("#title");
const pageInput = document.querySelector("#pages");
const authorInput = document.querySelector("#author");

const readVar = document.getElementById("readInput");

function showError() {
    if (titleInput.validity.valueMissing) {
        errorMsg.textContent = "Please complete all fields.";
        titleInput.style.borderBottom = "2px solid rgb(232, 39, 39)";
        

        // border-bottom: 2px solid #006fff;

    }
    if (authorInput.validity.valueMissing) {
        errorMsg.textContent = "Please complete all fields.";
        authorInput.style.borderBottom = "2px solid rgb(232, 39, 39)";
        

        // border-bottom: 2px solid #006fff;

    }
    if (pageInput.validity.valueMissing) {
        pageInput.style.borderBottom = "2px solid rgb(232, 39, 39)";
        

        // border-bottom: 2px solid #006fff;

    } 
    if (readVar.options[readVar.selectedIndex].text === 'status.') {
        errorMsg.textContent = "Please complete all fields.";

        readVar.style.borderBottom = "2px solid rgb(232, 39, 39)";

    }
    
    
}

titleInput.addEventListener('input', (event) => {
    if (titleInput.validity.valid) {

        titleInput.style.borderBottom = "2px solid #006fff";
    }
});
authorInput.addEventListener('input', (event) => {
    if (author.validity.valid) {

        authorInput.style.borderBottom = "2px solid #006fff";
    }
});
pageInput.addEventListener('input', (event) => {
    if (pageInput.validity.valid || pageInput.validity.typeMismatch) {
        pageInput.style.borderBottom = "2px solid #006fff";
    }
});
newBook.addEventListener('click', (event) => {

        if (!titleInput.validity.valid || !authorInput.validity.valid || !pageInput.validity.valid || readVar.options[readVar.selectedIndex].text === 'status.') {
        showError();


    } else {
        errorMsg.textContent = '';

        const title = inputs[0].value;
        const author = inputs[1].value;
        const pages = inputs[2].value;

        const read = readVar.options[readVar.selectedIndex].text;
        let b = new book(title, author, pages, read);
        b.addBookToLibrary();
        dropdown.style.color = "rgba(74,74,74,0.7)";
    }



});

const text = document.querySelector(".text");
const bookList = document.querySelector(".bookList");

let myLibrary = [];

class book {
    
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
    getInfo() {
        return 
    }
    get _title() {return this.title;}
    get _author() {return this.author;}
    get _pages() {return this.pages;}
    get _read() {return this.read;}
    addBookToLibrary() {   


        myLibrary.push(this);
    
        inputs.forEach(element => element.value = "");
        readVar.selectedIndex = 0;
        display();
    }
}


let counter = 0;
function display() {
    const currStatus = myLibrary[counter].read;
    //Adding to display
    const li = document.createElement("li");
    li.textContent = "title: " + myLibrary[counter]._title + "\r\n" + "author: " + myLibrary[counter]._author + "\r\n" + "page count: "
    + myLibrary[counter]._pages + "\r\n";  
    li.style.whiteSpace = "pre-line";


    bookList.appendChild(li);
    counter++;

    //Read Status button
    const readLabel = document.createElement("label");
    readLabel.textContent = "status: ";
    readLabel.style.color = "black";
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

    const stat = document.createElement("div");
    
    stat.classList.add("stat");
    li.appendChild(stat);
    stat.appendChild(readLabel);
    stat.appendChild(readStatus);
    stat.style.paddingBottom = "1.25rem";


    readStatus.appendChild(completed);
    readStatus.appendChild(progress);
    readStatus.appendChild(none);

    //Remove button
    const remove = document.createElement("button");
    const bottomBox = document.createElement("div");
    bottomBox.classList.add("bottomBox");
    li.appendChild(bottomBox);
    remove.classList.add("remove" + counter);
    remove.textContent = "Remove Book";

    bottomBox.appendChild(remove);

    

    remove.addEventListener('click', function () {
        li.remove();
    }, false);

    //Book Card Customization
   
    li.style.display = "grid";
    li.style.gridTemplateRows = "3fr 1fr 1fr";
    li.style.justifyContent = "center";
    li.style.alignItems = "center";
    li.style.textAlign = "center";
    
    li.style.backgroundColor = "#FFFFFF";

    li.style.fontSize = "1.2rem";
    li.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
    li.style.borderRadius = "20px";
    li.style.borderLeft = "10px solid #2e58ff";
    li.style.height =  "15rem";
    li.style.width = "20rem";


    //box dropdown customization
    readStatus.style.backgroundColor = "white";
    readStatus.style.border = "1px solid white";
    readStatus.style.borderRadius = "5px";
    readStatus.style.borderBottom = "2px solid #006fff";
    readStatus.style.height = "2rem";

    //Remove button customization
    remove.style.backgroundColor = "white";
    remove.style.height =  "2.5rem";
    remove.style.marginBottom = "1rem";
    remove.style.width = "7.5rem";
    remove.style.borderRadius = "15px";
    remove.style.border = "1px solid white";
    remove.style.borderBottom = "2px solid #006fff";
    remove.addEventListener("mouseenter", function () {
        remove.style.backgroundColor = "rgb(211, 211, 211)";
        remove.style.cursor = "pointer";
    });
    remove.addEventListener("mouseleave", function () {
        remove.style.backgroundColor = "white";
    });
}

myLibrary.push(new book("Multivariable Calculus!", "ANTON BIVENS", 999, "Completed"));
display();

