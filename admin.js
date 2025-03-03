document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to current tab and content
            tab.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Load existing data
    let galleryData = [];
    let blogData = [];
    
    // Try to load gallery data
    try {
        const storedGallery = localStorage.getItem('organismo-gallery');
        if (storedGallery) {
            galleryData = JSON.parse(storedGallery);
        } else {
            // If not in localStorage, try to fetch from data.js
            fetch('data.js')
                .then(response => response.text())
                .then(text => {
                    // Extract the array from the const declaration
                    const dataString = text.substring(text.indexOf('['), text.lastIndexOf(']') + 1);
                    try {
                        galleryData = JSON.parse(dataString);
                        localStorage.setItem('organismo-gallery', JSON.stringify(galleryData));
                        renderGalleryItems();
                    } catch (e) {
                        console.error('Error parsing data.js:', e);
                    }
                })
                .catch(error => console.error('Error loading data.js:', error));
        }
    } catch (e) {
        console.error('Error loading gallery data:', e);
    }
    
    // Try to load blog data
    try {
        const storedBlog = localStorage.getItem('organismo-blog');
        if (storedBlog) {
            blogData = JSON.parse(storedBlog);
        }
    } catch (e) {
        console.error('Error loading blog data:', e);
    }
    
    // Render existing items
    renderGalleryItems();
    renderBlogPosts();
    
    // Gallery form submission
    const galleryForm = document.getElementById('gallery-form');
    galleryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newItem = {
            id: document.getElementById('item-id').value,
            title: document.getElementById('item-title').value,
            year: document.getElementById('item-year').value,
            category: document.getElementById('item-category').value,
            symbols: document.getElementById('item-symbols').value,
            thumbnail: document.getElementById('item-thumbnail').value,
            images: document.getElementById('item-images').value.split('\n').filter(line => line.trim() !== ''),
            decoration: document.getElementById('item-decoration').value,
            description: document.getElementById('item-description').value
        };
        
        // Check if item with this ID already exists
        const existingIndex = galleryData.findIndex(item => item.id === newItem.id);
        
        if (existingIndex >= 0) {
            // Update existing item
            galleryData[existingIndex] = newItem;
        } else {
            // Add new item
            galleryData.push(newItem);
        }
        
        // Save to localStorage
        localStorage.setItem('organismo-gallery', JSON.stringify(galleryData));
        
        // Generate data.js file content
        generateDataJs();
        
        // Show saved notification
        const savedNotice = document.getElementById('gallery-saved');
        savedNotice.classList.add('visible');
        setTimeout(() => {
            savedNotice.classList.remove('visible');
        }, 3000);
        
        // Reset form
        galleryForm.reset();
        
        // Update management list
        renderGalleryItems();
    });
    
    // Blog form submission
    const blogForm = document.getElementById('blog-form');
    blogForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newPost = {
            id: document.getElementById('blog-id').value,
            title: document.getElementById('blog-title').value,
            date: document.getElementById('blog-date').value,
            thumbnail: document.getElementById('blog-thumbnail').value,
            content: document.getElementById('blog-content').value
        };
        
        // Check if blog with this ID already exists
        const existingIndex = blogData.findIndex(post => post.id === newPost.id);
        
        if (existingIndex >= 0) {
            // Update existing post
            blogData[existingIndex] = newPost;
        } else {
            // Add new post
            blogData.push(newPost);
        }
        
        // Save to localStorage
        localStorage.setItem('organismo-blog', JSON.stringify(blogData));
        
        // Generate blog.js file content
        generateBlogJs();
        
        // Show saved notification
        const savedNotice = document.getElementById('blog-saved');
        savedNotice.classList.add('visible');
        setTimeout(() => {
            savedNotice.classList.remove('visible');
        }, 3000);
        
        // Reset form
        blogForm.reset();
        
        // Update management list
        renderBlogPosts();
    });
    
    // Function to generate data.js content
    function generateDataJs() {
        let content = 'const galleryData = ' + JSON.stringify(galleryData, null, 2) + ';';
        
        // Create a blob and download link
        const blob = new Blob([content], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'data.js';
        document.body.appendChild(a);
        a.click();
        
        // Clean up
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 100);
    }
    
    // Function to generate blog.js content
    function generateBlogJs() {
        let content = 'const blogData = ' + JSON.stringify(blogData, null, 2) + ';';
        
        // Create a blob and download link
        const blob = new Blob([content], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'blog.js';
        document.body.appendChild(a);
        a.click();
        
        // Clean up
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 100);
    }
    
    // Function to render gallery items in the management tab
    function renderGalleryItems() {
        const galleryList = document.getElementById('gallery-items-list');
        if (!galleryList) return;
        
        galleryList.innerHTML = '';
        
        galleryData.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'gallery-item';
            
            itemDiv.innerHTML = `
                <h3>${item.title} (${item.year})</h3>
                <p><strong>Category:</strong> ${item.category}</p>
                <div class="action-buttons">
                    <button class="btn edit-gallery" data-index="${index}">Edit</button>
                    <button class="btn delete-gallery" data-index="${index}">Delete</button>
                </div>
            `;
            
            galleryList.appendChild(itemDiv);
        });
        
        // Add event listeners for edit and delete buttons
        document.querySelectorAll('.edit-gallery').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                editGalleryItem(index);
            });
        });
        
        document.querySelectorAll('.delete-gallery').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (confirm('Are you sure you want to delete this item?')) {
                    deleteGalleryItem(index);
                }
            });
        });
    }
    
    // Function to render blog posts in the management tab
    function renderBlogPosts() {
        const blogList = document.getElementById('blog-posts-list');
        if (!blogList) return;
        
        blogList.innerHTML = '';
        
        blogData.forEach((post, index) => {
            const postDiv = document.createElement('div');
            postDiv.className = 'gallery-item';
            
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p><strong>Date:</strong> ${post.date}</p>
                <div class="action-buttons">
                    <button class="btn edit-blog" data-index="${index}">Edit</button>
                    <button class="btn delete-blog" data-index="${index}">Delete</button>
                </div>
            `;
            
            blogList.appendChild(postDiv);
        });
        
        // Add event listeners for edit and delete buttons
        document.querySelectorAll('.edit-blog').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                editBlogPost(index);
            });
        });
        
        document.querySelectorAll('.delete-blog').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (confirm('Are you sure you want to delete this post?')) {
                    deleteBlogPost(index);
                }
            });
        });
    }
    
    // Function to edit a gallery item
    function editGalleryItem(index) {
        const item = galleryData[index];
        
        // Fill form with item data
        document.getElementById('item-id').value = item.id;
        document.getElementById('item-title').value = item.title;
        document.getElementById('item-year').value = item.year;
        document.getElementById('item-category').value = item.category;
        document.getElementById('item-symbols').value = item.symbols;
        document.getElementById('item-thumbnail').value = item.thumbnail;
        document.getElementById('item-images').value = item.images.join('\n');
        document.getElementById('item-decoration').value = item.decoration;
        document.getElementById('item-description').value = item.description;
        
        // Switch to gallery tab
        document.querySelector('[data-tab="gallery"]').click();
    }
    
    // Function to delete a gallery item
    function deleteGalleryItem(index) {
        galleryData.splice(index, 1);
        localStorage.setItem('organismo-gallery', JSON.stringify(galleryData));
        generateDataJs();
        renderGalleryItems();
    }
    
    // Function to edit a blog post
    function editBlogPost(index) {
        const post = blogData[index];
        
        // Fill form with post data
        document.getElementById('blog-id').value = post.id;
        document.getElementById('blog-title').value = post.title;
        document.getElementById('blog-date').value = post.date;
        document.getElementById('blog-thumbnail').value = post.thumbnail || '';
        document.getElementById('blog-content').value = post.content;
        
        // Switch to blog tab
        document.querySelector('[data-tab="blog"]').click();
    }
    
    // Function to delete a blog post
    function deleteBlogPost(index) {
        blogData.splice(index, 1);
        localStorage.setItem('organismo-blog', JSON.stringify(blogData));
        generateBlogJs();
        renderBlogPosts();
    }
});