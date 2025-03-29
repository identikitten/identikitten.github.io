// At the beginning of your script.js
const galleryData = window.galleryData || [];

// Debugging galleryData at the start
console.log("Initial galleryData check:");
if (galleryData && galleryData.length > 0) {
  console.log("First project ID:", galleryData[0].id);
  console.log("First project has title_es:", !!galleryData[0].title_es);
  console.log("First project has description_es:", !!galleryData[0].description_es);
  
  // Check all items with translations
  const withTitleEs = galleryData.filter(item => item.title_es).map(item => item.id);
  const withDescEs = galleryData.filter(item => item.description_es).map(item => item.id);
  console.log("Projects with title_es:", withTitleEs);
  console.log("Projects with description_es:", withDescEs);
}

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
    if (!window.galleryData) {
      console.error('galleryData not loaded yet');
      return;
    }
  
    const galleryHTML = window.galleryData.map((item) => {
      const displayTitle = currentLanguage === 'es' && item.title_es 
        ? item.title_es 
        : item.title;
      
      return `  
        <div class="post" data-category="${item.category}">
          <a href="#" data-id="${item.id}"> 
            <div class="text-content">
              <h2>${displayTitle}</h2>
            </div>
            <img src="${item.thumbnail}" alt="${displayTitle}" style="display:none;">
          </a>
        </div>
      `;
    }).join('');
  
    contentContainer.innerHTML = galleryHTML;
      // Add event listeners to the newly created elements
      document.querySelectorAll('.post a').forEach(link => {
          link.addEventListener('click', function(e) {
              e.preventDefault();
              const id = this.getAttribute('data-id');
              loadContent(id);
          });
      });

      // Position posts without overlap
      positionPostsWithoutOverlap();

      // Initialize filter functionality
      initializeFilter();
  }


  // In script.js, after loading galleryData
console.log('Gallery data loaded:', window.galleryData);
console.log('Projects with Spanish titles:', 
  window.galleryData.filter(item => item.title_es).map(item => item.id));

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

        function loadContent(id) {
          const item = galleryData.find(item => item.id === id);
          if (!item) {
            console.error("No item found with ID:", id);
            return;
          }
        
          // Debug the item and translations
          console.log("Loading project:", id);
          console.log("Current language:", window.currentLanguage);
          console.log("Has title_es:", !!item.title_es);
          console.log("Has description_es:", !!item.description_es);
          
          // Use Spanish fields if in Spanish mode
          const displayTitle = window.currentLanguage === 'es' && item.title_es ? 
              item.title_es : item.title;
          const displayDescription = window.currentLanguage === 'es' && item.description_es ? 
              item.description_es : item.description;
          
          console.log("Using title:", displayTitle);

    const contentHTML = `
        <div class="page-header w-90">
          <h3 class="fl">${displayTitle}</h3>
          <h3 class="fr">${item.year}</h3>
        </div>

        <section class="image-slider">
          <div class="image-container">
            <img id="expandedImg" style="width:100%">
          </div>

          <div class="row">
            ${item.images.map((img, index) => `
              <div class="column">
                <img src="${img}" alt="${displayTitle} - Image ${index + 1}" onclick="changeImage(this);">
              </div>
            `).join('')}
          </div>
        </section>

        <div class="page-description w-90 flex mb4">
        <div class="w-30 project-sidebar">
        ${item.decoration}
        </div>
        <div class="w-70-ns">
          ${displayDescription}
          </div>
        </div>
    `;
    document.getElementById('intro-container').style.display = 'none';
    contentContainer.style.display = 'none';
    projectContainer.innerHTML = contentHTML;
    projectContainer.style.display = 'block';
    projectContainer.dataset.projectId = id;
    backButton.style.display = 'block';
  
  // Hide category menus when viewing a project
  const sidebarMenu = document.querySelector('.hideandseek');
  const mobileMenu = document.querySelector('.mobile-header .menu');
  
  if (sidebarMenu) sidebarMenu.style.opacity = '0';
  if (mobileMenu) mobileMenu.style.opacity = '0';

  // Reinitialize the image slider
  initializeImageSlider();
  // Add this near the end of your loadContent function
  projectContainer.dataset.projectId = id;
}

function showMainContent() {
  document.getElementById('intro-container').style.display = 'block';
  contentContainer.style.display = 'block';
  projectContainer.style.display = 'none';
  projectContainer.innerHTML = '';
  backButton.style.display = 'none';
  
  // Show category menus when back on main content
  const sidebarMenu = document.querySelector('.hideandseek');
  const mobileMenu = document.querySelector('.mobile-header .menu');
  
  if (sidebarMenu) sidebarMenu.style.opacity = '1';
  if (mobileMenu) mobileMenu.style.opacity = '1';
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
      }, 800);
    }

    function cycleImages() {
      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }
      changeImage(images[currentImageIndex]);
      currentImageIndex++;
    }

    const intervalId = setInterval(cycleImages, 4500);

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

 // Random positioning with improved collision detection
