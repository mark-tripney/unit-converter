const userInput = document.querySelector(".user-input");
const baseValue = document.querySelectorAll(".base-value");
const metersToFeet = document.querySelector(".meters-to-feet");
const feetToMeters = document.querySelector(".feet-to-meters");
const litersToGallons = document.querySelector(".liters-to-gallons");
const gallonsToLiters = document.querySelector(".gallons-to-liters");
const kilosToPounds = document.querySelector(".kilos-to-pounds"); // 2.20462
const poundsToKilos = document.querySelector(".pounds-to-kilos"); // 0.453592

const metersToFeetConv = () =>
  (Number.parseFloat(userInput.value) * 3.28084).toFixed(3);

const feetToMetersConv = () =>
  (Number.parseFloat(userInput.value) * 0.3048).toFixed(3);

const litersToGallonsConv = () =>
  (Number.parseFloat(userInput.value) * 0.219969).toFixed(3);

const gallonsToLitersConv = () =>
  (Number.parseFloat(userInput.value) * 4.54609).toFixed(3);

const kilosToPoundsConv = () =>
  (Number.parseFloat(userInput.value) * 2.20462).toFixed(3);

const poundsToKilosConv = () =>
  (Number.parseFloat(userInput.value) * 0.453592).toFixed(3);

userInput.addEventListener("keyup", () => {
  baseValue.forEach(
    (value) => (value.textContent = userInput.value.toString())
  );
  metersToFeet.textContent = metersToFeetConv();
  feetToMeters.textContent = feetToMetersConv();
  litersToGallons.textContent = litersToGallonsConv();
  gallonsToLiters.textContent = gallonsToLitersConv();
  kilosToPounds.textContent = kilosToPoundsConv();
  poundsToKilos.textContent = poundsToKilosConv();
});
