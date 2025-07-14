# Backend Setup Guide (Node.js, Express, MongoDB, GraphQL)

This guide helps you set up the backend on **macOS** and **Windows**.

---

## 1. Prerequisites
- Node.js (LTS)
- npm
- VSCode
- Cursor
- MongoDB
- Git

---

## 2. Install Node.js & npm

### macOS
- Download from https://nodejs.org/en/download
- Or use Homebrew:
  ```sh
  brew install node
  ```
- Verify:
  ```sh
  node -v
  npm -v
  ```
- ![Node Install Mac](./docs/node-mac.png)

### Windows
- Download from https://nodejs.org/en/download
- Run installer.
- Verify in Command Prompt:
  ```sh
  node -v
  npm -v
  ```
- ![Node Install Windows](./docs/node-win.png)

---

## 3. Install VSCode
- Download: https://code.visualstudio.com/
- ![VSCode Download](./docs/vscode.png)

---

## 4. Install Cursor
- Download: https://www.cursor.so/
- ![Cursor Download](./docs/cursor.png)

---

## 5. Install MongoDB
- Download: https://www.mongodb.com/try/download/community
- Or use Docker:
  ```sh
  docker run -d -p 27017:27017 --name mongo mongo:latest
  ```
- ![MongoDB Install](./docs/mongodb.png)

---

## 6. Install Dependencies
- In the repo root:
  ```sh
  npm install
  ```
- ![npm install](./docs/npm-install.png)

---

## 7. Run the App
- Start backend server:
  ```sh
  npm start
  ```
- ![npm start](./docs/npm-start.png)

---

## 8. GraphQL Setup
- Apollo Server is used. See `/src/graphql` for schema.
- ![GraphQL](./docs/graphql.png)

---

## 9. Troubleshooting
- If MongoDB connection fails, check if MongoDB is running.
- For dependency errors, delete `node_modules` and run `npm install` again.

---

## 10. Useful Links
- Node.js: https://nodejs.org/
- MongoDB: https://www.mongodb.com/
- Apollo GraphQL: https://www.apollographql.com/ 