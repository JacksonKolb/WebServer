const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});



const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mccarthy.jpg") {
    myImage.setAttribute("src", "images/samdarnold.jpg");
  } else {
    myImage.setAttribute("src", "images/mccarthy.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.addEventListener("click", () => {
  setUserName();
})

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Nine is Unleashed, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Nine is Unleashed, ${storedName}`;
}
