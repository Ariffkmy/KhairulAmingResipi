// Function to fetch random TikTok video
async function fetchRandomTikTokVideo() {
    try {
        const response = await fetch('https://www.tiktok.com/@khairulaming?lang=en');
        const data = await response.text();
        const videoRegex = /<video src="([^"]+)"/;
        const captionRegex = /<p class="video-meta-title">([^<]+)<\/p>/;
        const videoMatch = data.match(videoRegex);
        const captionMatch = data.match(captionRegex);
        if (videoMatch && videoMatch[1] && captionMatch && captionMatch[1]) {
            const videoUrl = videoMatch[1];
            const caption = captionMatch[1];
            return { videoUrl, caption };
        } else {
            throw new Error('No videos found');
        }
    } catch (error) {
        console.error('Error fetching TikTok video:', error);
        return null;
    }
}

// Function to update recipe cards with TikTok video and caption
async function updateRecipeCardsWithTikTok() {
    const recipeCards = document.querySelectorAll('.recipe-card');
    for (let i = 0; i < recipeCards.length; i++) {
        const card = recipeCards[i];
        const { videoUrl, caption } = await fetchRandomTikTokVideo();
        if (videoUrl && caption) {
            card.innerHTML = `
                <video width="100%" height="100%" controls>
                    <source src="${videoUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <p>${caption}</p>
            `;
        } else {
            card.innerHTML = '<p>No video available</p>';
        }
    }
}

// Function to show content based on page
function showContent(page) {
    let content = document.getElementById('content');
    if (page === 'home') {
        content.innerHTML = `
            <h1>Resipi by Khairulaming</h1>
            <p>Developed by Ariff Hakimi // Ariffkmy</p>

            <div class="circle-img">
                <img src="profile.jpg" alt="Profile Picture">
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary option-button">Nasi</button>
                <button type="button" class="btn btn-secondary option-button">Mee</button>
                <button type="button" class="btn btn-secondary option-button">Dessert</button>
                <button type="button" class="btn btn-secondary option-button">Lauk-pauk</button>
                <button type="button" class="btn btn-secondary option-button">Lain-lain</button>
                <button type="button" class="btn btn-secondary option-button">Air</button>
            </div>
            <div class="row mt-4">
                <div class="col-md-4">
                    <div class="recipe-card"></div>
                </div>
                <div class="col-md-4">
                    <div class="recipe-card"></div>
                </div>
                <div class="col-md-4">
                    <div class="recipe-card"></div>
                </div>
                <div class="col-md-4">
                    <div class="recipe-card"></div>
                </div>
                <div class="col-md-4">
                    <div class="recipe-card"></div>
                </div>
                <div class="col-md-4">
                    <div class="recipe-card"></div>
                </div>
                <div class="col-md-4">
                    <div class="recipe-card"></div>
                </div>
                <div class="col-md-4">
                    <div class="recipe-card"></div>
                </div>
            </div>
        `;
        updateRecipeCardsWithTikTok(); // Call the function to update recipe cards with TikTok videos
    } else if (page === 'about') {
        content.innerHTML = '<h1>About</h1><p>This is about page.</p>';
    } else if (page === 'recipes') {
        content.innerHTML = '<h1>Recipes</h1><p>This is recipes page.</p>';
    } else if (page === 'contact') {
        content.innerHTML = '<h1>Contact</h1><p>This is contact page.</p>';
    }
}
