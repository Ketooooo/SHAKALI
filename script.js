document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-grid img");
    const labelContainer = document.querySelector(".label-container");
  
    // Define an array of labels and colors corresponding to each image
    const imageInfo = [
      { label: "Babobolo dress by TUTUTSI", color: getRandomColor() },
      { label: "dREAMcATHER bY by KETO", color: getRandomColor() },
      { label: "ANTOINETTE SKIRT BY TUTUTSI", color: getRandomColor() },
      { label: "MITXARI ERTI YOCHAG, SHEN SHEMOGEVLE, MIMIGE, MOMEFERE", color: getRandomColor() },
      { label: "ES BATONI ROMELIC CXVIRIT XNAVDA MIWAS DA HALSTUXIT SADILS MIIRTMEVDA", color: getRandomColor() },
      { label: "UKVE DAVIGALE", color: getRandomColor() },
      { label: "KASHNE GRDZELI DA LAMAZI", color: getRandomColor() },
      { label: "RAGACA YLEOBA BY MEKO", color: getRandomColor() },
      { label: "Dream Catcher By PHUPHALA", color: getRandomColor() }
      // Add more labels and colors as needed
    ];
  
    images.forEach((img, index) => {
      img.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.2)";
        this.style.margin = "-15px";
  
        // Adjust position for the neighboring images
        images.forEach((otherImg, otherIndex) => {
          if (otherIndex !== index) {
            const moveAmount = 10; // Adjust the amount to move
            const direction = otherIndex < index ? 1 : -1; // Move to the right or left
            otherImg.style.transform = `translateX(${direction * moveAmount}px)`;
          }
        });
  
        // Change the background color of the body with fade
        document.body.style.transition = "background-color 0.5s ease";
        document.body.style.backgroundColor = imageInfo[index].color;
  
        // Update label container text and display it
        labelContainer.textContent = imageInfo[index].label;
        labelContainer.style.display = "block";
      });
  
      img.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
        this.style.margin = "0";
  
        // Reset position for all images
        images.forEach(otherImg => {
          otherImg.style.transform = "translateX(0)";
        });
  
        // Reset the background color of the body
        document.body.style.backgroundColor = "";
        document.body.style.transition = "";
  
        // Reset label container text and hide it
        labelContainer.textContent = "";
        labelContainer.style.display = "none";
      });
    });
  
    // Function to generate a random color in hexadecimal format
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });


// Add click event listeners to each image
images.forEach(image => {
    image.addEventListener('click', () => {
        const imageUrl = image.getAttribute('src');
        // Redirect to a new page passing the image URL as a parameter
        window.location.href = `image-details.html?image=${imageUrl}`;
    });
});