function positionPostsWithoutOverlap() {
  const posts = document.querySelectorAll('.post');
  const container = document.getElementById('content-container');
  
  // Set container dimensions
  container.style.width = '1000px';
  container.style.minHeight = '800px';
  container.style.position = 'relative';
  container.style.overflow = 'visible';
  
  // Define boundaries
  const postSize = 200; // Diameter of circle posts
  const minDistance = postSize + 20; // Minimum distance between circle centers
  
  // Available canvas area
  const maxX = 1000; // Maximum X position
  const maxY = 700; // Maximum Y position
  
  // Category-specific colors
  const categoryColors = {
    'texts': '#dcf952',
    'workshops': '#71FFEC',
    'design': '#717BFF',
    'art': '#F28B8B',
    'experiments': '#FC39D8'
  };
  
  // Reset all posts to initial state
  posts.forEach(post => {
    post.style.position = 'absolute';

    post.style.top = '-250px'; // Start off-screen
    post.style.transition = 'top 1s ease-out, left 1s ease-out';
  });
  
  // Array to keep track of placed positions
  const placedPositions = [];
  
  // Place each post with collision detection
  posts.forEach((post, index) => {
    let position = null;
    let attempts = 0;
    const maxAttempts = 100;
    
    // Try to find a valid position
    while (!position && attempts < maxAttempts) {
      attempts++;
      
      // Generate random position
      const randomX = Math.floor(Math.random() * (maxX - postSize));
      const randomY = Math.floor(Math.random() * (maxY - postSize));
      
      // Check if this position overlaps with any existing post
      let validPosition = true;
      for (const placed of placedPositions) {
        const distance = Math.sqrt(
          Math.pow(randomX - placed.x, 2) + 
          Math.pow(randomY - placed.y, 2)
        );
        
        if (distance < minDistance) {
          validPosition = false;
          break;
        }
      }
      
      // If position is valid, use it
      if (validPosition) {
        position = { x: randomX, y: randomY };
      }
    }
    
    // If we couldn't find a valid position after max attempts, 
    // just place it reasonably (with some buffer from existing positions)
    if (!position) {
      console.log(`Couldn't find non-overlapping position for post ${index} after ${maxAttempts} attempts`);
      
      // Find the furthest point from all existing positions
      let bestX = 50, bestY = 50;
      let maxMinDistance = 0;
      
      // Try several candidate positions
      for (let i = 0; i < 20; i++) {
        const candidateX = Math.floor(Math.random() * (maxX - postSize));
        const candidateY = Math.floor(Math.random() * (maxY - postSize));
        
        let minDistToOthers = Number.MAX_VALUE;
        
        // Find minimum distance to any placed post
        for (const placed of placedPositions) {
          const distance = Math.sqrt(
            Math.pow(candidateX - placed.x, 2) + 
            Math.pow(candidateY - placed.y, 2)
          );
          minDistToOthers = Math.min(minDistToOthers, distance);
        }
        
        // If this is better than our current best, update
        if (minDistToOthers > maxMinDistance) {
          maxMinDistance = minDistToOthers;
          bestX = candidateX;
          bestY = candidateY;
        }
      }
      
      position = { x: bestX, y: bestY };
    }
    
    // Record this position
    placedPositions.push(position);
    
    // Apply position
    post.style.left = `${position.x}px`;
    post.style.zIndex = 10 + index;
    
    // Apply category color
    const category = post.getAttribute('data-category');
    const color = categoryColors[category] || '#f28b8b';
    post.style.boxShadow = `${color} 0px 0px 20px 5px inset`;
    
    // Add staggered animation
    const delay = 100 + (index * 60) + (Math.random() * 50);
    setTimeout(() => {
      post.style.top = `${position.y}px`;
    }, delay);
  });
  
  console.log('Positioned ' + posts.length + ' posts randomly (no grid)');
}

  // Initial render
  renderGallery();
  showMainContent(); // Ensure we start on the main content view
});


// Add this to your existing script.js file

// Function to handle scrolling to top on mobile
function setupMobileScrollTop() {
  // Check if we're on a mobile device
  const isMobile = window.innerWidth <= 700; // Matches your media query breakpoint
  
  if (isMobile) {
    // For project loading
    const originalLoadContent = window.loadContent;
    if (typeof originalLoadContent === 'function') {
      window.loadContent = function(id) {
        // Call the original function
        originalLoadContent(id);
        // Then scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    }

    // Add event listeners to any project links
    document.querySelectorAll('.post a').forEach(link => {
      link.addEventListener('click', function() {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }, 100); // Small delay to ensure content is loaded
      });
    });

    // For blog posts
    if (window.location.href.includes('notes.html')) {
      document.querySelectorAll('.blog-item a').forEach(link => {
        link.addEventListener('click', function() {
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }, 100);
        });
      });
    }

    // For back button click
    const backButton = document.getElementById('back-button');
    if (backButton) {
      const originalClickHandler = backButton.onclick;
      backButton.onclick = function(e) {
        if (originalClickHandler) {
          originalClickHandler.call(this, e);
        }
        
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }, 100);
      };
    }
  }
}

// Add this near the end of script.js
document.addEventListener('languageChanged', function(e) {
  console.log('Language changed to:', e.detail.language);
  
  // Update gallery if on main page
  if (document.getElementById('content-container')?.style.display !== 'none') {
    renderGallery();
  }
  
  // Update project if on project page
  if (document.getElementById('project-container')?.style.display !== 'none') {
    updateProjectContent();
  }
});

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  setupMobileScrollTop();
  
  // Also set up for window resize events
  window.addEventListener('resize', function() {
    setupMobileScrollTop();
  });
});