"use strict";
const form = document.getElementById("arrivalForm");
const result = document.getElementById("result");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const hourArrivalInput = form.elements.namedItem("hourArrival");
    const delayHoursInput = form.elements.namedItem("delayHours");
    const hourArrival = Number(hourArrivalInput.value);
    const delayHours = Number(delayHoursInput.value);
    const newArrivalHour = (hourArrival + delayHours) % 24;
    result.textContent = `${newArrivalHour}:00`;
});
