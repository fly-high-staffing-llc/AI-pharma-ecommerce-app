# Frontend Setup Guide (Angular 17)

This guide will help you set up the Angular frontend on **macOS** and **Windows**. Every step is explained for beginners, with screenshots and troubleshooting tips.

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

## 5. Install Angular CLI
1. Open Terminal (Mac) or Command Prompt (Windows).
2. Type:
   ```sh
   npm install -g @angular/cli
   ```
   - This installs Angular CLI globally.
3. Check installation:
   ```sh
   ng version
   ```
   - You should see Angular CLI version info.
   - ![Angular CLI](./docs/angular-cli.png)

---

## 6. Clone the Project
1. In Terminal or Command Prompt, navigate to the folder where you want the project.
2. Type:
   ```sh
   git clone https://github.com/fly-high-staffing-llc/AI-pharma-ecommerce-app.git
   cd AI-pharma-ecommerce-app/frontend-repo
   ```
   - If you see “git: command not found,” install Git from [git-scm.com](https://git-scm.com/downloads).

---

## 7. Install Project Dependencies
1. In the `frontend-repo` folder, type:
   ```sh
   npm install
   ```
   - This will download all required packages.
   - ![npm install](./docs/npm-install.png)
2. If you see errors, try deleting the `node_modules` folder and running `npm install` again.

---

## 8. Start the App
1. In the same folder, type:
   ```sh
   ng serve
   ```
2. Open your browser and go to [http://localhost:4200](http://localhost:4200).
   - You should see the Pharmacy E-Commerce web app.
   - ![ng serve](./docs/ng-serve.png)

---

## 9. Troubleshooting
- **Port in use:**  If you see “Port 4200 is already in use,” run:
  ```sh
  ng serve --port 4300
  ```
- **Permission errors:**  Try running the command with `sudo` (Mac) or as Administrator (Windows).
- **Dependency errors:**  Delete `node_modules` and `package-lock.json`, then run `npm install` again.

---

## 10. Useful Links
- [Angular Docs](https://angular.io/)
- [VSCode Docs](https://code.visualstudio.com/docs)
- [Cursor Docs](https://docs.cursor.so/) 