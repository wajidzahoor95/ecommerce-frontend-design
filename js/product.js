// js/product.js
// Renders single product on product.html using PRODUCTS from main.js

function getParam(name) {
  const p = new URLSearchParams(window.location.search);
  return p.get(name);
}

document.addEventListener("DOMContentLoaded", () => {
  const id = parseInt(getParam("id")) || 1;
  const p =
    typeof PRODUCTS !== "undefined" ? PRODUCTS.find((x) => x.id === id) : null;
  const root = document.getElementById("productRoot");
  if (!root || !p) {
    root &&
      (root.innerHTML = "<p class='text-gray-500'>Product not found.</p>");
    return;
  }

  root.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="h-96 bg-gray-100 overflow-hidden rounded"><img src="${
        p.img
      }" alt="${p.title}" class="object-cover w-full h-full"/></div>
      <div>
        <h1 class="text-2xl font-bold">${p.title}</h1>
        <div class="mt-2 text-yellow-500">⭐ ${p.rating}</div>
        <div class="mt-4 text-2xl font-bold">$${p.price.toFixed(2)}</div>
        <p class="mt-4 text-gray-600">${p.desc || ""}</p>
        <div class="mt-6 flex gap-2">
          <button id="addToCartBtn" class="bg-blue-600 text-white py-2 px-4 rounded">Add to cart</button>
          <a href="checkout.html" class="py-2 px-4 rounded border">Buy now</a>
        </div>
      </div>
    </div>
  `;

  const btn = document.getElementById("addToCartBtn");
  btn &&
    btn.addEventListener("click", () => {
      addToCart(p.id, 1);
      refreshCartPopup();
      alert("Added to cart");
    });
});
