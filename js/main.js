// js/main.js
// Shared products, render logic, cart API (localStorage), and UI bindings

// ---------- Products dataset ----------
const PRODUCTS = [
  {
    id: 1,
    title: "Wireless Headphones",
    category: "Audio",
    price: 79.99,
    rating: 4.6,
    img: "https://img.drz.lazcdn.com/static/pk/p/fb196831b05dec24592d34fdb19267a7.jpg_960x960q80.jpg_.webp",
    desc: "Comfortable and long battery life.",
  },
  {
    id: 2,
    title: "Smartphone Pro",
    category: "Phones",
    price: 699.0,
    rating: 4.8,
    img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg",
    desc: "Powerful processor and great camera.",
  },
  {
    id: 3,
    title: "Mirrorless Camera",
    category: "Cameras",
    price: 449.5,
    rating: 4.4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjlXqSP5tAkRA-RRboKYxAHMrP7hc5kcVnMA&s",
    desc: "Compact camera for creators.",
  },
  {
    id: 4,
    title: "Smartwatch X",
    category: "Wearables",
    price: 199.99,
    rating: 4.2,
    img: "https://temptindia.com/cdn/shop/files/Artboard1_3adff1c4-550f-4c4d-ab5d-674c74b8e68a.png?v=1727173896",
    desc: "Fitness tracking & notifications.",
  },
  {
    id: 5,
    title: "Bluetooth Speaker",
    category: "Audio",
    price: 59.99,
    rating: 4.1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2c09eR559z61xZyuU65ufMken8Kr3UMzcg&s",
    desc: "Portable with great sound.",
  },
  {
    id: 6,
    title: "Earbuds NC",
    category: "Audio",
    price: 129.99,
    rating: 4.7,
    img: "https://stoore.ae/cdn/shop/files/Anker-Soundcore-True-Wireless-Earbuds-R50i-2-6.jpg?v=1730714442&width=2048",
    desc: "Noise cancelling earbuds.",
  },
  {
    id: 7,
    title: "Gaming Laptop GX15",
    category: "Computers",
    price: 1199.99,
    rating: 4.7,
    img: "https://i.rtings.com/assets/pages/6dRuEBex/best-gaming-laptops-20242028-medium.jpg?format=auto",
  },
  {
    id: 8,
    title: "Mechanical Keyboard RGB",
    category: "Accessories",
    price: 89.99,
    rating: 4.5,
    img: "https://images.indianexpress.com/2021/06/Corsair-Mechanical-Keyboard.jpg?w=414",
    desc: "RGB backlit mechanical keyboard with blue switches.",
  },
  {
    id: 9,
    title: "4K LED Smart TV 43”",
    category: "TV",
    price: 349.99,
    rating: 4.3,
    img: "https://m.media-amazon.com/images/I/71S8U9VzLTL._AC_SL1500_.jpg",
    desc: "Ultra HD display with smart features.",
  },
  {
    id: 10,
    title: "Modern Wooden Dining Table",
    category: "Furniture",
    price: 499.99,
    rating: 4.8,
    img: "https://woodc.pk/wp-content/uploads/2023/02/wjfvd.webp",
    desc: "Elegant wooden dining table for 6 people with a sleek finish.",
  },
  {
    id: 11,
    title: "Men's Leather Jacket",
    category: "Men's Clothing",
    price: 199.99,
    rating: 4.6,
    img: "https://ultimateleather.pk/wp-content/uploads/2021/02/Black-Artificial-Leather-Jacket.jpg",
    desc: "Stylish genuine leather jacket, perfect for casual or formal outings.",
  },
  {
    id: 12,
    title: "Women's Summer Dress",
    category: "Women's Clothing",
    price: 79.99,
    rating: 4.4,
    img: "https://img.kwcdn.com/product/fancy/b29c8a7f-dc0c-477c-9d62-daefa43016fa.jpg?imageView2/2/w/500/q/60/format/webp",
    desc: "Lightweight and breathable summer dress with floral patterns.",
  },
  {
    id: 13,
    title: "Ergonomic Office Chair",
    category: "Furniture",
    price: 299.99,
    rating: 4.2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSs0D_0bCC26TyabOvPy5GWWW9WXBj81ywQ&s",
    desc: "Comfortable chair with adjustable height and lumbar support.",
  },
  {
    id: 14,
    title: "Men's Running Shoes",
    category: "Men's Clothing",
    price: 89.99,
    rating: 4.0,
    img: "https://trex.com.pk/uploads/trex/WSlQLhK1yatIZbxFhBXzaukh4IhtJXaMjGA2KRvX.jpg",
    desc: "Lightweight and durable running shoes for daily workouts.",
  },
  {
    id: 15,
    title: "Women's Handbag",
    category: "Women's Clothing",
    price: 129.99,
    rating: 4.5,
    img: "https://spunkymart.pk/cdn/shop/files/women-handbag-large-totes.jpg?v=1715174034",
    desc: "Elegant handbag made from premium materials, perfect for all occasions.",
  },
  {
    id: 16,
    title: "Wooden Bookshelf",
    category: "Furniture",
    price: 199.99,
    rating: 4.3,
    img: "https://img.drz.lazcdn.com/static/pk/p/c7822c15283652ed2536d36a2d0bee1c.jpg_720x720q80.jpg",
    desc: "Spacious 5-tier bookshelf made of solid wood for home or office.",
  },
  {
    id: 17,
    title: "Men's Casual T-Shirt",
    category: "Men's Clothing",
    price: 29.99,
    rating: 4.1,
    img: "https://img.drz.lazcdn.com/static/pk/p/c668df3954374fd7ba0ef60597d0e5cf.jpg_720x720q80.jpg",
    desc: "Comfortable cotton t-shirt available in multiple colors and sizes.",
  },
  {
    id: 18,
    title: "Women's Sneakers",
    category: "Women's Clothing",
    price: 69.99,
    rating: 4.9,
    img: "https://stylestryproductionwls47sou4z.cdn.e2enetworks.net/images/products/medium/917f0b05fb1517b0e53ad4834462aef1c1794c61.webp",
    desc: "Stylish and lightweight sneakers for daily wear and sports.",
  },
];

