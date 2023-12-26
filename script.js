document.addEventListener("DOMContentLoaded", function () {
  // Your existing code

  // Add a reference to the carousel__viewport
  const carouselViewport = document.querySelector(".carousel__viewport");

  // Add a reference to the shop buttons container
  const shopButtonsContainer = document.querySelector(".carousel-buttons-container");

  // Add an event listener to the carouselViewport for transitions
  carouselViewport.addEventListener("transitionend", updateShopButtonVisibility);

  // Initialize: hide all shop buttons
  hideShopButtons();

  // Show the first shop button on page load
  document.getElementById("shopButton1").style.display = "block";

  function updateShopButtonVisibility() {
      // Get the current active slide
      const activeSlideIndex = getActiveSlideIndex();

      // Hide all shop buttons
      hideShopButtons();

      // Show the corresponding shop button based on the active slide
      if (activeSlideIndex === 0) {
          document.getElementById("shopButton1").style.display = "block";
      } else if (activeSlideIndex === 1) {
          document.getElementById("shopButton2").style.display = "block";
      } else if (activeSlideIndex === 2) {
          document.getElementById("shopButton3").style.display = "block";
      }
  }

  function hideShopButtons() {
      // Hide all shop buttons
      const shopButtons = shopButtonsContainer.querySelectorAll(".shop-button");
      shopButtons.forEach(button => {
          button.style.display = "none";
      });
  }

  function getActiveSlideIndex() {
      // Get the current transform value of the carousel__viewport
      const transformValue = getComputedStyle(carouselViewport).getPropertyValue("transform");
      // Extract the X translation value
      const translateX = parseFloat(transformValue.split(",")[4]);

      // Calculate the approximate index of the active slide based on translateX value
      const activeSlideIndex = Math.round(-translateX / carouselViewport.clientWidth);

      return activeSlideIndex;
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const carouselViewport = document.querySelector(".carousel__viewport");

  function nextSlide() {
    const currentScroll = carouselViewport.scrollLeft;
    const slideWidth = carouselViewport.clientWidth;
    const nextScroll = currentScroll + slideWidth;
    carouselViewport.scrollTo({
      left: nextScroll,
      behavior: "smooth"
    });
  }

  function prevSlide() {
    const currentScroll = carouselViewport.scrollLeft;
    const slideWidth = carouselViewport.clientWidth;
    const prevScroll = currentScroll - slideWidth;
    carouselViewport.scrollTo({
      left: prevScroll,
      behavior: "smooth"
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const introContainer = document.querySelector(".intro-container");
  const introTitle = document.querySelector(".intro-title");

  // Array of words to appear one by one
  const words = ["Welcome", "to", "Shakali", "Studio" ];

  // Function to show words with a fade effect
  function showWords(index) {
      if (index < words.length) {
          setTimeout(function() {
              introTitle.textContent += " " + words[index];
              fadeIn(introTitle, 500); // 0.5-second delay
              showWords(index + 1);
          }, 500); // 0.5-second delay
      } else {
          // After showing all words, hide the intro container after 3 seconds
          setTimeout(function() {
              introContainer.style.animation = "fadeOut 2s ease-out forwards"; // Apply fade-out animation

              // Set pointer-events to none to allow interaction with elements beneath introContainer
              introContainer.style.pointerEvents = "none";
          }, 3000);
      }
  }

  // Function to apply fade-in effect
  function fadeIn(element, duration) {
      let opacity = 0;
      const interval = 10; // Interval for changing opacity
      const delta = interval / duration;

      function updateOpacity() {
          opacity += delta;
          element.style.opacity = opacity;

          if (opacity >= 1) {
              clearInterval(fadeInterval);
          }
      }

      const fadeInterval = setInterval(updateOpacity, interval);
  }

  // Start showing words
  introContainer.style.animation = "fadeIn 2s ease-out forwards"; // Apply fade-in animation
  showWords(0);
});



document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('.header');
  let isHeaderFixed = false;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50 && !isHeaderFixed) {
      header.classList.add('fixed');
      isHeaderFixed = true;
    } else if (window.scrollY <= 50 && isHeaderFixed) {
      header.classList.remove('fixed');
      isHeaderFixed = false;
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const headerText = document.getElementById('headerText');
  
  const fonts = ['Fantasy', 'Monaco', 'Didot', 'Comic Sans MS', 'cursive'];
  let currentFontIndex = 0;

  setInterval(function() {
    const currentFont = fonts[currentFontIndex];
    headerText.style.fontFamily = currentFont;

    currentFontIndex = (currentFontIndex + 1) % fonts.length;
  }, 1000);
});


function toggleRandomCase(text) {
  const indexToChange = Math.floor(Math.random() * text.length);
  
  return text.split('').map(function(char, index) {
      // Change the case of the randomly selected letter
      return index === indexToChange ? toggleCase(char) : char;
  }).join('');
}

function toggleCase(char) {
  // Toggle the case of a single character
  return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}
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
      { label: "AXALI NAWSOVI JEMPRI BY TUTUTSI", color: getRandomColor() },
      { label: "DIDI QONGUREBIANI SIZMARTMWERI BY KETINO", color: getRandomColor() },
      { label: "TUTUTSI GAMWVIRVALE MAIKA", color: getRandomColor() },
      { label: "RAGACA MORIGI IDIOTOBA", color: getRandomColor() },
      { label: "UCXOELEBIS DAGOIMEBIS SHESADZLEBLOBA", color: getRandomColor() },
      { label: "QUCHIS MARKETEBZE GAMOJDOMA VINIGRETIVIT", color: getRandomColor() },
      { label: "PUT ME I A MOVIE", color: getRandomColor() },
      { label: "ABA OMI GINDAT?", color: getRandomColor() },
      { label: "AI ZVIGENEBI KIARA AFTREBI XART, AFTREBI", color: getRandomColor() },
      { label: "KARGAD CHAIXEDET SARKESHI DA TQVENI CXOVREBIS IM EPIZODS MIXEDET", color: getRandomColor() },
      { label: "SHTERUKELA GARI XO GADAIRIA DA ES MEGAN MARKELIC XO MOIYVANA COLAD", color: getRandomColor() },
      { label: "NU MIETENEBI IQ SADAC AR ARIS SHENI ADGILI, AR ARIS SHENI ADGILI", color: getRandomColor() },
      { label: "DA GAAMWESES SAD... LOS AANJELESSHI", color: getRandomColor() }
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

  document.addEventListener("DOMContentLoaded", function () {
    const carouselViewport = document.querySelector(".carousel__viewport");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    let currentIndex = 0;

    // Add event listener for the previous button
    prevButton.addEventListener("click", function () {
        navigateCarousel(-1);
    });

    // Add event listener for the next button
    nextButton.addEventListener("click", function () {
        navigateCarousel(1);
    });

    // Function to navigate the carousel
    function navigateCarousel(direction) {
        const slideWidth = document.querySelector(".carousel__slide").offsetWidth;
        currentIndex = (currentIndex + direction + 3) % 3; // 3 is the number of slides

        carouselViewport.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }
});


document.addEventListener("DOMContentLoaded", function() {
  const shopButton1 = document.getElementById("shopButton1");
  const shopButton2 = document.getElementById("shopButton2");
  const shopButton3 = document.getElementById("shopButton3");
  // Add more buttons as needed

  shopButton1.addEventListener("click", function() {
      // Add unique functionality for Shop Button 1
      alert("Shop Button 1 clicked!");
      // Add more functionality here
  });

  shopButton2.addEventListener("click", function() {
      // Add unique functionality for Shop Button 2
      alert("Shop Button 2 clicked!");
      // Add more functionality here
  });

  shopButton3.addEventListener("click", function() {
    // Add unique functionality for Shop Button 2
    alert("Shop Button 3 clicked!");
    // Add more functionality here
});

  // Add event listeners for other buttons
});
