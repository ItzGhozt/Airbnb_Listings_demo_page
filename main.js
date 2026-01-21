// Wait for the page to fully load before running our code
document.addEventListener('DOMContentLoaded', function() {
    loadListings();
});

// Main function to fetch and display listings
//We will write the code in html and this code will clone it 50 times 
async function loadListings() {
    try {
        // Get the JSON file
        const response = await fetch('airbnb_sf_listings_500.json');
        const allListings = await response.json();
        
        // Get only the first 50 listings
        const first50 = allListings.slice(0, 50);
        
        // Get the container where we'll put all cards
        const listingsContainer = document.getElementById('listings');
        
        // Geting the template
        const template = document.getElementById('listing-template');
        
        // Create a card for each listing
        first50.forEach(listing => {
            const card = createListingCard(listing, template);
            listingsContainer.appendChild(card);
        });
        
    } catch (error) {
        console.error('Error loading listings:', error);
        document.getElementById('listings').innerHTML = '<p>Error loading listings. Please refresh the page.</p>';
    }
}

// Function to create one listing card from the template
function createListingCard(listing, template) {
    // Clone the template
    const card = template.content.cloneNode(true);
    
    // Fill in the image
    card.querySelector('.listing-image').src = listing.picture_url;
    card.querySelector('.listing-image').alt = listing.name;
    
    // Fill in the name
    card.querySelector('.listing-name').textContent = listing.name;
    
    // Fill in the price
    card.querySelector('.listing-price').textContent = listing.price + ' / night';
    
    // Fill in host photo
    card.querySelector('.view-btn').href = listing.listing_url;
    card.querySelector('.host-photo').src = listing.host_thumbnail_url;
    card.querySelector('.host-photo').alt = listing.host_name;
    
    // Fill in host name
    card.querySelector('.host-name').textContent = 'Hosted by ' + listing.host_name;
    
    // Fill in description (cleaned)
    const description = cleanDescription(listing.description);
    card.querySelector('.listing-description').textContent = description;
    
    // Fill in amenities
    const amenities = parseAmenities(listing.amenities);
    const amenitiesList = amenities.slice(0, 5).join(', ');
    const moreCount = amenities.length > 5 ? ` (+${amenities.length - 5} more)` : '';
    card.querySelector('.amenities-list').textContent = amenitiesList + moreCount;
    
    return card;
}

// Helper function to clean up description text
function cleanDescription(description) {
    if (!description) return 'No description available';
    
    // Remove HTML tags
    let clean = description.replace(/<[^>]*>/g, ' ');
    
    // Shorten to 150 characters
    if (clean.length > 150) {
        clean = clean.substring(0, 150) + '...';
    }
    
    return clean;
}

// Helper function to parse amenities from JSON string
function parseAmenities(amenitiesString) {
    try {
        const parsed = JSON.parse(amenitiesString);
        return parsed;
    } catch (error) {
        return [];
    }
}