/* Handle input event on the command input field
commandInput.addEventListener('input', function () {
    const command = this.value.trim().toLowerCase();

    // Check if the command is a single letter
    if (command.length === 1) {
        let imagePath;

        // Check each command individually
        if (command === 'b') {
            imagePath = 'images/read.jpg';
        } else if (command === 'c') {
            imagePath = 'images/clown.jpg';
        } else if (command === 'p') {
            imagePath = 'images/birthday.jpg';
        } else if (command === 'r') {
            imagePath = 'images/rain.jpg';
        } else if (command === 's') {
            imagePath = 'images/shovel.jpg';
        } else if (command === 'w') {
            imagePath = 'images/work.jpg';
        } else {
            return; // No valid command, exit early
        }

        // Set the image source
        image.src = imagePath;
    }
});*/

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('DOMContentLoaded', function () {
        const yogaImages = document.querySelectorAll('.yoga-image');
        const slider = document.getElementById('yoga-slider');
        const commandInput = document.getElementById('command');
        const image = document.getElementById('image');
        const image2 = document.getElementById('image2');
        
        const imagePaths = [
            'images/yoga1.jpg',
            'images/yoga2.jpg',
            'images/yoga3.jpg',
            'images/yoga4.jpg',
            'images/yoga5.jpg',
            'images/yoga6.jpg',
            'images/yoga7.jpg',
            'images/yoga8.jpg'
        ];
    
        // Handle input event on the command input field
        commandInput.addEventListener('input', function () {
            const command = this.value.trim().toLowerCase();
    
            // Check if the command is a single letter
            if (command.length === 1) {
                let imagePath;
    
                // Check each command individually
                if (command === 'b') {
                    imagePath = 'images/read.jpg';
                } else if (command === 'c') {
                    imagePath = 'images/clown.jpg';
                } else if (command === 'p') {
                    imagePath = 'images/birthday.jpg';
                } else if (command === 'r') {
                    imagePath = 'images/rain.jpg';
                } else if (command === 's') {
                    imagePath = 'images/shovel.jpg';
                } else if (command === 'w') {
                    imagePath = 'images/work.jpg';
                } else {
                    return; // No valid command, exit early
                }
    
                // Set the image source
                image.src = imagePath;
                image2.src = imagePath;
            }
        });
    
        // Function to change the active yoga image
        const changeYogaImage = () => {
            const value = parseInt(slider.value);
            yogaImages.forEach((image, index) => {
                if (index + 1 === value) {
                    image.classList.add('active');
                } else {
                    image.classList.remove('active');
                }
            });
        };
    
        // Event listener for slider input
        slider.addEventListener('input', changeYogaImage);
    
        // Function to change the main image based on slider value
        const changeImage = () => {
            const value = parseInt(slider.value);
            // Check if the value is within the range of imagePaths
            if (value >= 1 && value <= imagePaths.length) {
                // Update the source of the image based on the slider value
                image.src = imagePaths[value - 1]; // Adjust for zero-based index
                image2.src = imagePaths[value - 1];
            }
        }
});
/*
const slider = document.getElementById('yoga-slider');
const image = document.querySelector('#ifs img');

const imagePaths = [
    'images/yoga1.jpg',
    'images/yoga2.jpg',
    'images/yoga3.jpg',
    'images/yoga4.jpg',
    'images/yoga5.jpg',
    'images/yoga6.jpg',
    'images/yoga7.jpg',
    'images/yoga8.jpg'
];

const changeImage = () => {
    // Function to change the main image based on slider value
    const changeImage = () => {
        const value = parseInt(slider.value);
        // Check if the value is within the range of imagePaths
        if (value >= 1 && value <= imagePaths.length) {
            // Update the source of the image based on the slider value
            image.src = imagePaths[value - 1]; // Adjust for zero-based index
            image2.src = imagePaths[value - 1]; // Adjust for zero-based index
    }
};

slider.addEventListener('input', changeYogaImage);

// Toggle sections based on exercise links
navItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const exercise = e.target.textContent;
        if (exercise === 'Exercise 1') {
            enterCommand.classList.add('active');
            ifS.classList.remove('active');
        } else if (exercise === 'Exercise 2') {
            enterCommand.classList.remove('active');
            ifS.classList.add('active');
        }
    });
});*/
});
