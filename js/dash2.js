//Generation username personalization
import { getLastUsername } from './main.js'; // Adjust the path as necessary

document.addEventListener("DOMContentLoaded", () => {
	const usernameTitle = document.getElementById("username-title");
  
	  // Use the imported function to get the last username
	const lastUsername = getLastUsername();
	  
	  // Update the h1 title with the last username or default message
	if (lastUsername) {
		usernameTitle.textContent = `Hello, ${lastUsername}!`;
		console.log(lastUsername);
	} else {
		usernameTitle.textContent = "Hello!";
	}
}); 