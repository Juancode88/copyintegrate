// active navbar 

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on"); 
    }
}

// saving the infromation for dashboard
document.addEventListener("DOMContentLoaded", () => {
  const newsletterButton = document.getElementById("newsletter-btn");
  const usernameInput = document.getElementById('username');
  if (newsletterButton) {
      newsletterButton.addEventListener('click', () => saveUsername(usernameInput));
  }
});

function saveUsername(usernameInput) {
  const usernameValue = usernameInput.value.trim();

  if (usernameValue) {
      localStorage.setItem('lastUsername', usernameValue);
      usernameInput.value = ''; 
      alert("Nombre de usuario guardado con éxito.");
      console.log(usernameValue);
  } else {
      alert("Por favor, ingrese un nombre de usuario antes de guardar.");
  }
}
function getLastUsername() {
    const storedUsernames = localStorage.getItem('usernames');
    if (storedUsernames) {
        const usernameValues = JSON.parse(storedUsernames);
        
        // Return the last element in the array or null if there are no usernames
        return usernameValues.length > 0 ? usernameValues[usernameValues.length - 1] : null;
    }
    return null; // Return null if there are no stored usernames
}

// Export the function
export { getLastUsername };
// nav hide 

let navbar = document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navcollapse.classList.remove('show');
    })
})

