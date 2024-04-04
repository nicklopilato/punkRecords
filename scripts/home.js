window.onload = function() {
    // Function to fetch and display random featured article
    function displayRandomArticle() {
        // Mock data for demonstration
        const articles = [
            { title: "Luffy", image:"../images/luffyChar.png", content: "Luffy is the main protagonist in the tv show One Piece. He always has a smile on his face as he continues on his adventure to become the Pirate King. In search of the One Piece to achieve his goal, he makes many of friends, some of which join his crew in pursuit of their own dreams.", link: "../pages/luffy.html" },
            { title: "Zoro", image:"../images/zoroChar.png", content: "Zoro is a swordsman on his journey to beceome the World's Greatest Swordsman, a title currently held by <a href='../pages/mihawk.html'>Dracule Mihawk</a>. Additonally, Zoro is the Vice Captain of the Strawhat Pirates as he was the second-ever member. He is most known for his unique three-sword style.", link: "../pages/Zoro.html" },
            { title: "Strawhat Pirates", image:"../images/jollyRoger-icon.png", content: "The Strawhat Pirates are a group of fearsome pirates led by their captain, <a href='../pages/luffy.html'>Monkey. D Luffy</a>. After 2 years, they have gained numerous allies and Luffy has even attained the title Emperor of the Sea.", link: "../pages/strawhats.html" }
        ];

        // Select a random article
        const randomIndex = Math.floor(Math.random() * articles.length);
        const randomArticle = articles[randomIndex];

        // Display the selected article
        const featuredContentDiv = document.getElementById("featured-content");
        featuredContentDiv.innerHTML = `<img src="${randomArticle.image}" alt="${randomArticle.title}" class="article-image">
                                 <div class="article-content">
                                     <h3>${randomArticle.title}</h3>
                                     <p>${randomArticle.content}</p>
                                     <a href="${randomArticle.link}">Read more</a>
                                 </div>`;
    }

    // Function to handle search functionality
    function search() {
        // Retrieve search query
        const searchQuery = document.getElementById("search").value;
        // Perform search operation (implementation depends on backend/frontend architecture)
        console.log("Search query:", searchQuery);
    }


    function updateReleaseDates(releaseDates) {
        // Function to calculate time remaining in Days Hours Minutes Seconds format
        function getTimeRemaining(endTime) {
            const total = Date.parse(endTime) - Date.now();
            const seconds = Math.floor((total / 1000) % 60);
            const minutes = Math.floor((total / 1000 / 60) % 60);
            const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
            const days = Math.floor(total / (1000 * 60 * 60 * 24));
            return {
                total,
                days,
                hours,
                minutes,
                seconds
            };
        }
    
        // Function to initialize the countdown display
        function initializeClock(endTime, countdownDiv, type) {
            // Update the countdown every second
            function updateClock() {
                const timeRemaining = getTimeRemaining(endTime);
    
                // Display the countdown in Days Hours Minutes Seconds format
                countdownDiv.innerHTML = `<p><strong>Next ${type}:</strong> ${timeRemaining.days} days ${timeRemaining.hours} hours ${timeRemaining.minutes} minutes ${timeRemaining.seconds} seconds</p>`;
            }
    
            // Initial call to update the clock immediately
            updateClock();
    
            // Update the clock every second
            setInterval(updateClock, 1000);
        }
    
        // Get the release content div
        const releaseContentDiv = document.getElementById("release-content");
    
        // Create divs for manga and anime countdowns
        const mangaCountdownDiv = document.createElement("div");
        mangaCountdownDiv.id = "manga-release-countdown";
        const animeCountdownDiv = document.createElement("div");
        animeCountdownDiv.id = "anime-release-countdown";
    
        // Append manga and anime countdown divs to release content div
        releaseContentDiv.appendChild(mangaCountdownDiv);
        releaseContentDiv.appendChild(animeCountdownDiv);
    
        // Call initializeClock() for manga and anime countdowns
        initializeClock(releaseDates.nextMangaDate, mangaCountdownDiv, "Manga Chapter");
        initializeClock(releaseDates.nextAnimeDate, animeCountdownDiv, "Anime Episode");
    }
    
    // Mock data for demonstration
    const releaseDates = {
        nextMangaDate: "2024-04-22", // Example date for next manga chapter
        nextAnimeDate: "2024-04-07" // Example date for next anime episode
    };
    
    // Call the function with release dates object
    updateReleaseDates(releaseDates);

    // Call the functions initially
    displayRandomArticle();

    // Event listener for search input
    document.getElementById("search").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            search();
        }
    });
};