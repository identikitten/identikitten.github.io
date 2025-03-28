// translations.js - Complete translation file

// Translations dictionary
const translations = {
    en: {
      // Navigation
      "about": "about",
      "blog": "blog",
      "contact": "contact",
      "seeInSpanish": "ver en español",
      "seeInEnglish": "see in english",
      
      // Buttons & UI elements
      "backToMain": "⋆ ˚｡ Back to Main Content",
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
      "bioTitle": "I'm a mexican artist based in Vienna.",
      "bioP1": "My practice explores the liminality of presence through the question of how bodies, faces, and identities are encoded, abstracted, and reinterpreted through technological and aesthetic structures.",
      "bioP2": "I am interested in the boundaries between embodiment and mediation, familiarity and strangeness, intimacy and alienation, freedom and control. All mediums are interesting to me, and I work on a concept-first, medium-second basis. In the past, I've worked with text, electronics, textiles, and digital tools such as coding and text protocol hacking.",
      "bioP3": "You can find me on",
      
      // Homepage
      "introPoem": "𓆱    𓆱 𓍢\n𓆱 𓇼 i am 𓆙 𓍢 <br> 𓆱 awake 𓆱 𓆙 \n𓆑 𓆙 in 𓍢𓇼<br>\n 𓆸 𓆱 everything  𓍢 𓆙 \n𓍢 𓇼𓆑 𓇼  i love 𓆑<br>\n𓇼𓆱 𓍢 𓆱 𓍢 and desire 𓍢 𓆑 𓇼 𓆙\n𓆸 to the  𓇼<br>\n  𓆱  𓇼 point 𓆸 𓇼\n𓆱 𓇼 of 𓆑 \nterror 𓆱 𓍢 𓆑",
      
      // Blog
      "noBlogPosts": "No blog posts yet.",
      "readMore": "Read more →"
    },
    es: {
      // Navigation
      "about": "acerca",
      "blog": "blog",
      "contact": "contacto",
      "seeInSpanish": "ver en español",
      "seeInEnglish": "see in english",
      
      // Buttons & UI elements
      "backToMain": "⋆ ˚｡ Volver al Contenido Principal",
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
      "bioTitle": "Soy una artista mexicana radicada en Viena.",
      "bioP1": "Mi práctica explora la liminalidad de la presencia a través de la pregunta de cómo los cuerpos, rostros e identidades son codificados, abstraídos y reinterpretados a través de estructuras tecnológicas y estéticas.",
      "bioP2": "Me interesan los límites entre la corporalidad y la mediación, la familiaridad y la extrañeza, la intimidad y la alienación, la libertad y el control. Todos los medios me resultan interesantes y trabajo con el concepto primero, y el medio después. En el pasado, he trabajado con texto, electrónica, textiles y herramientas digitales como la codificación y el hackeo de protocolos de texto.",
      "bioP3": "Puedes encontrarme en",
      
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
    updateElementText('.intro-links li:nth-child(2) a, .intro-menu-cel li:nth-child(2) a', 'blog');
    updateElementText('.intro-links li:nth-child(3) a, .intro-menu-cel li:nth-child(3) a', 'contact');

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
    
    
    // Footer plans section
    const plansTitle = document.querySelector('.hideandseek ul:last-of-type p');
    if (plansTitle) {
      plansTitle.textContent = translations[currentLanguage].futurePlans;
    }
    
    const plans = document.querySelectorAll('.hideandseek ul:last-of-type li');
    if (plans.length >= 2) {
      plans[0].textContent = translations[currentLanguage].plan1;
      plans[1].textContent = translations[currentLanguage].plan2;
    }
    
    // Update back button if it exists
    const backButton = document.getElementById('back-button');
    if (backButton) {
      if (window.location.pathname.includes('blog.html') && 
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
    if (bioSection) {
      const paragraphs = bioSection.querySelectorAll('p');
      if (paragraphs.length >= 4) {
        paragraphs[0].textContent = translations[currentLanguage].bioTitle;
        paragraphs[1].textContent = translations[currentLanguage].bioP1;
        paragraphs[2].textContent = translations[currentLanguage].bioP2;
        
        // Handle the last paragraph with Instagram link
        const lastP = paragraphs[3];
        const instagramLink = lastP.querySelector('a');
        if (instagramLink) {
          lastP.innerHTML = translations[currentLanguage].bioP3 + ' <a href="' + 
                           instagramLink.getAttribute('href') + '" target="_blank">Instagram</a>.';
        }
      }
    }
  }
  
  // Function to translate project content
 // Update translate.js - implement updateProjectContent function properly

// In updateProjectContent in translate.js
function updateProjectContent() {
  // Check if we're on a project page
  const projectContainer = document.getElementById('project-container');
  if (!projectContainer || projectContainer.style.display === 'none') return;
  
  const projectId = projectContainer.dataset.projectId;
  if (!projectId) return;
  
  // Check if we have translations for this project
  if (translations[currentLanguage].projects && 
      translations[currentLanguage].projects[projectId]) {
    
    const projectTranslations = translations[currentLanguage].projects[projectId];
    
    // Update title
    const titleElement = projectContainer.querySelector('.page-header h3.fl');
    if (titleElement && projectTranslations.title) {
      titleElement.textContent = projectTranslations.title;
    }
    
    // Update description - ensure HTML is preserved
    const descriptionElement = projectContainer.querySelector('.page-description .w-70-ns');
    if (descriptionElement && projectTranslations.description) {
      descriptionElement.innerHTML = projectTranslations.description;
    }
  } else {
    // If there are no translations in projects object, check direct fields
    const item = galleryData.find(item => item.id === projectId);
    if (item) {
      // Update title if title_es exists
      if (currentLanguage === 'es' && item.title_es) {
        const titleElement = projectContainer.querySelector('.page-header h3.fl');
        if (titleElement) {
          titleElement.textContent = item.title_es;
        }
      }
      
      // Update description if description_es exists
      if (currentLanguage === 'es' && item.description_es) {
        const descriptionElement = projectContainer.querySelector('.page-description .w-70-ns');
        if (descriptionElement) {
          descriptionElement.innerHTML = item.description_es;
        }
      }
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