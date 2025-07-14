# Backend Setup Guide (Node.js, Express, MongoDB, GraphQL)

This guide will help you set up the backend on **macOS** and **Windows**. Every step is explained for beginners, with screenshots, explanations, troubleshooting, and FAQ.

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

### What is Node.js?
Node.js lets you run JavaScript code outside the browser. It’s required for running backend code and tools like Express.

### What is npm?
npm is the Node Package Manager. It lets you install and manage libraries (called “packages”) your project needs.

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
   **Expected Output:**
   ```
   v18.16.0
   9.5.0
   ```
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
   **Expected Output:**
   ```
   v18.16.0
   9.5.0
   ```

#### Common Pitfalls
- **Permission denied:** Try running the installer as an administrator.
- **Wrong version:** Make sure you downloaded the LTS version.
- **Command not found:** Restart your computer or check your PATH variable.

---

## 3. Install VSCode

### What is VSCode?
VSCode is a free, powerful code editor with extensions for Node.js, TypeScript, and more.

1. Go to [code.visualstudio.com](https://code.visualstudio.com/).
2. Click **Download for Mac** or **Download for Windows**.
3. Open the installer and follow the prompts.
   - ![VSCode Download](./docs/vscode.png)
4. Open VSCode from your Applications or Start Menu.

---

## 4. Install Cursor

### What is Cursor?
Cursor is an AI coding assistant that helps you write, refactor, and understand code faster.

1. Go to [cursor.so](https://www.cursor.so/).
2. Click **Download** and install for your OS.
3. Open Cursor and sign in with GitHub or Google.
   - ![Cursor Download](./docs/cursor.png)

---

## 5. Install MongoDB

### What is MongoDB?
MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It’s used for storing users, products, orders, and more.

1. Go to [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).
2. Download the installer for your OS and follow the prompts.
   - ![MongoDB Install](./docs/mongodb.png)
3. (Optional) Use Docker:
   ```sh
   docker run -d -p 27017:27017 --name mongo mongo:latest
   ```
4. (Optional) Download MongoDB Compass GUI: [mongodb.com/products/compass](https://www.mongodb.com/products/compass)

#### Common Pitfalls
- **MongoDB not found:** Make sure it’s installed and running. Use Compass to check.
- **Port in use:** Stop other MongoDB instances or change the port.

---

## 6. Clone the Project

### What is Git?
Git is a version control system that lets you track changes, collaborate, and manage your codebase.

1. In Terminal or Command Prompt, navigate to the folder where you want the project.
2. Type:
   ```sh
   git clone https://github.com/fly-high-staffing-llc/AI-pharma-ecommerce-app.git
   cd AI-pharma-ecommerce-app/backend-repo
   ```
   - If you see “git: command not found,” install Git from [git-scm.com](https://git-scm.com/downloads).

---

## 7. Install Project Dependencies

### What is npm install?
This command downloads all the libraries your project needs, as listed in `package.json`.

1. In the `backend-repo` folder, type:
   ```sh
   npm install
   ```
   - This will download all required packages.
   - ![npm install](./docs/npm-install.png)
2. If you see errors, try deleting the `node_modules` folder and running `npm install` again.

#### Common Pitfalls
- **EACCES: permission denied:** Try running with `sudo` (Mac) or as Administrator (Windows).
- **npm ERR! code ENOENT:** Make sure you are in the correct folder.

---

## 8. Run the Backend Server

### What does npm start do?
This command starts your backend server so it can handle API requests.

1. In the same folder, type:
   ```sh
   npm start
   ```
   - ![npm start](./docs/npm-start.png)
2. You should see a message like `Server running on port 3000`.
3. If you see errors about MongoDB, make sure MongoDB is running.

#### Common Pitfalls
- **Port in use:**  If you see “Port 3000 is already in use,” stop the other process or change the port in your config.
- **Permission errors:**  Try running the command with `sudo` (Mac) or as Administrator (Windows).
- **Dependency errors:**  Delete `node_modules` and `package-lock.json`, then run `npm install` again.

---

## 9. GraphQL Setup

### What is GraphQL?
GraphQL is a query language for APIs that lets you request exactly the data you need. Apollo Server is used for GraphQL APIs in this project.

- See `/src/graphql` for schema and resolver files.
- ![GraphQL](./docs/graphql.png)

---

## 10. FAQ

**Q: How do I know if MongoDB is running?**  
A: Open MongoDB Compass or run `mongo` in your terminal. If you see a prompt, it’s running.

**Q: I get “EACCES: permission denied” when running npm install. What do I do?**  
A: Try running the command with `sudo` (Mac) or as Administrator (Windows). If the problem persists, check npm’s documentation on fixing permissions: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

**Q: How do I stop the server?**  
A: Press `Ctrl + C` in the terminal where `npm start` is running.

**Q: Where can I get more help?**  
A: Check the [Node.js Docs](https://nodejs.org/), [MongoDB Docs](https://www.mongodb.com/docs/), or ask your team.

---

## 11. Useful Links
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [VSCode Docs](https://code.visualstudio.com/docs)
- [Cursor Docs](https://docs.cursor.so/)
- [Git Docs](https://git-scm.com/doc) 