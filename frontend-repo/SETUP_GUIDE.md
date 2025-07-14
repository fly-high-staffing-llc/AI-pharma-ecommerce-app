# Frontend Setup Guide (Angular 17)

This guide helps you set up the Angular frontend on **macOS** and **Windows**.

---

## 1. Prerequisites
- Node.js (LTS)
- npm
- VSCode
- Cursor
- Angular CLI
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

## 5. Install Angular CLI
- Run:
  ```sh
  npm install -g @angular/cli
  ng version
  ```
- ![Angular CLI](./docs/angular-cli.png)

---

## 6. Install Dependencies
- In the repo root:
  ```sh
  npm install
  ```
- ![npm install](./docs/npm-install.png)

---

## 7. Run the App
- Start dev server:
  ```sh
  ng serve
  ```
- Open http://localhost:4200
- ![ng serve](./docs/ng-serve.png)

---

## 8. Troubleshooting
- If you see port errors, kill the process using the port or change the port with `ng serve --port 4300`.
- For dependency errors, delete `node_modules` and run `npm install` again.

---

## 9. Useful Links
- Angular: https://angular.io/
- VSCode: https://code.visualstudio.com/
- Cursor: https://www.cursor.so/ 