const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const nameInput = document.getElementById("name");
const Form = document.getElementById("form");
const nameLabel = document.querySelector(".nameLabel");
const emailInput = document.getElementById("email");
const emailLabel = document.querySelector(".emailLabel");
const textAreaInput = document.getElementById("textarea");
const textLabel = document.querySelector(".textLabel");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const navBar = document.querySelector(".nav-bar");
const buttons = document.querySelectorAll(".menu li");

const buttonClicks = () => {
  hamburger.dispatchEvent(new Event("click"));
};
for (let index of buttons) {
  index.addEventListener("click", buttonClicks);
}

//  now adding event listener
Form.addEventListener("submit", handleSubmit, false);
hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  menu.classList.toggle("block");
});
nameInput.addEventListener("click", function () {
  nameLabel.classList.add("on-click");
});
emailInput.addEventListener("click", function () {
  emailLabel.classList.add("on-click");
});
textAreaInput.addEventListener("click", function () {
  textLabel.classList.add("on-click");
});
btn.addEventListener("click", function () {
  this.classList.toggle("click");
  setTimeout(() => {
    this.classList.toggle("click");
  }, 200);
});
btn2.addEventListener("click", function () {
  this.classList.toggle("click");
  setTimeout(() => {
    this.classList.toggle("click");
  }, 100);
});

let oldValue = 0;
let newValue = 0;
window.addEventListener("scroll", (e) => {
  newValue = window.pageYOffset;
  if (oldValue < newValue) {
    navBar.setAttribute("id", "navbar");
  } else if (oldValue > newValue) {
    navBar.removeAttribute("id", "navbar");
  }
  oldValue = newValue;
});
function handleInputChange(e) {
  let { value, name } = e;
  console.log(value, name);
  let regex = "";
  switch (name) {
    case "name":
      regex = /^[A-Za-z ]+$/;
      break;
    case "email":
      regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      break;
    case "textarea":
      regex = /^(\S+\s+)+\S+$/;
      break;
    default:
      break;
  }
  let boolean = regex.test(value);
  console.log(boolean);
  console.log(value, name);
  if (boolean) {
    e.classList.remove("invalid-input");
  } else {
    e.classList.add("invalid-input");
  }
}

function handleSubmit(e) {
  e.preventDefault();

  // index.js

  const apiUrl = "https://sweetsound.onrender.com/contact-me";
  const postData = {
    message: nameInput.value,
    email: emailInput.value,
    name: textAreaInput.value,
  };

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };
  console.log(postData);
  fetch(apiUrl, fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("POST response:", data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
