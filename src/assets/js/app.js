import "./../images/favicon.ico";
import "./../images/favicon-16x16.png";
import "./../images/favicon-32x32.png";

import "bootstrap";

function configureDateInputParserOnSubmit() {
	const forms = Array.from(document.forms);

	forms.forEach(form => {
		form.addEventListener("submit", () => {
			for (const dateInput of form.querySelectorAll(".date-input")) {
				const day = form.querySelector(`input[name=${dateInput.getAttribute("name")}Day]`).value;
				const month = form.querySelector(`select[name=${dateInput.getAttribute("name")}Month] :checked`).value;
				const year = form.querySelector(`input[name=${dateInput.getAttribute("name")}Year]`).value;
				dateInput.value = new Date(year, month, day).toString();
			}
		});
	});

	forms.forEach(form => {
		for (const dateInput of form.querySelectorAll(".date-input")) {
			const date = new Date(dateInput.value);
			if (date != "Invalid Date") {
				form.querySelector(`input[name=${dateInput.getAttribute("name")}Day]`).value = date.getDate();
				form.querySelector(`select[name=${dateInput.getAttribute("name")}Month] option[value="${date.getMonth()}"]`).setAttribute("selected", "true");
				form.querySelector(`input[name=${dateInput.getAttribute("name")}Year]`).value = date.getFullYear();
			}
		}
	});
}

function configureForwardAndBackButtons() {
	const forward = document.querySelector("#forward-button");

	forward.addEventListener("click", () => {
		history.forward();
	});

	const back = document.querySelector("#back-button");

	back.addEventListener("click", () => {
		history.back();
	});
}

document.addEventListener("DOMContentLoaded", event => {
	configureDateInputParserOnSubmit();
	configureForwardAndBackButtons();
});
