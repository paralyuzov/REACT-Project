# Tea Store

Softuni ReactJS course project.
An online store for Japanese tea where visitors can purchase and learn about Japanese tea, its types, brewing methods, and recipes.

![Example GIF](tea-store/src/assets/home-page.gif)

## Technologies Used:

- ReactJS v18 - frontend
- ExpressJS / Mongoose - backend
- MongoDB - database
- Stripe - for payment
- Tailwind CSS - for styling

## Short info and functionalities:

- Guest users can access all the information in the application without adding the product to the cart or to the favorites list.
- Registered users can add items to their cart, their favorite list, and update their profile.
- Admin users can add teas, utensils, and recipes to the application; also, the admin can modify any user and change their role(user or admin).

## Description of the components in the project:

### About

- about-the-tea: A static page containing useful information about Japanese tea.
- preparing-the-tea: Information on how to prepare each type of tea.
- types-of-tea: Information and specifics for each type of tea.

### Blog

- recipe : Recipes that are suitable to accompany Japanese tea.
- story : Stories about how people love to drink their tea and how they prepare it.

### Cart

- A user's shopping cart. The user can change the quantity of the corresponding item, remove it, display the total quantity and the corresponding amount. There is also a payment option.

### Favorites

- User's Favorite Products List

### Footer

- Helpful links for user convenience.

### Guard

- It does not allow unregistered users to access options that can only be used by registered users or admins.

### Header

- Navigation for website application visitors. Contains links to information about tea, available store items, blog, search engine, user panel, favorite items list, shopping cart.

### Home (Main page)

- carousel : A graphic element showcasing tea farms in a 3-image slider.
- mid-section : Section showcasing stories of people about the use of Japanese green tea.
- shopp : Section with a link to shop for every type of tea.
- top-favorites : Section that shows top favorite products from all users.

### Modals

- Modal messages for a better user experience.

### Page not found

- Informs the user about accessing an invalid link.

### Payment

- Informs the user about a successful or declined transaction in case of payment.

### Search Result

- It shows the user's search results for a product.

### Shopping

- It provides the user access to every available item in the database, its price, details for each product individually, the ability to add the product to the cart or to the list of favorite items.

### User
- admin : Control panel for the admin providing functionality that allows adding, deleting, and updating any product or user(only update) in the application.
- profile : Provides information about the registered user, the ability to change their name, email or phone number. Also the ability to delete the profile.
- sign-in : A page that allows the user to log in.
- sigin-up : Profile creation page

### Contexts

- AuthContext : The logic for user authentication using a token. Also, when manually deleting the token from the browser's LocalStorage, the user should be automatically logged out.

- CartContext : The logic of the user's shopping cart. Adding an item, dynamically changing the quantity, deleting an item, calculating the number of products in the cart and their respective and total price.

### Hooks

- useAuth : Custom hooks for user login and registration that modify the authState of the corresponding user.
- useForm : Custom hook that simplifies form handling.

### Shared

- scrollToTop : Functionality where, upon changing pages by the user, the page scrolls to the top.
- spinner : showing while waiting for data from the server.

## Installation

- server :

  1. cd .\server\
  2. npm install
  3. npm run start or npm run debug(for debugging)

- frontend :

  1. open second terminal
  2. cd .\tea-store\
  3. npm install
  4. npm run dev

- For data you can import all the necessary collections(json files) in MongoDB Compass from the provided "data" folder

## Testing payment

- On card information field you can use card number : 4242 4242 4242 4242
- Use a valid future date, such as 12/34.
- Use any three-digit CVC,such as 343.
- For more information you can use this documentation: https://docs.stripe.com/testing
