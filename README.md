# Drive Lah Assignment

## Overview

This project is a frontend web application built for the "Drive Lah" assignment using modern React.js with TypeScript, Redux for state management, and Vite for fast development and building. The application is designed to be scalable and maintainable, utilizing best practices in React, TypeScript, and automated testing with Jest and Cypress.

## Features

- **React with TypeScript**: Type-safe, maintainable code using React and TypeScript.
- **State Management**: Implemented using Redux Toolkit and Redux Persist to handle complex states.
- **Styling**: Includes `Sass` and `Bootstrap` for clean and responsive UI design.
- **Iconography**: Font Awesome integration for rich and versatile icons.
- **Testing**: Comprehensive testing setup including unit tests with Jest and end-to-end tests with Cypress.

## Prerequisites

- **Node.js**: Make sure Node.js (version 14 or above) is installed.
- **npm**: This project uses npm as the package manager.

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd drive-lah-assignment
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   Start the development server to begin building and testing:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000` by default.

## Available Scripts

- **Start Development Server**: Run the app locally with live reload.

  ```bash
  npm run dev
  ```

- **Build for Production**: Create an optimized build of the app.

  ```bash
  npm run build
  ```

- **Preview Production Build**: Preview the production build locally.

  ```bash
  npm run preview
  ```

- **Run Linter**: Lint the codebase using ESLint.

  ```bash
  npm run lint
  ```

- **Run Unit Tests**: Execute unit tests using Jest.

  ```bash
  npm run test
  ```

- **Run Cypress Tests**: Open the Cypress UI to run e2e tests or run them directly in the console.

  - Open Cypress UI:

    ```bash
    npm run cypress:open
    ```

  - Run Cypress Tests in Headless Mode:
    ```bash
    npm run cypress:run
    ```

## Project Structure

The project follows a modular structure:

- **src/**: All source code for the application.
  - **components/**: Reusable UI components.
  - **pages/**: Different pages of the application.
  - **redux/**: Redux store configuration and slices for state management.
  - **router/**: Application routing configuration.
  - **layout/**: Layout components (e.g., headers, footers).

## Testing

- **Unit Testing**: Jest is used for unit testing. Tests are located alongside their respective components.
- **End-to-End Testing**: Cypress is used to ensure that the application functions properly from the user's perspective. You can run the Cypress tests either in the UI or headlessly using the provided npm scripts.

## Code Quality

- **ESLint**: The project uses ESLint with TypeScript and React settings to maintain code quality.
- **Formatting**: Best practices for React hooks are ensured with `eslint-plugin-react-hooks`.

## Tools and Technologies

- **Vite**: Development and build tool for fast HMR and optimized production builds.
- **React and Redux**: Core UI and state management.
- **Cypress & Jest**: Testing tools for unit and e2e testing.
- **Font Awesome**: Icon library for better UI visuals.
- **Bootstrap & Sass**: Styling framework and preprocessor for a modern, responsive design.

## How to Contribute

Feel free to fork the project, create a new branch, and submit a pull request. Contributions to fix bugs, add features, or improve documentation are always welcome!

1. Fork the project.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to the contributors of open-source libraries and tools that make this project possible.

---

Feel free to reach out if you have any questions or suggestions for improvement. Happy coding!
