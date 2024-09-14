document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

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

    // Filter functionality
    const filterLinks = document.querySelectorAll(".filter-link");
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
                    post.classList.remove("hidden");
                } else {
                    post.classList.add("hidden");
                }
            });
            filterLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Marquee functionality
    const marqueeContainer = document.querySelector('.marquee-container');
    const marqueeContent = document.querySelector('.marquee-content');

    console.log("Marquee container:", marqueeContainer);
    console.log("Marquee content:", marqueeContent);

    if (marqueeContainer && marqueeContent) {
        let speed = 45;
        let friction = 7;
        let pointerInteraction = true;

        const duration = Math.abs(100 / speed) * (1 + (friction / 1));
        marqueeContent.style.animationDuration = `${duration}s`;
        console.log("Marquee animation duration set:", `${duration}s`);

        if (pointerInteraction) {
            marqueeContainer.addEventListener('mouseenter', () => {
                marqueeContent.style.animationPlayState = 'paused';
                console.log("Marquee paused");
            });
            marqueeContainer.addEventListener('mouseleave', () => {
                marqueeContent.style.animationPlayState = 'running';
                console.log("Marquee resumed");
            });
        }
    } else {
        console.error("Marquee elements not found");
    }
});

// Main frame

document.addEventListener('DOMContentLoaded', function() {
    const contentContainer = document.getElementById('content-container');
    const contentIframe = document.getElementById('content-iframe');
    const backButton = document.getElementById('back-button');
    const links = document.querySelectorAll('.post h2 a');

    // Function to check if we're in an iframe
    function isInIframe() {
        return window !== window.parent;
    }

    if (!isInIframe()) {
        // Main page logic
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const url = this.getAttribute('href');
                loadContent(url);
            });
        });

        backButton.addEventListener('click', showMainContent);

        function loadContent(url) {
            contentContainer.style.display = 'none';
            contentIframe.style.display = 'block';
            contentIframe.src = url;
            backButton.style.display = 'block';
        }

        function showMainContent() {
            contentContainer.style.display = 'block';
            contentIframe.style.display = 'none';
            contentIframe.src = '';
            backButton.style.display = 'none';
        }

        // Listen for messages from the iframe
        window.addEventListener('message', function(event) {
            if (event.data === 'goBack') {
                showMainContent();
            }
        });
    } else {
        // Iframe logic
        backButton.addEventListener('click', function() {
            window.parent.postMessage('goBack', '*');
        });
    }
});

// Global variables
let currentImageIndex = 0;
const images = document.querySelectorAll('.column img');

// Original function to change the image
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
}

// New function to cycle through images automatically
function cycleImages() {
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    myFunction(images[currentImageIndex]);
    currentImageIndex++;
}

// Set interval to call cycleImages every 3 seconds (3000 milliseconds)
const intervalId = setInterval(cycleImages, 4000);

// Optional: Stop the automatic cycling when user interacts with an image
images.forEach(img => {
    img.addEventListener('click', () => {
        clearInterval(intervalId);
        myFunction(img);
    });
});