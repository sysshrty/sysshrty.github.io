const displayContact = (e) => {
	e.preventDefault();
	const contact = document.getElementById("contact");
	const overlay = document.getElementById("overlay");
	contact.style.display = "block";
	overlay.style.display = "block";
};

const closeContactForm = () => {
	const contact = document.getElementById("contact");
	const overlay = document.getElementById("overlay");
	contact.style.display = "none";
	overlay.style.display = "none";
};

const displayEmailResult = async (e) => {
	e.preventDefault();
	const result = document.getElementById("contact-result");
	let response = await fetchEmailResult();
	if (response.status == 200) {
		result.innerHTML = "Email Successfully Sent";
	} else {
		result.innerHTML = "Sorry, your email was not sent.";
	}
};

const fetchEmailResult = async () => {
	const form = document.getElementById("contact-form");
	const formData = new FormData(form);
	const object = Object.fromEntries(formData);
	const json = JSON.stringify(object);
	const result = document.getElementById("contact-result");
	result.innerHTML = "Please wait...";
	try {
		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		});
		return response;
	} catch (error) {
		console.log(error);
		document.getElementById("result").innerHTML = "Sorry your email couldn't be sent";
	}
};

document.getElementById("contact-form").onsubmit = displayEmailResult;
document.getElementById("open-contact").onclick = displayContact;
document.getElementById("close-contact").onclick = closeContactForm;





