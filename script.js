document.addEventListener('DOMContentLoaded', function() {
    const contentContainer = document.getElementById('content-container');
    const projectContainer = document.getElementById('project-container');
    const backButton = document.getElementById('back-button');

    // Falling characters functionality
    const container = document.querySelector(".falling-characters");
    console.log("Falling characters container:", container);

    const characters = "nononononononononononono".split("");
    let intervalId;

    function createFallingCharacter() {
        if (!container) {
            console.error("Container for falling characters not found");
            return;
        }
        const char = document.createElement("span");
        char.textContent = characters[Math.floor(Math.random() * characters.length)];
        char.style.left = Math.random() * 100 + "vw";
        char.style.animationDuration = (4 + Math.random() * 6) + "s";
        char.style.top = "-10%";
        container.appendChild(char);
        char.addEventListener("animationend", function() {
            if (container.contains(char)) {
                container.removeChild(char);
            }
        });
    }

    function clearFallingCharacters() {
        if (!container) {
            console.error("Container for falling characters not found");
            return;
        }
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    const startButton = document.getElementById("startFalling");
    const stopButton = document.getElementById("stopFalling");

    console.log("Start button:", startButton);
    console.log("Stop button:", stopButton);

    if (startButton) {
        startButton.addEventListener("click", function() {
            console.log("Start button clicked");
            if (!intervalId) {
                intervalId = setInterval(createFallingCharacter, 300);
                console.log("Falling characters started");
            }
        });
    } else {
        console.error("Start button not found");
    }

    if (stopButton) {
        stopButton.addEventListener("click", function() {
            console.log("Stop button clicked");
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
                clearFallingCharacters();
                console.log("Falling characters stopped and cleared");
            }
        });
    } else {
        console.error("Stop button not found");
    }

    // Gallery and filtering functionality
    function renderGallery() {
        const galleryHTML = galleryData.map((item, index) => `   
            <div class="post" data-category="${item.category}">
                <div class="text-content">
                    <h2><a href="#" data-id="${item.id}">${item.title}</a></h2>
                    <ul>
                        <li>${item.year}</li>
                        <li>${item.category}</li>
                    </ul>
                </div>
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="symbol-content">
                    ${item.symbols}
                </div>
            </div>
            <div class="divider"></div>
        `).join('');

        contentContainer.innerHTML = galleryHTML;

        // Add event listeners to the newly created elements
        document.querySelectorAll('.post h2 a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const id = this.getAttribute('data-id');
                loadContent(id);
            });
        });

        // Initialize filter functionality
        initializeFilter();
    }

    function initializeFilter() {
        const filterLinks = document.querySelectorAll(".filter");
        const posts = document.querySelectorAll(".post");

        console.log("Filter links:", filterLinks);
        console.log("Posts:", posts);

        filterLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const filter = this.getAttribute("data-filter");
                console.log("Filter clicked:", filter);
                posts.forEach(post => {
                    const postCategory = post.getAttribute("data-category");
                    if (filter === "all" || postCategory === filter) {
                        post.style.display = "flex";
                    } else {
                        post.style.display = "none";
                    }
                });
                filterLinks.forEach(link => link.classList.remove("active"));
                this.classList.add("active");
            });
        });
    }

    // content of each post is loaded
    function loadContent(id) {
      const item = galleryData.find(item => item.id === id);
      if (!item) return;
  
      const contentHTML = `
        <div class="page-header w-90">
          <h3 class="fl">${item.title}</h3>
          <h3 class="fr">${item.year}</h3>
        </div>
  
        <section class="image-slider">
          <div class="image-container">
            <img id="expandedImg" style="width:100%">
          </div>
  
          <div class="row">
            ${item.images.map((img, index) => `
              <div class="column">
                <img src="${img}" alt="Image ${index + 1}" onclick="changeImage(this);">
              </div>
            `).join('')}
          </div>
        </section>
  
        <div class="page-description w-90 flex mb4">
        <div class="w-30">
        ${item.decoration}
        </div>
        <div class="w-70">
          ${item.description}
          </div>
        </div>
      `;
      document.getElementById('intro-container').style.display = 'none';
      contentContainer.style.display = 'none';
      projectContainer.innerHTML = contentHTML;
      projectContainer.style.display = 'block';
      backButton.style.display = 'block';
  
      // Reinitialize the image slider
      initializeImageSlider();
    }
  
    function showMainContent() {
        document.getElementById('intro-container').style.display = 'block';
        contentContainer.style.display = 'block';
        projectContainer.style.display = 'none';
        projectContainer.innerHTML = '';
        backButton.style.display = 'none';
      }
    
    function initializeImageSlider() {
      let currentImageIndex = 0;
      const images = document.querySelectorAll('.column img');
      const expandImg = document.getElementById("expandedImg");
  
      function changeImage(imgs) {
        expandImg.style.opacity = "0";
        
        setTimeout(() => {
          expandImg.src = imgs.src;
          expandImg.style.opacity = "1";
        }, 500);
      }
  
      function cycleImages() {
        if (currentImageIndex >= images.length) {
          currentImageIndex = 0;
        }
        changeImage(images[currentImageIndex]);
        currentImageIndex++;
      }
  
      const intervalId = setInterval(cycleImages, 3500);
  
      images.forEach(img => {
        img.addEventListener('click', () => {
          clearInterval(intervalId);
          changeImage(img);
        });
      });
  
      // Initialize with the first image
      if (images.length > 0) {
        changeImage(images[1]);
      }
    }
  


    backButton.addEventListener('click', showMainContent);

    // Initial render
    renderGallery();
    showMainContent(); // Ensure we start on the main content view
});