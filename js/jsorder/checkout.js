//pass to order
const shopButton = document.getElementById("start-shop");

shopButton.addEventListener("click", () => {
  console.log("Checkout payer open");
  window.location.href = "order.html";
});
