// translations.js - Complete translation file

// Translations dictionary
const translations = {
    en: {
      // Navigation
      "about": "about",
      "EDEN 𓃚 ": "EDEN 𓅯",
      "seeInSpanish": "ver en español",
      "seeInEnglish": "see in english",
      
      // Buttons & UI elements
      "backToMain": "🥀 Back",
      "backToBlog": "⋆ ˚｡ Back to Blog List",
      "makeFall": "make them fall",
      "stopFall": "stop them",
      
      // Categories section
      "categoriesTitle": "categories:",
      "allCategory": "all",
      "artCategory": "art",
      "designCategory": "design",
      "workshopsCategory": "workshops",
      "textsCategory": "texts",
      "experimentsCategory": "experiments",
      
      // Footer
      "futurePlans": "Plans for the future:",
      "plan1": "Adding a shadow library (self-hosted on a raspberry pi)",
      "plan2": "Adding downloadables",
      
      // About page
     "bioP1": 'Mexican artist working with experimental design, poetry, and material explorations of the digital. I’m currently based in Vienna and I do communications and design work for the <a href="https://sfpc.study" target="_blank">School for Poetic Computation</a>.',
     "bioP2": 'I’m also ½ of the collective NotToday, where we use experimental media tactics that blend fiction, sabotage, and symbolic distortion to experiment with disrupting ideological authority online.',
     "bioP3": '𓂅 You can find me on <a href="https://www.instagram.com/identikitten" target="_blank">Instagram</a>.',


      
      // Homepage
      "introPoem": "𓆱    𓆱 𓍢\n𓆱 𓇼 i am 𓆙 𓍢 <br> 𓆱 awake 𓆱 𓆙 \n𓆑 𓆙 in 𓍢𓇼<br>\n 𓆸 𓆱 everything  𓍢 𓆙 \n𓍢 𓇼𓆑 𓇼  i love 𓆑<br>\n𓇼𓆱 𓍢 𓆱 𓍢 and desire 𓍢 𓆑 𓇼 𓆙\n𓆸 to the  𓇼<br>\n  𓆱  𓇼 point 𓆸 𓇼\n𓆱 𓇼 of 𓆑 \nterror 𓆱 𓍢 𓆑",
      
      // Blog
      "noBlogPosts": "No blog posts yet.",
      "readMore": "Read more →"
    },
    es: {
      // Navigation
      "about": "acerca",
      "EDEN 𓃚": "EDEN 𓅯",
      "seeInSpanish": "ver en español",
      "seeInEnglish": "see in english",
      
      // Buttons & UI elements
      "backToMain": "🥀 Volver",
      "backToBlog": "⋆ ˚｡ Volver a la Lista del Blog",
      "makeFall": "hazlos caer",
      "stopFall": "detenlos",
      
      // Categories section
      "categoriesTitle": "categorías:",
      "allCategory": "todos",
      "artCategory": "arte",
      "designCategory": "diseño",
      "workshopsCategory": "talleres",
      "textsCategory": "textos",
      "experimentsCategory": "experimentos",
      
      // Footer
      "futurePlans": "Planes para el futuro:",
      "plan1": "Agregar una biblioteca oculta (alojada en un raspberry pi)",
      "plan2": "Agregar descargables",
      
      // About page
     "bioP1": 'Artista mexicana que trabaja con diseño experimental, poesía y exploraciones materiales de lo digital. Vivo en Viena y hago trabajo de comunicación y diseño para la <a href="https://sfpc.study" target="_blank">School for Poetic Computation</a>.',
     "bioP2": 'También soy ½ del colectivo NotToday, en donde usamos tácticas experimentales mediáticas mezclando ficción, sabotaje y distorsión simbólica para cuestionar la autoridad.',
     "bioP3": '𓂅 Puedes encontrarme en <a href="https://www.instagram.com/identikitten" target="_blank">Instagram</a>.',


      // Homepage
      "introPoem": "𓆱    𓆱 𓍢\n𓆱 𓇼 estoy 𓆙 𓍢 <br> 𓆱 despierta 𓆱 𓆙 \n𓆑 𓆙 en 𓍢𓇼<br>\n 𓆸 𓆱 todo  𓍢 𓆙 \n𓍢 𓇼𓆑 𓇼  lo que amo 𓆑<br>\n𓇼𓆱 𓍢 𓆱 𓍢 y deseo 𓍢 𓆑 𓇼 𓆙\n𓆸 hasta el  𓇼<br>\n  𓆱  𓇼 punto 𓆸 𓇼\n𓆱 𓇼 del 𓆑 \nterror 𓆱 𓍢 𓆑",
      
      // Blog
      "noBlogPosts": "No hay entradas de blog todavía.",
      "readMore": "Leer más →"
    }
  };

// Initialize project translations
if (!translations.en.projects) translations.en.projects = {};
if (!translations.es.projects) translations.es.projects = {};

// Load project translations from JSON
fetch('project-translations.json')
  .then(response => response.json())
  .then(data => {
    // Merge project translations with UI translations
    if (data.en && data.en.projects) {
      Object.assign(translations.en.projects, data.en.projects);
    }
    if (data.es && data.es.projects) {
      Object.assign(translations.es.projects, data.es.projects);
    }
    
    // Update page content with translations if page already loaded
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      updatePageContent();
    }
  })
  .catch(error => {
    console.warn('Error loading project translations:', error);
    // Continue without project translations
  });



  
  // Global variable to track current language
  let currentLanguage = 'en'; // Default language
  
  // Main language switching function
  // Add to translations.js, in the switchLanguage function

  function switchLanguage(lang) {
    // Set the current language
    currentLanguage = lang;
    window.currentLanguage = lang; // Make sure it's available globally
    
    // Update UI with new language
    updatePageContent();
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update language toggle links
    updateLanguageLinks();
    
    // Dispatch event to notify other scripts
    document.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: lang }
    }));
  }
  
  // Make currentLanguage available globally
  window.currentLanguage = currentLanguage;
  
 
   function updateLanguageLinks() {
    initializeAllLanguageToggles();
  }
  


  // Add this function to your translations.js file
