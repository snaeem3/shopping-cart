# Shopping Cart

This project showcases a mock shopping website built with React as part of the [Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart) Curriculum. Browse and shop through a variety of products, then view the total price of your items in the cart.

## [Live View](https://snaeem3.github.io/shopping-cart)
![shop-page](https://github.com/snaeem3/shopping-cart/assets/11710951/86a7b1bb-0688-4063-9c03-152f32c8333c)
![shop-cart](https://github.com/snaeem3/shopping-cart/assets/11710951/0c68387e-b07d-46a7-bdbe-0f90b8e58fd4)


## Skills involved with this project:

- React Testing
  - Unit tests using `@testing-library/react`
  - Navigation testing using `MemoryRouter` from `react-router-dom`
  - Querying DOM elements `getByText`, `getAllByRole`, etc.
  - DOM manipulation and assertion using `fireEvent`
  - Asynchronous testing using `waitFor` from `@testing-library/react`
  - Jest Mocking
- ReactJS & Javascript
  - React functional components
  - React Hooks
    - `useState`
    - `useEffect`
  - React Router (`BrowserRouter`, `Routes`, `Route`, `Link`) for handling navigation and routing within the application.
  - React props (`products`, `addItemToCart`, etc.) to pass data and functions between components
  - Rendering JSX code using React
  - DOM manipulation
  - Event handling (`addItemToCart`, `deleteItemFromCart`, `toggleCartView`, `hideCartView`) to perform actions based on user interactions.
- CSS
  - Responsive design for portrait/landscape screens using media queries
  - Transition effects
  - Slideshow transition effects
  - CSS Grid
  - CSS Flex
  - Sidebar menu
  - Overlay effects
  - Toggle switches
  - Sticky buttons
  - Hover effects
  - .svg icons

## Getting Started

### Prerequisites

- Node.js (version 14 or above)
- npm (Node Package Manager)

### Installation

1. Clone the repository or download the source code.

2. Navigate to the project directory in your terminal.

3. Run the following command to install the dependencies:

   `npm install`

### Usage

To start the application, run the following command:

`npm start`

This will start the development server and the application will be accessible at http://localhost:3000.

### Scripts

The following scripts are available in the project:

- `npm start`: Starts the development server.
- `npm build`: Builds the production-ready optimized bundle.
- `npm test`: Runs tests using Jest.
- `npm run eject`: Ejects the create-react-app configuration.
- `npm run lint`: Lints the code using ESLint.
- `npm run lint:fix`: Lints the code and automatically fixes fixable issues.
