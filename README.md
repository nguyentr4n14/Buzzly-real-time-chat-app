# Buzzly - Real-Time Chat App

A feature-rich real-time chat application built with the **MERN stack** (MongoDB, Express.js, React, Node.js), styled using **TailwindCSS** and **DaisyUI**, with **Socket.IO** enabling real-time communication. Authentication and Authorization are implemented using **JWT**, and **Zustand** is used for global state management.

![Demo App](/frontend/public/screenshot-for-readme.png)

---

## Demo

🔗 **Live App**: [Buzzly-real-Time Chat App](https://real-time-chat-app-fqbd.onrender.com)

---

## Features

-   **Real-Time Messaging**: Instant communication powered by Socket.IO.
-   **Authentication & Authorization**: Secure user login and signup with JWT.
-   **Responsive Design**: Beautiful and responsive UI with TailwindCSS and DaisyUI.
-   **User Management**: Manage user profiles and update profile picture.
-   **Global State Management**: Zustand ensures efficient and minimal state management.
-   **Dark Mode and Theme Customization**: Seamless support for 32 different themes with DaisyUI, including light and dark modes.

---

## Tech Stack

### Frontend

-   **React**: Component-based UI.
-   **TailwindCSS**: Utility-first CSS framework for rapid styling.
-   **DaisyUI**: Pre-designed UI components for TailwindCSS.
-   **Zustand**: Lightweight state management.

### Backend

-   **Node.js**: Backend runtime environment.
-   **Express.js**: Web framework for handling API requests.
-   **MongoDB**: NoSQL database for storing user and chat data.
-   **Socket.IO**: Enables real-time, bidirectional communication.

---

### Setup .env file

```js
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```
