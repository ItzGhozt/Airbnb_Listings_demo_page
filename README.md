# SF Airbnb Listings Viewer

A simple web page that displays the first 50 Airbnb listings from San Francisco using vanilla JavaScript, HTML, and CSS.

## Live Demo

**Deployed at:** https://itzghozt.github.io/Airbnb_Listings_demo_page/

## Features

- Displays first 50 listings from JSON data
- Uses fetch API with async/await
- Shows: name, description, amenities, host info (name + photo), price, and thumbnail
- All images are uniform size for consistency
- **Creative addition:** "View on Airbnb" button that opens each listing on Airbnb.com in a new tab

## Style Choices

**Uniform Images:** All listing images are 600px × 400px and host photos are 40px × 40px circles. Used `object-fit: cover` to maintain aspect ratio without distortion.

**Clean Layout:** Simple vertical scroll through listings with minimal styling. White background with basic borders between listings.

**Box Model:** Applied `box-sizing: border-box` to all elements for predictable sizing.

**Responsive:** Images scale down on smaller screens while maintaining fixed height.

## Technologies & Resources

- **HTML5** - [Template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template)
- **CSS3**
  - [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-sizing) - Box model control
  - [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/object-fit) - Image sizing
- **JavaScript (ES6+)**
  - [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Loading data
  - [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) - Asynchronous code

## How to Run Locally

You MUST use a local server (fetch won't work with file://)

### Option 1: Using reload (Recommended - Auto-refresh)

1. Install reload globally (one-time setup):
   ```bash
   npm install -g reload
   ```

2. Navigate to project folder:
   ```bash
   cd your-project-folder
   ```

3. Start the server:
   ```bash
   reload -b
   ```

4. Your browser will open automatically at `http://localhost:8080`
   - The page auto-refreshes when you save changes!

### Option 2: Using Python

1. Navigate to project folder:
   ```bash
   cd your-project-folder
   ```

2. Start server:
   ```bash
   python -m http.server 8000
   ```

3. Open browser and go to: `http://localhost:8000`

.md
```
