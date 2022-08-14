// colorCodes = #1c2841,#007474
// body
const body = document.getElementById("body");
body.style.color = "#1c2841";
body.style.backgroundColor = "#fceae8";

// navbar color
const navBar = document.getElementById("navbar");
navBar.style.backgroundColor = "#007474";

// buttons
const buttons = document.getElementsByClassName("btn");
for (const button of buttons) {
  button.style.backgroundColor = "#007474";
    button.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    console.log("buy now button is clicked");
  });
}

//categories-items
const categoriesItems = document.getElementsByClassName("categories-items");
for (const categoriesItem of categoriesItems) {
  categoriesItem.classList.add("categories");
}
// cards
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.classList.add("card-radiaus");
}

// email submit button
const emailBtn = document.getElementById("emailsub-btn");
const emailInput = document.getElementById("exampleInputEmail1");
emailInput.addEventListener("keyup", function (event) {
  const matching = event.target.value;
  const found = matching.match("@gmail.com");
  if (found) {
    emailBtn.removeAttribute("disabled");
  } else {
    emailBtn.setAttribute("disabled", true);
  }
});
emailBtn.addEventListener('click', function (event) {
    event.stopImmediatePropagation();
    console.log('email clicked');

})