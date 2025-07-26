
document.getElementById("requestForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const subdomain = e.target.subdomain.value;
  const email = e.target.email.value;
  document.getElementById("mensaje").innerText = 
    `Gracias por tu solicitud: ${subdomain}.domainlatinplus.com. Te contactaremos a ${email}`;
  e.target.reset();
});
