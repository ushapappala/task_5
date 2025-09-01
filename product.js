<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Checkout</title>
  <link rel="stylesheet" href="../assets/css/style.css" />
</head>

<body>
  <header>
    <h1>Checkout</h1>
  </header>
  <main>
    <form id="checkout-form" class="checkout-form">
      <h2>Shipping Information</h2>
      <label>Full Name:<input type="text" name="fullname" required /></label>
      <label>Email:<input type="email" name="email" required /></label>
      <label>Address:<input type="text" name="address" required /></label>
      <label>City:<input type="text" name="city" required /></label>
      <label>Zip Code:
  <input type="text" name="zip" pattern="\d{6}" required title="Zip code must be exactly 6 digits" />
</label>

      <button type="submit">Place Order</button>
    </form>
  </main>
  <div class="back-home">
    <a href="index.html" class="btn-home">← Back to Home</a>
  </div>
  <script src="../assets/js/checkout.js"></script>
</body>

</html>
