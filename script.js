const form = document.getElementById("calcForm");
const oszlop = document.getElementById("oszlop");
const térf = document.getElementById("térf");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the page from reloading

  const vszint = document.getElementById("vszint").value.trim();
  const mélys = document.getElementById("mélys").value.trim();
  const átm = document.getElementById("átm").value.trim();

  // --- Replace this section with your own calculation logic ---
  const voszlop = mélys - vszint
  const térf = 0.24 * voszlop * átm * átm / 100

  const olszlop_out = `Vízoszlop:: ${voszlop}`;
  const térf_out = `Víztérfogat: ${térf}`;
  // ------------------------------------------------------------

  oszlop.textContent = olszlop_out;
  térf.textContent = térf_out;
});