// ---------- Cart API ----------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  refreshCartBadge();
  renderCartPopup();
}

function addToCart(id, qty = 1) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;

  const existing = cart.find((c) => c.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ ...product, qty });

  saveCart();

  const cartPopup = document.getElementById("cartPopup");
  if (cartPopup) {
    cartPopup.classList.remove("hidden");
    setTimeout(() => cartPopup.classList.add("hidden"), 2000);
  }
}
window.addToCart = addToCart;

function setQty(id, qty) {
  const item = cart.find((x) => x.id === id);
  if (!item) return;
  item.qty = qty;
  if (item.qty <= 0) cart = cart.filter((x) => x.id !== id);
  saveCart();
}
window.setQty = setQty;

function removeFromCart(id) {
  cart = cart.filter((x) => x.id !== id);
  saveCart();
}
window.removeFromCart = removeFromCart;

function refreshCartBadge() {
  const badge = document.getElementById("cartCount");
  if (!badge) return;
  const totalQty = cart.reduce((s, x) => s + (x.qty || 0), 0);
  if (totalQty === 0) badge.classList.add("hidden");
  else {
    badge.classList.remove("hidden");
    badge.innerText = totalQty;
  }
}

// ---------- Categories & Products ----------
let selectedCategory = "All";
let perPage = 6;
let currentPage = 1;

function renderCategories() {
  const container = document.getElementById("categoryList");
  if (!container) return;

  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];
  container.innerHTML = "";
  categories.forEach((c) => {
    const li = document.createElement("li");
    li.innerHTML = `<button onclick="setCategory('${c}')" class="w-full text-left py-2 px-2 rounded hover:bg-gray-100">${c}</button>`;
    container.appendChild(li);
  });
}

