// Check if the user has a preferred theme stored in local storage
const preferredTheme = localStorage.getItem('theme');

// If the user has a preferred theme, apply it
if (preferredTheme) {
    document.getElementById('theme-style').setAttribute('href', `../css/${preferredTheme}.css`);
}

// Add event listener to the toggle button
document.getElementById('theme-toggle').addEventListener('click', function() {
    // Get the current theme
    const currentTheme = document.getElementById('theme-style').getAttribute('href');

    // Toggle between light and dark mode
    const newTheme = currentTheme.includes('light') ? 'dark' : 'light';

    // Set the new theme
    document.getElementById('theme-style').setAttribute('href', `../css/${newTheme}.css`);

    // Store the new theme preference in local storage
    localStorage.setItem('theme', newTheme);
});
