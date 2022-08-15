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
}

// click handler event
const caroselBtns=document.getElementsByClassName("carosel-btn");
for (const caroselBtn of caroselBtns) {
   caroselBtn.addEventListener("click", function () {
     console.log("carosel button is clicked");
   });
 }

//categories-items
const categoriesItems = document.getElementsByClassName("categories-items");
for (const categoriesItem of categoriesItems) {
  categoriesItem.classList.add("categories");
  // categoriesItem.style.backgroundColor='#007474';
}

// cards
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.addEventListener('dblclick', function () {
    card.classList.add("card-radiaus");
  })
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
emailBtn.addEventListener("click", function (event) {
  event.stopImmediatePropagation();
  console.log(alert('Successfully Send'));
});

// stay-section dubble click
document.getElementById("stay-section").addEventListener('dblclick', function () {
  const staySection = document.getElementById("stay-section");
  const emailsubBtn = document.getElementById("emailsub-btn");
  staySection.style.backgroundColor = '#007474';
  emailsubBtn.style.backgroundColor = '#1c2841';
})

//buy-nowBtn
const buyNowBtns=document.getElementsByClassName('buy-nowBtn');
for (const buyNowBtn of buyNowBtns) {
  buyNowBtn.addEventListener('click', function (event) {
    const removeItems = event.target.parentNode.parentNode;
    const removeItem = removeItems.style.display = "none";
    console.log(removeItem);
  })
}


// mouse enter event
const imgs = document.getElementsByClassName('img-event');
for (const img of imgs) {
  img.addEventListener('mouseenter', function () {
    img.setAttribute('src', 'images/js.jpg');
  })
  img.addEventListener('mouseout', function () {
    imgs[0].setAttribute('src','images/bags/bag-1.png');
    imgs[1].setAttribute('src','images/bags/bag-2.png');
    imgs[2].setAttribute('src','images/bags/bag-3.png');
    imgs[3].setAttribute('src','images/shoes/shoe-1.png');
    imgs[4].setAttribute('src','images/shoes/shoe-2.png');
    imgs[5].setAttribute('src','images/shoes/shoe-3.png');
  })
}