# Backend Setup Guide (Node.js, Express, MongoDB, GraphQL)

This guide will help you set up the backend on **macOS** and **Windows**. Every step is explained for beginners, with screenshots and troubleshooting tips.

---

## 1. Prerequisites
You will need:
- **Node.js (LTS)**: Runs JavaScript outside the browser and is required for backend code.
- **npm**: Node's package manager, comes with Node.js.
- **VSCode**: Code editor for writing and debugging code.
- **Cursor**: AI coding assistant for productivity.
- **MongoDB**: Database for storing app data.
- **Git**: Version control to manage code and collaborate.

---

## 2. Install Node.js & npm

### macOS
1. Go to [nodejs.org](https://nodejs.org/en/download).
2. Click the **LTS** (Recommended) download button.
3. Open the downloaded `.pkg` file and follow the installer prompts.
   - ![Node Install Mac](./docs/node-mac.png)
4. Open **Terminal** (press `Cmd + Space`, type “Terminal”, press Enter).
5. Type:
   ```sh
   node -v
   npm -v
   ```
   - You should see version numbers (e.g., `v18.16.0`).
   - If you see “command not found,” restart your terminal or repeat the install.

### Windows
1. Go to [nodejs.org](https://nodejs.org/en/download).
2. Click the **LTS** download for Windows.
3. Run the installer and follow the prompts (keep defaults).
   - ![Node Install Windows](./docs/node-win.png)
4. Open **Command Prompt** (press `Win + R`, type “cmd”, press Enter).
5. Type:
   ```sh
   node -v
   npm -v
   ```
   - You should see version numbers.

---

## 3. Install VSCode
1. Go to [code.visualstudio.com](https://code.visualstudio.com/).
2. Click **Download for Mac** or **Download for Windows**.
3. Open the installer and follow the prompts.
   - ![VSCode Download](./docs/vscode.png)
4. Open VSCode from your Applications or Start Menu.

---

## 4. Install Cursor
1. Go to [cursor.so](https://www.cursor.so/).
2. Click **Download** and install for your OS.
3. Open Cursor and sign in with GitHub or Google.
   - ![Cursor Download](./docs/cursor.png)

---

## 5. Install MongoDB
1. Go to [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).
2. Download the installer for your OS and follow the prompts.
   - ![MongoDB Install](./docs/mongodb.png)
3. (Optional) Use Docker:
   ```sh
   docker run -d -p 27017:27017 --name mongo mongo:latest
   ```
4. (Optional) Download MongoDB Compass GUI: [mongodb.com/products/compass](https://www.mongodb.com/products/compass)

---

## 6. Clone the Project
1. In Terminal or Command Prompt, navigate to the folder where you want the project.
2. Type:
   ```sh
   git clone https://github.com/fly-high-staffing-llc/AI-pharma-ecommerce-app.git
   cd AI-pharma-ecommerce-app/backend-repo
   ```
   - If you see “git: command not found,” install Git from [git-scm.com](https://git-scm.com/downloads).

---

## 7. Install Project Dependencies
1. In the `backend-repo` folder, type:
   ```sh
   npm install
   ```
   - This will download all required packages.
   - ![npm install](./docs/npm-install.png)
2. If you see errors, try deleting the `node_modules` folder and running `npm install` again.

---

## 8. Run the Backend Server
1. In the same folder, type:
   ```sh
   npm start
   ```
   - ![npm start](./docs/npm-start.png)
2. You should see a message like `Server running on port 3000`.
3. If you see errors about MongoDB, make sure MongoDB is running.

---

## 9. GraphQL Setup
- Apollo Server is used for GraphQL APIs.
- See `/src/graphql` for schema and resolver files.
- ![GraphQL](./docs/graphql.png)

---

## 10. Troubleshooting
- **MongoDB connection fails:**  Make sure MongoDB is running. Use Compass to check.
- **Permission errors:**  Try running the command with `sudo` (Mac) or as Administrator (Windows).
- **Dependency errors:**  Delete `node_modules` and `package-lock.json`, then run `npm install` again.

---

## 11. Useful Links
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Apollo GraphQL](https://www.apollographql.com/) 