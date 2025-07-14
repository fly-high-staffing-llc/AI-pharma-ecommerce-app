# Frontend Setup Guide (Angular 17)

This guide will help you set up the Angular frontend on **macOS** and **Windows**. Every step is explained for beginners, with screenshots, explanations, troubleshooting, and FAQ.

---

## 1. Prerequisites
You will need:
- **Node.js (LTS)**: Runs JavaScript outside the browser and is required for Angular and npm.
- **npm**: Node's package manager, comes with Node.js.
- **VSCode**: Code editor for writing and debugging code.
- **Cursor**: AI coding assistant for productivity.
- **Angular CLI**: Command-line tool to create and manage Angular projects.
- **Git**: Version control to manage code and collaborate.

---

## 2. Install Node.js & npm

### What is Node.js?
Node.js lets you run JavaScript code outside the browser. It’s required for running Angular, React Native, and backend code.

### What is npm?
npm is the Node Package Manager. It lets you install and manage libraries (called “packages”) your project needs.

### macOS
1. Go to [nodejs.org](https://nodejs.org/en/download) in your browser.
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
VSCode is a free, powerful code editor with extensions for Angular, TypeScript, and more.

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

## 5. Install Angular CLI

### What is Angular CLI?
Angular CLI is a command-line tool that helps you create, build, and run Angular projects. It automates many tasks so you don’t have to do them manually.

1. Open Terminal (Mac) or Command Prompt (Windows).
2. Type:
   ```sh
   npm install -g @angular/cli
   ```
   - The `-g` flag means “install globally,” so you can use `ng` anywhere.
3. Check installation:
   ```sh
   ng version
   ```
   **Expected Output:**
   ```
   Angular CLI: 17.x.x
   Node: 18.x.x
   ...
   ```
   - ![Angular CLI](./docs/angular-cli.png)

#### Common Pitfalls
- **ng: command not found:** Make sure npm’s global bin directory is in your PATH.
- **Permission denied:** Try running with `sudo` (Mac) or as Administrator (Windows).

---

## 6. Clone the Project

### What is Git?
Git is a version control system that lets you track changes, collaborate, and manage your codebase.

1. In Terminal or Command Prompt, navigate to the folder where you want the project.
2. Type:
   ```sh
   git clone https://github.com/fly-high-staffing-llc/AI-pharma-ecommerce-app.git
   cd AI-pharma-ecommerce-app/frontend-repo
   ```
   - If you see “git: command not found,” install Git from [git-scm.com](https://git-scm.com/downloads).

---

## 7. Install Project Dependencies

### What is npm install?
This command downloads all the libraries your project needs, as listed in `package.json`.

1. In the `frontend-repo` folder, type:
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

## 8. Start the App

### What does ng serve do?
This command starts a local web server and opens your Angular app in the browser.

1. In the same folder, type:
   ```sh
   ng serve
   ```
2. Open your browser and go to [http://localhost:4200](http://localhost:4200).
   - You should see the Pharmacy E-Commerce web app.
   - ![ng serve](./docs/ng-serve.png)

#### Common Pitfalls
- **Port in use:**  If you see “Port 4200 is already in use,” run:
  ```sh
  ng serve --port 4300
  ```
- **Permission errors:**  Try running the command with `sudo` (Mac) or as Administrator (Windows).
- **Dependency errors:**  Delete `node_modules` and `package-lock.json`, then run `npm install` again.

---

## 9. FAQ

**Q: I get “EACCES: permission denied” when running npm install. What do I do?**  
A: Try running the command with `sudo` (Mac) or as Administrator (Windows). If the problem persists, check npm’s documentation on fixing permissions: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

**Q: How do I know if the Angular app is running?**  
A: Open your browser and go to [http://localhost:4200](http://localhost:4200). You should see the app’s homepage.

**Q: How do I stop the server?**  
A: Press `Ctrl + C` in the terminal where `ng serve` is running.

**Q: Where can I get more help?**  
A: Check the [Angular Docs](https://angular.io/), ask your team, or open an issue in the repo.

---

## 10. Useful Links
- [Angular Docs](https://angular.io/)
- [VSCode Docs](https://code.visualstudio.com/docs)
- [Cursor Docs](https://docs.cursor.so/)
- [Git Docs](https://git-scm.com/doc) 