const passCard = document.getElementById('btn-card');

//pass to return initial page
passCard.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Home return button clicked");
    window.location.href = 'credictcard.html'; 
});

import{ payer} from './carrito'; 

document.addEventListener("DOMContentLoaded", () => {
	const userPayer = document.getElementById("totalformule");
  
	  // Use the imported function to get the last username
	const calculatePayer = payer();
	  
	  // Update the h1 title with the last username or default message
	if (calculatePayer) {
		userPayer.textContent = `$ ${calculatePayer} Cop`;
		console.log(calculatePayer);
	} else {
		userPayer.textContent = "$ error calculated";
	}
}); 