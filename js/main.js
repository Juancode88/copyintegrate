// active navbar 

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on"); 
    }
}
// pass to ecommerce platform
const orderButton = document.getElementById("order-btn");

orderButton.addEventListener("click", () => {
  console.log("Order button clicked");
  window.location.href = "checkout.html";
});

// pass to ecommerce platform 2
const orderButton2 = document.getElementById("btn_order_2");

orderButton2.addEventListener("click", () => {
  console.log("Order button clicked");
  window.location.href = "checkout.html";
});

// pass to admin login 
const newsletterButton = document.getElementById("newsletter-btn");

newsletterButton.addEventListener("click", () => {
    console.log("Newsletter button clicked");
    window.location.href = "login.html";
});

// creation json for username 
/*
const usernameInput = document.getElementById('username');
const newsletterBtn = document.getElementById('newsletter-btn');
newsletterBtn.addEventListener('click', () => {
  const username = usernameInput.value;
  const userData = {
    username: username
  };
  const jsonString = JSON.stringify(userData);

  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonString
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});
*/
// creation json for username 
const usernameInput = document.getElementById('username');
export let userData = {};

// Function to save user data to the JSON object
function saveUserData() {
  const id = Date.now().toString(); // Generate a unique ID for the user
  const username = usernameInput.value.trim();
  userData[id] = { username };
  localStorage.setItem('userData', JSON.stringify(userData));
}
// Add an event listener to the button
button.addEventListener('click', saveUserData);

export default {
  userData
}
// nav hide 

let navbar = document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navcollapse.classList.remove('show');
    })
})

