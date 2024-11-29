# React + TypeScript + Vite

![image](https://github.com/user-attachments/assets/118d9efd-80f3-4f46-a6f1-a43cda7d6399)

# ShowcaseCars

## Description
ShowcaseCars is an application developed with **React** and **Vite**, following best practices in TypeScript. This project was designed to provide a modern and efficient experience for web application development.

## Requirements
- Node.js v18+ 
- Package manager (npm or yarn)

## Setup
1. Clone the repository:  
   ```bash
   git clone <REPOSITORY-URL>
   ```
2. Navigate to the project directory:  
   ```bash
   cd showcasecars
   ```
3. Install dependencies:  
   ```bash
   npm install
   ```
4. Start the development server:  
   ```bash
   npm run dev
   ```

## Available Scripts

### `npm run dev`
Starts the local development server using **Vite**.

### `npm run build`
Builds the application for production using **TypeScript** and **Vite**.

### `npm run lint`
Checks code quality with **ESLint**.

### `npm run preview`
Runs a preview server to test the production build.

## Key Dependencies

### Production
- **React** (`^18.3.1`) and **React-DOM** (`^18.3.1`): Library for building reactive user interfaces.

### Development
- **Vite** (`^5.4.1`): A fast and modern build tool for front-end projects.
- **TypeScript** (`^5.5.3`): A superset of JavaScript that adds static typing.
- **ESLint** (`^9.9.0`): A tool for analyzing and fixing code, ensuring consistent style.
  - **@eslint/js**: Core configuration for ESLint.
  - **eslint-plugin-react-hooks**: Rules for React hooks.
  - **eslint-plugin-react-refresh**: Support for fast refresh in React.
- **@vitejs/plugin-react** (`^4.3.1`): Official Vite support for React.
- **@types/react** and **@types/react-dom**: TypeScript types for React and React-DOM.
- **typescript-eslint** (`^8.0.1`): Integration between TypeScript and ESLint.
- **Globals** (`^15.9.0`): List of global variables for ESLint.

## Project Structure
```plaintext
showcasecars/
├── src/             # Application source code
├── public/          # Static files
├── package.json     # Dependency and script configuration
├── tsconfig.json    # TypeScript configuration
└── .eslintrc.json   # ESLint configuration
```
