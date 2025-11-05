const form = document.getElementById("arrivalForm") as HTMLFormElement;
const result = document.getElementById("result") as HTMLOutputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const hourArrivalInput = form.elements.namedItem(
    "hourArrival"
  ) as HTMLInputElement;
  const delayHoursInput = form.elements.namedItem(
    "delayHours"
  ) as HTMLInputElement;

  const hourArrival = Number(hourArrivalInput.value);
  const delayHours = Number(delayHoursInput.value);

  const newArrivalHour = (hourArrival + delayHours) % 24;

  result.textContent = `${newArrivalHour}:00`;
});
