# EcoMartEcoMart
EcoMart is a simple e-commerce platform that allows users to browse products, read blogs, and contact the team for queries. It features a modern design with product listing, a blog section, and a contact form. This project was built using React, Bootstrap, and the Fake Store API to simulate product data.

Features
Responsive Design: Built using Bootstrap for a mobile-first approach.
Product Listing: Displays a list of products fetched from an external API (Fake Store API).
Add to Cart & Buy Now: Users can view product details, add items to the cart, and proceed to buy now.
Blog Section: A blog page where articles related to the website or business are displayed.
Contact Us: A simple contact form for users to send messages.
Search Box: Users can search for products using the search box in the navigation bar.
Navbar with Cart Icon: Integrated shopping cart icon for easy access.

Technologies Used
React: JavaScript library for building user interfaces.
React Router: For routing between different pages of the website.
Bootstrap: For responsive styling and layout.
React-Bootstrap: Bootstrap components built specifically for React.
Fake Store API: An API used for simulating e-commerce product data.
React Icons: For including icons such as the cart and search icons.
CSS: Custom styles for additional UI enhancements.

Installation
1. Clone the repository:   git clone https://github.com/your-username/EcoMart.git
2. Navigate to the project directory:   cd EcoMart
3. cd EcoMart:  npm install
4. Start the development server: npm start

The app should now be running at [http://localhost:3000.](https://jsd9xg-3000.csb.app/)

Project Structure
EcoMart/
├── src/
│   ├── components/
│   │   ├── Blog.js
│   │   ├── ContactUs.js
│   │   ├── Footer.js
│   │   ├── NavigationBar.js
│   │   ├── ProductList.js
│   ├── App.js
│   ├── index.js
│   ├── Style.css
├── public/
│   ├── index.html
├── README.md
├── package.json

Key Components:
App.js: The main component where the app structure is defined, including routing to different pages.
NavigationBar.js: Displays the navigation menu with links to Home, Products, Blog, and Contact Us, along with a search bar and cart icon.
ProductList.js: Fetches and displays a list of products from the Fake Store API.
Blog.js: Displays blog articles.
ContactUs.js: Displays a contact form that users can use to send a message.
Footer.js: Displays the footer at the bottom of each page.
