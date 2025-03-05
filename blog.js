window.blogData = window.blogData || [];
// Language handling
let currentLanguage = 'en'; // Default language - this will be synced with translations.js

// Function to filter blog posts by language
function filterBlogPostsByLanguage(posts, language) {
  return posts.filter(post => 
    post.language === language || post.language === 'both'
  );
}

// Update this function to sync with the global language setting
function syncLanguageWithTranslations() {
  // Check if translations.js is loaded and has set a language
  if (typeof window.currentLanguage !== 'undefined') {
    currentLanguage = window.currentLanguage;
  } else {
    // Use localStorage as a fallback
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      currentLanguage = savedLanguage;
    }
  }
}

// DOM ready event handler
document.addEventListener('DOMContentLoaded', function() {
  const blogList = document.getElementById('blog-list');
  const blogPost = document.getElementById('blog-post');
  const backButton = document.getElementById('back-button');
  
  // Initial render
  if (blogList) {
    renderBlogList();
  }
  
  // Listen for language changes from translations.js
  document.addEventListener('languageChanged', function(e) {
    currentLanguage = e.detail.language;
    
    // If we're on the blog list page, refresh the list
    if (blogList && blogList.style.display !== 'none') {
      renderBlogList();
    }
  });
  
  // Function to render blog list
  function renderBlogList() {
    // Sync language setting
    syncLanguageWithTranslations();
    
    if (!blogData || !blogData.length) {
      // Show appropriate message based on language
      const noPostsMessage = currentLanguage === 'es' ? 
        'No hay entradas de blog todavía.' : 
        'No blog posts yet.';
      
      blogList.innerHTML = `<p class="tc">${noPostsMessage}</p>`;
      return;
    }
    
    // Sort blog posts by date (newest first)
    const sortedBlogData = [...blogData].sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    );
    
    // Filter posts by current language
    const filteredPosts = filterBlogPostsByLanguage(sortedBlogData, currentLanguage);
    
    if (filteredPosts.length === 0) {
      // No posts for this language
      const noPostsMessage = currentLanguage === 'es' ? 
        'No hay entradas de blog en español todavía.' : 
        'No blog posts in English yet.';
      
      blogList.innerHTML = `<p class="tc">${noPostsMessage}</p>`;
      return;
    }
    
    // Generate HTML for filtered posts
    const readMoreText = currentLanguage === 'es' ? 'Leer más →' : 'Read more →';
    
    const blogHTML = filteredPosts.map(post => `
      <div class="blog-item">
        <h2 class="blog-title"><a href="#${post.id}" class="blog-link">${post.title}</a></h2>
        <div class="blog-date">${formatDate(post.date)}</div>
        ${post.thumbnail ? `<img src="${post.thumbnail}" alt="${post.title}" class="blog-thumbnail">` : ''}
        <div class="blog-preview">${getPreview(post.content)}</div>
        <p><a href="#${post.id}" class="blog-link">${readMoreText}</a></p>
      </div>
    `).join('');
    
    blogList.innerHTML = blogHTML;
    
    // Add event listeners to the blog links - with a slight delay to ensure DOM is ready
    setTimeout(() => {
      document.querySelectorAll('.blog-link').forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const id = this.getAttribute('href').substring(1);
          loadBlogPost(id);
        });
      });
    }, 50);
  }
  
    // Sort blog posts by date (newest first)
    const sortedBlogData = [...blogData].sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    );
    
    // Filter posts by current language
    const filteredPosts = filterBlogPostsByLanguage(sortedBlogData, currentLanguage);
    
    if (filteredPosts.length === 0) {
      // No posts for this language
      const noPostsMessage = currentLanguage === 'es' ? 
        'No hay entradas de blog en español todavía.' : 
        'No blog posts in English yet.';
      
      blogList.innerHTML = `<p class="tc">${noPostsMessage}</p>`;
      return;

    }
    
    // Generate HTML for filtered posts
    const blogHTML = filteredPosts.map(post => `
      <div class="blog-item">
        <h2 class="blog-title"><a href="#${post.id}">${post.title}</a></h2>
        <div class="blog-date">${formatDate(post.date)}</div>
        ${post.thumbnail ? `<img src="${post.thumbnail}" alt="${post.title}" class="blog-thumbnail">` : ''}
        <div class="blog-preview">${getPreview(post.content)}</div>
        <p><a href="#${post.id}">${currentLanguage === 'es' ? 'Leer más →' : 'Read more →'}</a></p>
      </div>
    `).join('');
    
    blogList.innerHTML = blogHTML;
    
    // Add event listeners to the blog links
    document.querySelectorAll('.blog-item a').forEach(link => {
      link.addEventListener('click', function(e) {
        const id = this.getAttribute('href').substring(1);
        loadBlogPost(id);
      });
    });
  }
  
  // Function to load a specific blog post
  function loadBlogPost(id) {
    const post = blogData.find(post => post.id === id);
    if (!post) return;
    
    const postHTML = `
      <h1 class="blog-title">${post.title}</h1>
      <div class="blog-date">${formatDate(post.date)}</div>
      ${post.thumbnail ? `<img src="${post.thumbnail}" alt="${post.title}" class="blog-thumbnail">` : ''}
      <div class="blog-content">${post.content}</div>
    `;
    
    blogList.style.display = 'none';
    blogPost.innerHTML = postHTML;
    blogPost.style.display = 'block';
    
    // Update back button behavior
    backButton.removeEventListener('click', goToMainSite);
    backButton.addEventListener('click', goToBlogList);
    backButton.textContent = currentLanguage === 'es' ? 
      '⋆ ˚｡ Volver a la Lista del Blog' : 
      '⋆ ˚｡ Back to Blog List';
    
    // Update URL
    window.history.pushState({blogId: id}, post.title, `blog.html#${id}`);


    setTimeout(() => {
        document.querySelectorAll('.blog-item a').forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.getAttribute('href').substring(1);
            loadBlogPost(id);
          });
        });
      }, 100); // Small delay to ensure DOM is fully rendered
    
  }
  
  // Function to go back to blog list
  function goToBlogList(e) {
    if (e) e.preventDefault();
    
    blogPost.style.display = 'none';
    blogList.style.display = 'block';
    
    // Update back button behavior
    backButton.removeEventListener('click', goToBlogList);
    backButton.addEventListener('click', goToMainSite);
    backButton.textContent = currentLanguage === 'es' ? 
      '⋆ ˚｡ Volver al Contenido Principal' : 
      '⋆ ˚｡ Back to Main Content';
    
    // Update URL
    window.history.pushState({}, 'Blog', 'blog.html');
  }
  
  // Function to go to main site
  function goToMainSite(e) {
    // Default behavior - link to index.html
  }
  
  // Set up initial back button behavior
  if (backButton) {
    backButton.addEventListener('click', goToMainSite);
  }
  
  // Handle browser back button
  window.addEventListener('popstate', function(event) {
    if (event.state && event.state.blogId) {
      loadBlogPost(event.state.blogId);
    } else {
      goToBlogList();
    }
  });
  
  // Check if URL has a hash to load a specific post
  if (window.location.hash) {
    const blogId = window.location.hash.substring(1);
    loadBlogPost(blogId);
  }
});

// Helper function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', options);
}

// Helper function to get a preview of the content
function getPreview(content) {
  // Create a temporary div to parse HTML content
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  
  // Get text content and limit to 150 characters
  let text = tempDiv.textContent || tempDiv.innerText;
  if (text.length > 150) {
    text = text.substring(0, 150) + '...';
  }
  
  return text;
}