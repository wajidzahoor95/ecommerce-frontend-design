// js/checkout.js
document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const summary = document.getElementById("checkoutSummary");
  const totalEl = document.getElementById("checkoutTotal");
  const placeOrderBtn = document.getElementById("placeOrder");

  if (!summary || !totalEl) return;

  if (cart.length === 0) {
    summary.innerHTML = `<p class="text-gray-500">Your cart is empty.</p>`;
    totalEl.innerText = "$0.00";
  } else {
    let total = 0;
    summary.innerHTML = cart
      .map((item) => {
        total += item.price * item.qty;
        return `<div class="flex justify-between"><span>${item.title} × ${
          item.qty
        }</span><span>$${(item.price * item.qty).toFixed(2)}</span></div>`;
      })
      .join("");
    totalEl.innerText = "$" + total.toFixed(2);
  }

  placeOrderBtn &&
    placeOrderBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Cart is empty.");
        return;
      }
      // Fake order placement
      alert("Order placed! Thank you.");
      localStorage.removeItem("cart");
      // after clearing, refresh badge/popups on other pages if they exist
      window.refreshCartPopup && window.refreshCartPopup();
      window.location.href = "index.html";
    });
});
