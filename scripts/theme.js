// Function to set the theme based on the value in the checkbox
function setTheme(theme) {
    const linkElement = document.getElementById('home-light-stylesheet'); // Change this to match the ID of your home light stylesheet
    linkElement.setAttribute('href', theme);
    // Store the selected theme in a cookie
    document.cookie = `theme=${theme};expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

// Function to toggle between light and dark mode
function toggleTheme() {
    const checkbox = document.getElementById('darkmode-toggle');
    const currentPath = getCurrentThemePath(); // Get the current theme path
    const currentTheme = checkbox.checked ? 'light.css' : 'dark.css'; // Invert the current theme logic
    const newTheme = checkbox.checked ? 'dark.css' : 'light.css'; // Invert the new theme logic

    // Get all link elements with rel="stylesheet"
    const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
    
    // Iterate over each link element and update its href attribute
    linkElements.forEach(linkElement => {
        const href = linkElement.getAttribute('href');
        if (href.includes(currentTheme)) {
            const newPath = href.replace(currentTheme, newTheme);
            linkElement.setAttribute('href', newPath);
            // Store the selected theme in a cookie for each stylesheet
            document.cookie = `theme_${linkElement.id}=${newPath};expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        }
    });
}

// Function to get the current theme path
function getCurrentThemePath() {
    const linkElement = document.getElementById('theme-style'); // Change this to match the ID of your home light stylesheet
    const currentHref = linkElement.getAttribute('href');
    const lastSlashIndex = currentHref.lastIndexOf('/');
    const themePrefix = currentHref.substring(0, lastSlashIndex + 1);
    return themePrefix;
}

// Function to check the current theme from the cookie
function checkTheme() {
    const themeCookie = document.cookie.split('; ').find(row => row.startsWith('theme_'));
    if (themeCookie) {
        const theme = themeCookie.split('=')[1];
        setTheme(theme);
        // Check the checkbox if the dark theme is selected
        if (theme.includes('dark')) {
            document.getElementById('darkmode-toggle').checked = true;
        }
    }
}

// Call the checkTheme function when the page loads
window.onload = checkTheme;

// Event listener for toggle
document.getElementById('darkmode-toggle').addEventListener('change', function() {
    toggleTheme();
});