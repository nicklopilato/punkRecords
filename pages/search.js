// Function to perform the search
function performSearch(searchQuery) {
    // Clear previous search results
    clearSearchResults();

    // Get all HTML pages on the website
    let pages = document.querySelectorAll('a[href$=".html"]');

    // Iterate through each page
    pages.forEach(page => {
        // Fetch the content of the page
        fetch(page.href)
            .then(response => response.text())
            .then(html => {
                // Check if the search query exists in the page content
                if (html.includes(searchQuery)) {
                    // Add the page URL to the search results
                    displaySearchResult(page.href);
                }
            })
            .catch(error => console.error('Error fetching page:', error));
    });
}

// Function to display a single search result
function displaySearchResult(url) {
    // Create a list item to display the search result
    let listItem = document.createElement('li');
    listItem.textContent = url;

    // Append the list item to the search results list
    document.getElementById('searchResults').appendChild(listItem);
}

// Function to clear search results
function clearSearchResults() {
    // Remove all child elements from the search results list
    let searchResultsList = document.getElementById('searchResults');
    while (searchResultsList.firstChild) {
        searchResultsList.removeChild(searchResultsList.firstChild);
    }
}

// Function to handle search form submission
function handleSearch() {
    // Get the search query from the input field
    let searchQuery = document.getElementById('searchInput').value;

    // Call the performSearch function with the search query
    performSearch(searchQuery);
}

// Add event listener to the search button
document.getElementById('searchButton').addEventListener('click', handleSearch);

// Optionally, you can also trigger the search function when the user presses "Enter" in the input field
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});