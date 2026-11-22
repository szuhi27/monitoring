const form = document.getElementById("calcForm");
const oszlopElem = document.getElementById("oszlop");
const terfElem = document.getElementById("térf");

function toNumber(value) {
  return parseFloat(value.trim().replace(",", "."));
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const vszint = toNumber(document.getElementById("vszint").value);
  const mélys = toNumber(document.getElementById("mélys").value);
  const átm = toNumber(document.getElementById("átm").value);

  if (Number.isNaN(vszint) || Number.isNaN(mélys) || Number.isNaN(átm)) {
    oszlopElem.textContent = "Vízoszlop: enter valid numbers";
    terfElem.textContent = "Víztérfogat: —";
    return;
  }

  const voszlop = mélys - vszint;
  const vtérf = (0.24 * voszlop * átm * átm) / 100;

  oszlopElem.textContent = `Vízoszlop: ${Number(voszlop.toFixed(2))} m`;
  terfElem.textContent = `Víztérfogat: ${Number(vtérf.toFixed(3))} dm^3`;
});