function setCategory(category) {
  selectedCategory = category;
  currentPage = 1;
  renderProducts();
}
window.setCategory = setCategory;

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const qEl = document.getElementById("searchInput");
  const priceRange = document.getElementById("priceRange");
  const q = qEl ? qEl.value.toLowerCase() : "";
  const maxPrice = priceRange ? parseFloat(priceRange.value) : Infinity;

  let filtered = PRODUCTS.filter(
    (p) =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(q) &&
      p.price <= maxPrice
  );

  document.getElementById("productCount") &&
    (document.getElementById("productCount").innerText = filtered.length);

  const show = filtered.slice(0, perPage * currentPage);

  grid.innerHTML = "";
  show.forEach((p) => {
    const card = document.createElement("article");
    card.className = "bg-white shadow rounded-lg p-4 border";
    card.innerHTML = `
      <div class="h-40 bg-gray-100 rounded flex items-center justify-center mb-3 overflow-hidden">
        <img src="${p.img || "https://via.placeholder.com/300x200"}" alt="${
      p.title
    }" class="object-cover w-full h-full"/>
      </div>
      <h3 class="line-clamp-2 font-medium">${p.title}</h3>
      <div class="flex justify-between items-center mt-2">
        <span class="font-bold">$${p.price.toFixed(2)}</span>
        <span class="text-yellow-500 text-sm">⭐ ${p.rating}</span>
      </div>
      <div class="mt-4 flex gap-2">
        <button onclick="addToCart(${
          p.id
        })" class="flex-1 bg-blue-600 text-white py-2 rounded">Add to cart</button>
        <a href="product.html?id=${
          p.id
        }" class="w-12 bg-gray-100 rounded flex items-center justify-center">👁️</a>
      </div>
    `;
    grid.appendChild(card);
  });

  const loadMore = document.getElementById("loadMore");
  if (loadMore)
    loadMore.style.display =
      filtered.length > perPage * currentPage ? "block" : "none";
}

// ---------- Recommendations ----------
function renderRecommendations() {
  const strip = document.getElementById("recommendationStrip");
  if (!strip) return;
  strip.innerHTML = "";

  PRODUCTS.slice(0, 6).forEach((p) => {
    const el = document.createElement("div");
    el.className =
      "min-w-[180px] bg-white shadow p-3 rounded border flex-shrink-0";
    el.innerHTML = `
      <div class="h-24 bg-gray-100 rounded mb-2 overflow-hidden">
        <img src="${p.img || "https://via.placeholder.com/200x120"}" alt="${
      p.title
    }" class="object-cover w-full h-full"/>
      </div>
      <div class="text-sm font-medium">${p.title}</div>
      <div class="text-xs text-gray-500">$${p.price.toFixed(2)}</div>
    `;
    strip.appendChild(el);
  });
}

// ---------- Cart Popup ----------
function renderCartPopup() {
  const container = document.getElementById("cartItems");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<p class="text-gray-500">Your cart is empty</p>`;
    return;
  }

  container.innerHTML = "";
  cart.forEach((it) => {
    const row = document.createElement("div");
    row.className = "flex justify-between py-2 border-b";
    row.innerHTML = `
      <div>
        <div class="text-sm font-medium">${it.title}</div>
        <div class="text-xs text-gray-500">Qty ${it.qty}</div>
      </div>
      <div class="text-sm font-semibold">$${(it.price * it.qty).toFixed(
        2
      )}</div>
    `;
    container.appendChild(row);
  });
}
window.refreshCartPopup = function () {
  renderCartPopup();
  refreshCartBadge();
};

// ---------- DOM Ready ----------
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.innerText = new Date().getFullYear();

  renderCategories();
  renderProducts();
  renderRecommendations();
  refreshCartBadge();

  const searchInput = document.getElementById("searchInput");
  searchInput?.addEventListener("input", () => {
    currentPage = 1;
    renderProducts();
  });

  const priceRange = document.getElementById("priceRange");
  if (priceRange) {
    const pv = document.getElementById("priceValue");
    pv && (pv.innerText = priceRange.value);
    priceRange.addEventListener("input", () => {
      pv && (pv.innerText = priceRange.value);
      currentPage = 1;
      renderProducts();
    });
  }

  document.getElementById("loadMore")?.addEventListener("click", () => {
    currentPage++;
    renderProducts();
  });

  const openCart = document.getElementById("openCart");
  const cartPopup = document.getElementById("cartPopup");
  const closeCart = document.getElementById("closeCart");
  const clearCartBtn = document.getElementById("clearCart");

  openCart?.addEventListener("click", () =>
    cartPopup?.classList.toggle("hidden")
  );
  closeCart?.addEventListener("click", () =>
    cartPopup?.classList.add("hidden")
  );
  clearCartBtn?.addEventListener("click", () => {
    cart = [];
    saveCart();
  });

  renderCartPopup();
});
