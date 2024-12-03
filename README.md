# React Blog Application

A full-stack React Blog Application built using React, Redux for state management, React Router for routing, and Appwrite as the backend-as-a-service platform for authentication, database, and file storage. This application supports user authentication, post creation, editing, viewing, and managing, along with responsive design optimized for both mobile and desktop views.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Components Overview](#components-overview)
- [Authentication Flow](#authentication-flow)
- [Routing](#routing)
- [Installation](#installation)
  - [Step 1: Clone the Repository](#step-1-clone-the-repository)
  - [Step 2: Install Dependencies](#step-2-install-dependencies)
  - [Step 3: Set Up Environment Variables](#step-3-set-up-environment-variables)
  - [Step 4: Run the Development Server](#step-4-run-the-development-server)
- [Running the Application](#running-the-application)
- [License](#license)

---

## Project Overview

This project is a modern, fully functional blog application that allows users to:

- Register and log in using Appwrite authentication.
- View, create, and edit blog posts.
- The application features both public and protected routes, which ensure that only authenticated users can add or edit posts.

The app makes use of:

- **React** for the frontend framework.
- **Redux** for state management and handling user authentication.
- **Appwrite** for authentication, database management, and file storage.
- **Tailwind CSS** for utility-first styling.

---

## Features

- **User Authentication**: Users can sign up, log in, and log out.
- **Protected Routes**: Users who are not authenticated are restricted from accessing certain pages (e.g., creating or editing posts).
- **Post Management**: Users can create, edit, view, and delete posts.
- **Responsive Design**: The application adapts to various screen sizes using Tailwind CSS.
- **Appwrite Backend**: Data storage and user management are handled by Appwrite, a powerful open-source backend-as-a-service platform.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps to manage the application's state.
- **React Router**: A library for routing in React applications.
- **Appwrite**: An open-source backend-as-a-service platform for handling authentication, database storage, and file management.
- **Tailwind CSS**: A utility-first CSS framework for designing custom UIs.
- **Vite**: A fast, modern build tool for frontend development.

---

## Environment Variables

This project uses environment variables to connect to your Appwrite backend. Create a `.env` file at the root of the project and add the following variables:

```env
REACT_APP_APPWRITE_URL=<Your-Appwrite-Instance-URL>
REACT_APP_APPWRITE_PROJECT_ID=<Your-Appwrite-Project-ID>
REACT_APP_APPWRITE_DATABASE_ID=<Your-Appwrite-Database-ID>
REACT_APP_APPWRITE_COLLECTION_ID=<Your-Appwrite-Collection-ID>
REACT_APP_APPWRITE_BUCKET_ID=<Your-Appwrite-Bucket-ID>
```

These environment variables are required for connecting your React app to the Appwrite instance, enabling functionalities like authentication, post storage, and file management.

---

## Folder Structure

Here’s an overview of the main directories and files in the project:

```
/src
  /assets               # Contains static assets like images, icons, and logos
  /components           # Reusable UI components (Buttons, Inputs, Cards, etc.)
  /pages                # Contains page components like Home, Login, Signup, etc.
  /store                # Redux setup including slices (authSlice.js) and store (store.js)
  /conf                 # Appwrite configuration and connection logic
  /appwrite             # Contains logic for interacting with Appwrite services
  App.jsx               # Main application layout component that wraps the routes
  main.jsx              # Entry point for the application (ReactDOM.render)
  index.css             # Global styles (using Tailwind CSS)
```

### Key Files and Directories

- **`/components`**: Contains reusable UI components like `Button`, `Input`, `PostCard`, and `Select`. These components follow a clean, modular structure that can be reused across different parts of the app.
  
- **`/pages`**: Each page (e.g., `Home`, `Login`, `Signup`, `Post`) is a React component located here. This is where the main page-level components are rendered.
  
- **`/store`**: Contains the Redux state management logic. `authSlice.js` manages the authentication state, while `store.js` sets up and configures the Redux store.

- **`/appwrite`**: This directory contains the logic to interact with the Appwrite backend for authentication and managing data storage (posts, images, etc.).

---

## Components Overview

Below are descriptions of key components in the app:

- **`Button.jsx`**: A customizable button component that accepts `bgColor`, `textColor`, and `className` as props to control its appearance. It uses Tailwind CSS classes for styling.
  
- **`Input.jsx`**: A flexible input component that forwards the ref to the parent component using `React.forwardRef()`. This makes it easy to handle form inputs in parent components.
  
- **`Logo.jsx`**: A simple logo component, used for displaying a placeholder or brand logo in the footer.
  
- **`PostCard.jsx`**: This component displays a summary of a blog post, including an image and title, and links to the full post page.
  
- **`Select.jsx`**: A customizable dropdown component using `select` HTML tag and `React.forwardRef` for passing references.

- **`Footer.jsx`**: Displays the footer with company links, support sections, and legal links.

- **`AuthLayout.jsx`**: A higher-order component (HOC) used to protect certain routes from unauthorized access by checking the user’s authentication status.

---

## Authentication Flow

The app implements the following authentication flow using Redux and Appwrite:

1. **Signup**: Users can sign up by providing their credentials, which are validated by Appwrite.
2. **Login**: Users can log in with their credentials. On successful login, the authentication state is updated in Redux.
3. **Logout**: Users can log out, which will clear the authentication state in Redux.
4. **Protected Routes**: Certain pages (like `/add-post`, `/all-posts`, `/edit-post/:slug`) are only accessible by authenticated users. The `Protected` component checks if the user is logged in before allowing access.

---

## Routing

This application uses `react-router-dom` for client-side routing. Here is the structure of the routes:

- **`/`**: Home page, accessible to all users.
- **`/login`**: Login page, accessible only to users who are not authenticated.
- **`/signup`**: Signup page, accessible only to users who are not authenticated.
- **`/all-posts`**: Displays a list of blog posts, accessible only to authenticated users.
- **`/add-post`**: A page to create new posts, accessible only to authenticated users.
- **`/edit-post/:slug`**: A page to edit an existing post, accessible only to authenticated users.
- **`/post/:slug`**: Displays a single blog post based on the slug, accessible by all users.

Protected routes are handled by the `Protected` component, which ensures only authenticated users can access certain pages.

---

## Installation

To get the project up and running, follow these steps:

### Step 1: Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/react-blog-app.git
cd react-blog-app
```

### Step 2: Install Dependencies

Use npm to install the project dependencies:

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file at the root of the project and add the following:

```env
REACT_APP_APPWRITE_URL=<Your-Appwrite-Instance-URL>
REACT_APP_APPWRITE_PROJECT_ID=<Your-Appwrite-Project-ID>
REACT_APP_APPWRITE_DATABASE_ID=<Your-Appwrite-Database-ID>
REACT_APP_APPWRITE_COLLECTION_ID=<Your-Appwrite-Collection-ID>
REACT_APP_APPWRITE_BUCKET_ID=<Your-Appwrite-Bucket-ID>
```

### Step 4: Run the Development Server

After setting up the environment variables, you can start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` (or another port if specified). to see the app running locally.

---

## Running the Application

To run the application, ensure all dependencies are installed and the environment variables are properly set. After running the app using `npm run dev`, the application will be live at `http://localhost:3000` (or another port if specified).


---

## Acknowledgements

- **Appwrite**: Provides the backend services for this app, including authentication and database management.
- **Tailwind CSS**: Used for styling the UI components with utility-first classes.
- **React**: The core frontend library for building the user interface.
- **Redux**: Used for global state management, including handling authentication.
