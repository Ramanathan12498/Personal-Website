/**
 * script.js for Ramanathan Muthu's Personal Website
 * Handles theme switching, mobile menu, and search functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const themeToggle = document.getElementById('theme-toggle');
    const searchBtn = document.getElementById('search-btn');
    const closeSearchBtn = document.getElementById('close-search');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Check for saved theme preference or prefer-color-scheme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    
    // Theme Toggle Functionality
    themeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Search Functionality
    searchBtn.addEventListener('click', function() {
        searchOverlay.classList.remove('hidden');
        searchInput.focus();
    });
    
    closeSearchBtn.addEventListener('click', function() {
        searchOverlay.classList.add('hidden');
    });
    
    // Close search on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && !searchOverlay.classList.contains('hidden')) {
            searchOverlay.classList.add('hidden');
        }
    });
    
    // Also close search when clicking outside of the search input
    searchOverlay.addEventListener('click', function(event) {
        if (event.target === searchOverlay) {
            searchOverlay.classList.add('hidden');
        }
    });
    
    // Mobile Menu Functionality
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-links') && 
            !event.target.closest('.hamburger') && 
            navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

/**
 * Search functionality - can be expanded in the future
 * Currently this is a placeholder
 */
function performSearch(query) {
    if (!query || query.trim() === '') {
        return;
    }
    
    console.log(`Searching for: ${query}`);
    // This would typically be connected to a backend search functionality
    // For now, we'll just redirect to a search results page or show an alert
    alert(`Search functionality will be implemented soon. You searched for: "${query}"`);
}

// Handle search form submission
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch(searchInput.value);
        }
    });
});
