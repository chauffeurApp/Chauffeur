# Chauffeur<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Caddie Chauffeur Booking</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>Caddie Chauffeur Ride Request</h1>
    <form id="bookingForm">
      <label for="pickup">Pickup Location:</label>
      <input type="text" id="pickup" name="pickup" required />

      <label for="dropoff">Drop-off Location:</label>
      <input type="text" id="dropoff" name="dropoff" required />

      <label for="datetime">Date & Time:</label>
      <input type="datetime-local" id="datetime" name="datetime" required />

      <label for="riderName">Your Name:</label>
      <input type="text" id="riderName" name="riderName" required />

      <label for="contact">Phone Number:</label>
      <input type="tel" id="contact" name="contact" required />

      <label for="payment">Payment Method:</label>
      <select id="payment" name="payment" required>
        <option value="">Choose...</option>
        <option value="square">Square</option>
        <option value="cash">Cash</option>
        <option value="venmo">Venmo</option>
      </select>

      <button type="submit">Book Ride</button>
    </form>

    <div id="confirmation" style="display:none;">
      <p>✅ Your ride request has been received!</p>
      <p>Confirmation has been sent via text to <strong>843-303-4045</strong> and email to <strong>caddiechauffeur@gmail.com</strong>.</p>
      <p>If you selected Square, <a href="https://square.link/u/qPQCyL1B" target="_blank">click here to pay now</a>.</p>
      <p>If you selected Venmo, send to <a href="https://venmo.com/u/CaddieChauffeur" target="_blank">@CaddieChauffeur</a>.</p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
body {
  font-family: Arial, sans-serif;
  background: #f7f7f7;
  margin: 0;
  padding: 20px;
}

.container {
  background: white;
  max-width: 600px;
  margin: auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
}

label {
  display: block;
  margin-top: 15px;
}

input, select, button {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background: black;
  color: white;
  margin-top: 20px;
  cursor: pointer;
}
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // You can add logic to POST this data to a backend service here.

  // Just showing confirmation for now
  document.getElementById("bookingForm").style.display = "none";
  document.getElementById("confirmation").style.display = "block";
});
