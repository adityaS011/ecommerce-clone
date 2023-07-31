MERN Stack Flipkart Clone
This repository contains a Flipkart clone built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application replicates some of the core features of the popular e-commerce platform Flipkart.

Flipkart Clone

Features
User authentication: Users can sign up, log in, and log out using their email and password. Passwords are securely hashed and stored.
Product browsing: Users can browse through a wide range of products available on the platform. Products are categorized for easy navigation.
Product details: Users can view detailed information about a product, including images, descriptions, and pricing.
Shopping cart: Users can add products to their shopping cart, view the cart contents, update quantities, and remove items.
Checkout: Users can proceed to the checkout process, provide shipping details, and place orders.
Order history: Users can view their order history and the status of their past orders.
Admin panel: Admins can manage products, categories, and user orders through a dedicated admin panel.
Installation
To run this Flipkart clone on your local machine, follow these steps:

Clone the repository: git clone https://github.com/adityaS011/ecommerce-clone.git
Change directory: cd ecommerce-clone
Install server dependencies: cd server && npm install
Install client dependencies: cd ../client && npm install
Create a .env file in the server directory and set the required environment variables (e.g., MongoDB URI, JWT secret, etc.).
Start the server: cd ../server && npm start
Start the client: cd ../client && npm run dev
Make sure you have Node.js and MongoDB installed on your machine.

Directory Structure

mern-flipkart-clone/
├── client/           # Frontend (React.js) code
├── server/           # Backend (Express.js) code
└── README.md         # Project documentation (you are here!)
Contributing
Contributions to this Flipkart clone are welcome! If you find any issues or have improvements to suggest, feel free to create a pull request.

Before contributing, please ensure that you follow the code of conduct.

License
This project is licensed under the MIT License.

Happy shopping! 😄🛍️
