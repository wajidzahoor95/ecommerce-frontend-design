// js/cart.js
// Loads cart from localStorage, allows quantity changes and removal

document.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartContainer");

  function render() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!container) return;
    if (cart.length === 0) {
      container.innerHTML = `<p class="text-gray-600 text-center">Your cart is empty.</p>`;
      return;
    }

    let total = 0;
    container.innerHTML = cart
      .map((item) => {
        total += item.price * item.qty;
        return `
        <div class="flex items-center justify-between border-b py-4">
          <div>
            <h3 class="font-medium">${item.title}</h3>
            <p class="text-gray-500 text-sm">$${item.price} × ${item.qty}</p>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="decreaseQty(${item.id})" class="px-3 py-1 bg-gray-200 rounded">-</button>
            <div class="px-3">${item.qty}</div>
            <button onclick="increaseQty(${item.id})" class="px-3 py-1 bg-gray-200 rounded">+</button>
            <button onclick="removeFromCart(${item.id})" class="text-red-500 ml-3">✖</button>
          </div>
        </div>
      `;
      })
      .join("");

    container.innerHTML += `
      <div class="flex justify-between text-xl font-semibold mt-6">
        <span>Total:</span>
        <span>$${total.toFixed(2)}</span>
      </div>
    `;
    // refresh header badge and popup if main.js is loaded
    window.refreshCartPopup && window.refreshCartPopup();
  }

  // expose helpers for buttons
  window.increaseQty = function (id) {
    const ci = cart.find((x) => x.id === id);
    if (!ci) return;
    ci.qty++;
    localStorage.setItem("cart", JSON.stringify(cart));
    render();
  };

  window.decreaseQty = function (id) {
    const ci = cart.find((x) => x.id === id);
    if (!ci) return;
    ci.qty--;
    if (ci.qty <= 0) cart = cart.filter((x) => x.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    render();
  };

  // removeFromCart is already defined in main.js but redefine safe fallback
  if (typeof window.removeFromCart !== "function") {
    window.removeFromCart = function (id) {
      cart = cart.filter((x) => x.id !== id);
      localStorage.setItem("cart", JSON.stringify(cart));
      render();
    };
  } else {
    // wrap main removeFromCart to also re-render here when used
    const mainRemove = window.removeFromCart;
    window.removeFromCart = function (id) {
      mainRemove(id);
      cart = JSON.parse(localStorage.getItem("cart")) || [];
      render();
    };
  }

  render();
});
