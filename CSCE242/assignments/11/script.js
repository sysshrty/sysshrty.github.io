class Blood {
    constructor(image, type, antibodies, antigens, donor, recipient, rhFactor) {
        this.image = image;
        this.type = type;
        this.antibodies = antibodies;
        this.antigens = antigens;
        this.donor = donor;
        this.recipient = recipient;
        this.rhFactor = rhFactor;
    }
    getSection() {
        const section = document.createElement("section");
        section.classList.add("blood-section");

        const h3 = document.createElement("h3");
        h3.textContent = this.type;
        
        const image = document.createElement("img");
        image.src = `images/${this.image}`;
        image.alt = this.type;
        image.addEventListener("click", () => this.handleClick());
        section.append(h3, image);

        return section;
    }
    handleClick() {
        document.getElementById('modal-title').textContent = this.type;
        document.getElementById('modal-content').innerHTML = `
            <p>Antibodies: ${this.antibodies}</p>
            <p>Antigens: ${this.antigens}</p>
            <p>Donor: ${this.donor}</p>
            <p>Recipient: ${this.recipient}</p>
            <p>Rh Factor: ${this.rhFactor}</p>
            <img src="images/${this.image}" alt="${this.type}">
        `;
        document.getElementById('types').style.display = 'block';
    }
}

const bloodTypes = [
    new Blood("a.jpg", "Type A", "Anti-B", "A-antigen", "A+ Donate to A+ and AB+. A- Donate to A-,A+,AB-,AB+", "A positive: You can receive blood that is A positive, A negative, O positive or O negative. A- can receive A-, O+", "Rh Positive"),
    new Blood("ab.jpg", "Type AB", "Plasma Anti(None)", "A & B Antigens", "AB positive: You can receive any blood type & AB negative: You can receive blood that is AB negative, A negative, B negative or O negative.", "Blood type AB positive (AB+) can donate only to AB+.", "Rh Negative"),
    new Blood("b.jpg", "Type B", "Anti-A", "B-Antigens", "B positive: You can receive blood that is B positive, B negative, O positive or O negative & B negative: You can receive blood that is B negative or O negative.", "B positive: You can receive blood that is B positive, B negative, O positive or O negative & B negative: You can receive blood that is B negative or negative, AB+, AB-", "Rh Positive"),
    new Blood("o.jpg", "Type O", "Anti-A and Anti-B", "No Antigens", "Blood type O negative (O-) is the universal donor.", "O positive: You can receive blood that is O positive or O negative & O negative: You can only receive blood that is O negative.", "Rh Negative")
];

const bloodContainer = document.querySelector(".blood-types");
bloodTypes.forEach((blood) => {
    const bloodSection = blood.getSection();
    bloodContainer.appendChild(bloodSection);
});

// Close modal function
function closeModal() {
    document.getElementById('types').style.display = 'none';
}

document.getElementById('closeModal').addEventListener('click', closeModal);

// Close modal when clicking outside the modal
window.onclick = function(event) {
    if (event.target == document.getElementById('types')) {
        closeModal();
    }
}







