//for Toggle
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebarMenu");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  toggleBtn.textContent = sidebar.classList.contains("hidden")
    ? "☰ Categories"
    : "☰ Categories";
});

// Responsive search type dropdown behavior
// Elements
const categorySelect = document.getElementById("categorySelect");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchBtn");

// Change placeholder based on category
categorySelect.addEventListener("change", () => {
  const type = categorySelect.value.toLowerCase();
  searchInput.placeholder =
    type === "all" ? "Search products..." : `Search in ${type}...`;
});

// Category pages mapping
const categoryPages = {
  all: "index.html",
  clothing: "/clothing.html",
  shoes: "/shoes.html",
  furniture: "/furniture.html",
  perfumes: "/perfumes.html",
  electronics: "/electronics.html",
};

// Search button click
searchButton.addEventListener("click", () => {
  const queryText = searchInput.value.trim();
  const selectedCategory = categorySelect.value;

  const targetPage = categoryPages[selectedCategory] || "/all-products.html";
  const finalUrl = queryText
    ? `${targetPage}?q=${encodeURIComponent(queryText)}`
    : targetPage;

  window.location.href = finalUrl;
});

//sidebar and image change on click buuton
// Category Data
const categoryData = {
  headphones: {
    img: "https://i.postimg.cc/gJD5RxyB/Banner-board-800x420-2.png",
    title: "Feel the Beat <br><strong>Top Headphones</strong>",
    btn: "Shop Headphones",
  },
  electronics: {
    img: "https://www.pngall.com/wp-content/uploads/1/Electronic-Free-PNG-Image.png",
    title: "Latest trending <br><strong>Electronic items</strong>",
    btn: "Shop Electronics",
  },
  laptops: {
    img: "https://article.images.consumerreports.org/image/upload/t_article_tout/v1744296383/prod/content/dam/CRO-Images-2025/Electronics/CR-Electronics-InlineHero-Best-Cheap-Laptops-and-Tablets-0425",
    title: "Power & Performance <br><strong>Laptops</strong>",
    btn: "Browse Laptops",
  },
  mobiles: {
    img: "https://www.pngplay.com/wp-content/uploads/12/Smartphone-PNG-HD-Images.png",
    title: "New Arrivals <br><strong>Smartphones</strong>",
    btn: "Browse Mobiles",
  },

  chargers: {
    img: "https://www.pngkey.com/png/detail/205-2058429_charger-transparent-png-jora-genuine-oem-samsung-universal.png",
    title: "Fast & Safe <br><strong>Chargers</strong>",
    btn: "View Chargers",
  },

  cameras: {
    img: "https://static.vecteezy.com/system/resources/thumbnails/038/116/236/small/ai-generated-dslr-photo-camera-object-photo-png.png",
    title: "Capture Moments <br><strong>Cameras</strong>",
    btn: "Shop Cameras",
  },

  smartwatches: {
    img: "https://cdn.shopify.com/s/files/1/0695/8832/0569/files/r02-3-4.jpg?v=1699016482",
    title: "Stay Connected <br><strong>Smartwatches</strong>",
    btn: "View Smartwatches",
  },
};

// Elements
const heroImage = document.getElementById("heroImage");
const heroTitle = document.getElementById("heroTitle");
const heroBtn = document.getElementById("heroBtn");
const categoryItems = document.querySelectorAll(".category-item");

// Function to update content
function updateCategory(cat) {
  heroImage.src = categoryData[cat].img;
  heroTitle.innerHTML = categoryData[cat].title;
  heroBtn.innerText = categoryData[cat].btn;

  // Highlight active item
  categoryItems.forEach((item) => item.classList.remove("bg-sky-200"));
  document.querySelector(`[data-cat="${cat}"]`).classList.add("bg-sky-200");
}

// Add click listeners
categoryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const category = item.getAttribute("data-cat");
    updateCategory(category);
  });
});

// Set default category (Headphones)
updateCategory("headphones");

// Countdown Timer
function countdownTimer() {
  // Set offer expiry (example: 6 hours from now)
  const endTime = new Date().getTime() + 6 * 60 * 60 * 1000;

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
      return;
    }

    document.getElementById("hours").innerHTML = String(
      Math.floor(distance / (1000 * 60 * 60))
    ).padStart(2, "0");

    document.getElementById("minutes").innerHTML = String(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");

    document.getElementById("seconds").innerHTML = String(
      Math.floor((distance % (1000 * 60)) / 1000)
    ).padStart(2, "0");
  }, 1000);
}

countdownTimer();
