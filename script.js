document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // You can add logic to POST this data to a backend service here.

  // Just showing confirmation for now
  document.getElementById("bookingForm").style.display = "none";
  document.getElementById("confirmation").style.display = "block";
});
