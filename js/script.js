document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-grid img");
    const labelContainer = createLabelContainer(); // Create a single label container

    // Function to generate a random color in hexadecimal format
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    images.forEach((img, index) => {
        const imageInfo = { label: `Label ${index + 1}`, color: getRandomColor() };

        img.addEventListener("mouseover", function() {
            // Change body background color on mouseover
            document.body.style.backgroundColor = imageInfo.color;

            // Update label container content for the specific image
            labelContainer.textContent = `Label for ${imageInfo.label}`;
            labelContainer.style.display = "block";
        });

        img.addEventListener("mouseout", function() {
            // Reset body background color on mouseout
            document.body.style.backgroundColor = "";

            // Hide label container on mouseout
            labelContainer.style.display = "none";
        });

        img.addEventListener('click', () => {
            const imageUrl = img.getAttribute('src');
            // Redirect to a new page passing the image URL as a parameter
            window.location.href = `image-details.html?image=${imageUrl}`;
        });
    });

    function createLabelContainer() {
        const labelContainer = document.createElement("div");
        labelContainer.classList.add("label-container");
        document.body.appendChild(labelContainer); // Append the label container to the body
        return labelContainer;
    }
});
