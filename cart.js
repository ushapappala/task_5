document.addEventListener("DOMContentLoaded", () => {
  fetch("../data/products.json")
    .then(res => res.json())
    .then(products => renderCart(products))
    .catch(err => console.error("Failed to load cart", err));
});

function renderCart(products) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cart-items");
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    const itemTotal = product.price * item.qty;
    total += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${product.name} x ${item.qty}</span>
      <span>$${itemTotal.toFixed(2)}</span>
    `;
    cartItems.appendChild(div);
  });

  document.getElementById("total-price").textContent = total.toFixed(2);
}
