

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
                <button type="button" class="btn btn-secondary option-button" onclick="updateIframesWithUrls('nasi')">Nasi</button>
                <button type="button" class="btn btn-secondary option-button" onclick="updateIframesWithUrls('mee')">Mee</button>
                <button type="button" class="btn btn-secondary option-button" onclick="updateIframesWithUrls('dessert')">Dessert</button>
                <button type="button" class="btn btn-secondary option-button" onclick="updateIframesWithUrls('lauk-pauk')">Lauk-pauk</button>
                <button type="button" class="btn btn-secondary option-button" onclick="updateIframesWithUrls('air')">Air</button>
            </div>
            <div class="row mt-4">
                <div class="col-md-4"><iframe class="embed-responsive-item"></iframe></div>
                <div class="col-md-4"><iframe class="embed-responsive-item"></iframe></div>
                <div class="col-md-4"><iframe class="embed-responsive-item"></iframe></div>
                <div class="col-md-4"><iframe class="embed-responsive-item"></iframe></div>
                <div class="col-md-4"><iframe class="embed-responsive-item"></iframe></div>
                <div class="col-md-4"><iframe class="embed-responsive-item"></iframe></div>
                <div class="col-md-4"><iframe class="embed-responsive-item"></iframe></div>
                <div class="col-md-4"><iframe class="embed-responsive-item"></iframe></div>                
           
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

var currentIndexes = {
    "nasi": 0,
    "mee": 0,
    "dessert": 0,
    "lauk-pauk": 0,
    "air": 0
};

function updateIframesWithUrls(category) {
    const iframes = document.querySelectorAll('.embed-responsive-item');
    const categoryUrls = urls[category];
    for (let i = 0; i < iframes.length; i++) {
        // Use the current index for this category
        const index = currentIndexes[category];
        if (categoryUrls && categoryUrls[index]) {
            iframes[i].src = categoryUrls[index];
            console.log(iframes[i].src);
            // After using a URL, increment the index for this category
            currentIndexes[category]++;
            // If we've reached the end of the URL array for this category, reset the index
            if (currentIndexes[category] >= categoryUrls.length) {
                currentIndexes[category] = 0;
            }
        } else {
            iframes[i].src = 'fallback_url';
        }
    }
}