function initializeAllLanguageToggles() {
    // Desktop sidebar toggle
    const sidebarLangLinks = document.querySelectorAll('.sidebar .lang a');
    
    // Mobile menu toggle
    const mobileLangLinks = document.querySelectorAll('.mobile-header .lang a');
    
    // Update all toggles
    const allLangLinks = [...sidebarLangLinks, ...mobileLangLinks];
    
    allLangLinks.forEach(link => {
      if (currentLanguage === 'en') {
        link.textContent = translations.en.seeInSpanish;
        link.setAttribute('onclick', 'switchLanguage("es"); return false;');
        link.href = '#';
      } else {
        link.textContent = translations.es.seeInEnglish;
        link.setAttribute('onclick', 'switchLanguage("en"); return false;');
        link.href = '#';
      }
    });

  }
  
 
  // Helper function to update element text
  function updateElementText(selector, translationKey) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      if (translations[currentLanguage][translationKey]) {
        element.textContent = translations[currentLanguage][translationKey];
      }
    });
  }


  
  
  // Update all page content based on current language
  function updatePageContent() {
    // Navigation and common elements

    updateElementText('.intro-links li:nth-child(1) a, .intro-menu-cel li:nth-child(1) a', 'about');
    updateElementText('.intro-links li:nth-child(2) a, .intro-menu-cel li:nth-child(2) a', 'EDEN 𓃚');

    // Buttons
    updateElementText('#startFalling', 'makeFall');
    updateElementText('#stopFalling', 'stopFall');
    
    
    // Categories - Fix for sidebar and mobile categories
    updateElementText('.menu a[data-filter="all"]', 'allCategory');
    updateElementText('.menu a[data-filter="art"]', 'artCategory');
    updateElementText('.menu a[data-filter="design"]', 'designCategory');
    updateElementText('.menu a[data-filter="workshops"]', 'workshopsCategory');
    updateElementText('.menu a[data-filter="texts"]', 'textsCategory');
    updateElementText('.menu a[data-filter="experiments"]', 'experimentsCategory');
    
    
    
    
    // Update back button if it exists
    const backButton = document.getElementById('back-button');
    if (backButton) {
      if (window.location.pathname.includes('EDEN.html') && 
          !backButton.getAttribute('href')?.includes('index.html')) {
        updateElementText('#back-button', 'backToBlog');
      } else {
        updateElementText('#back-button', 'backToMain');
      }
    }
    
    // Update homepage intro poem if present
    const introPoem = document.querySelector('.intro.tc');
    if (introPoem) {
      introPoem.innerHTML = translations[currentLanguage].introPoem;
    }
    
    // Update about page content if present
    updateAboutPageContent();
    
    // Update any content in project pages
    updateProjectContent();
  }
  
  // Update about page content
  function updateAboutPageContent() {
  const bioSection = document.querySelector('.bio');
  if (!bioSection) return;

  const paragraphs = bioSection.querySelectorAll('p');
  if (paragraphs.length >= 3) {
    paragraphs[0].innerHTML = translations[currentLanguage].bioP1;
    paragraphs[1].innerHTML = translations[currentLanguage].bioP2;
    paragraphs[2].innerHTML = translations[currentLanguage].bioP3;
  }
}

  
  // Function to translate project content
 // Update translate.js - implement updateProjectContent function properly

 function updateProjectContent() {
  // Check if we're on a project page
  const projectContainer = document.getElementById('project-container');
  if (!projectContainer || projectContainer.style.display === 'none') return;
  
  const projectId = projectContainer.dataset.projectId;
  if (!projectId) return;

  // Find the project in galleryData
  const project = window.galleryData?.find(item => item.id === projectId);
  if (!project) return;

  // Update title
  const titleElement = projectContainer.querySelector('.page-header h3.fl');
  if (titleElement) {
    if (currentLanguage === 'es' && project.title_es) {
      titleElement.textContent = project.title_es;
    } else {
      titleElement.textContent = project.title;
    }
  }

  // Update description
  const descriptionElement = projectContainer.querySelector('.page-description .w-70-ns');
  if (descriptionElement) {
    if (currentLanguage === 'es' && project.description_es) {
      descriptionElement.innerHTML = project.description_es;
    } else {
      descriptionElement.innerHTML = project.description;
    }
  }
}
  
  // Function to translate category names
  function translateCategory(category) {
    const categoryKey = category + 'Category';
    return translations[currentLanguage][categoryKey] || category;
  }
  
  // Initialize language settings on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      currentLanguage = savedLanguage;
    } else {
      // Check browser language
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.startsWith('es')) {
        currentLanguage = 'es';
      }
    }
    
    // Initialize the page with the correct language
    updatePageContent();
    updateLanguageLinks();
    
  });

  // Add this to your translate.js at the end of the document.addEventListener('DOMContentLoaded', ...) function
console.log("Current language:", currentLanguage);
if (window.galleryData) {
  const itemsWithTranslations = window.galleryData.filter(item => item.title_es);
  console.log("Items with Spanish titles:", itemsWithTranslations.length);
  if (itemsWithTranslations.length > 0) {
    console.log("Sample translation:", itemsWithTranslations[0].title, "→", itemsWithTranslations[0].title_es);
  }
}