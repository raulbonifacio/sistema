import "./../images/favicon.ico";
import "./../images/favicon-16x16.png";
import "./../images/favicon-32x32.png";

import "bootstrap";

function configureDateInputParserOnSubmit() {
	Array.from(document.forms).forEach(form => {
		for (const dateInput of form.querySelectorAll(".date-input")) {

			const dayInput = form.querySelector(
				`input[name=${dateInput.getAttribute("name")}Day]`
			);
			const monthInput = form.querySelector(
				`select[name=${dateInput.getAttribute("name")}Month]`
			);
			const yearInput = form.querySelector(
				`input[name=${dateInput.getAttribute("name")}Year]`
			);

			const date = new Date(dateInput.value);

			if (date != "Invalid Date") {
				dayInput.value = date.getDate();
				monthInput
					.querySelector(`option[value="${date.getMonth()}"]`)
					.setAttribute("selected", "true");
				yearInput.value = date.getFullYear();
			}

			form.addEventListener("submit", () => {
				const day = dayInput.value;
				const month = monthInput.querySelector(` :checked`).value;
				const year = yearInput.value;
				dateInput.value = new Date(year, month, day).toString();
			});
		}
	});
}

function configureForwardAndBackButtons() {
	document.querySelector("#forward-button").addEventListener("click", () => {
		history.forward();
	});

	document.querySelector("#back-button").addEventListener("click", () => {
		history.back();
	});
}

document.addEventListener("DOMContentLoaded", event => {
	configureDateInputParserOnSubmit();
	configureForwardAndBackButtons();
});
