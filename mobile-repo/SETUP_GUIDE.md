# Mobile App Setup Guide (React Native + Expo)

This guide will help you set up the mobile app on **macOS** and **Windows**. Every step is explained for beginners, with screenshots, explanations, troubleshooting, and FAQ.

---

## 1. Prerequisites
You will need:
- **Node.js (LTS)**: Runs JavaScript outside the browser and is required for React Native and npm.
- **npm**: Node's package manager, comes with Node.js.
- **VSCode**: Code editor for writing and debugging code.
- **Cursor**: AI coding assistant for productivity.
- **Expo CLI**: Tool for running React Native apps easily.
- **React Native CLI** (optional): For advanced native modules.
- **Xcode** (macOS, for iOS): Required for iOS development.
- **Android Studio**: Required for Android development.
- **Git**: Version control to manage code and collaborate.

---

## 2. Install Node.js & npm

### What is Node.js?
Node.js lets you run JavaScript code outside the browser. It’s required for running React Native and Expo.

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
VSCode is a free, powerful code editor with extensions for React Native, TypeScript, and more.

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

## 5. Install Expo CLI

### What is Expo CLI?
Expo CLI is a tool that makes it easy to run, build, and test React Native apps.

1. Open Terminal (Mac) or Command Prompt (Windows).
2. Type:
   ```sh
   npm install -g expo-cli
   expo --version
   ```
   **Expected Output:**
   ```
   6.3.0
   ```
   - ![Expo CLI](./docs/expo-cli.png)

#### Common Pitfalls
- **expo: command not found:** Make sure npm’s global bin directory is in your PATH.
- **Permission denied:** Try running with `sudo` (Mac) or as Administrator (Windows).

---

## 6. Install React Native CLI (optional)

### What is React Native CLI?
React Native CLI is a command-line tool for advanced native modules and custom builds.

1. Type:
   ```sh
   npm install -g react-native-cli
   ```
   - ![React Native CLI](./docs/react-native-cli.png)

---

## 7. Install Xcode (macOS) or Android Studio

### What is Xcode?
Xcode is Apple’s IDE for building iOS apps. Required for iOS development.

### What is Android Studio?
Android Studio is Google’s IDE for building Android apps. Required for Android development.

- **Xcode:**
  1. Go to the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835).
  2. Click **Get** and install.
  3. Open Xcode and install any required components.
  - ![Xcode](./docs/xcode.png)
- **Android Studio:**
  1. Go to [developer.android.com/studio](https://developer.android.com/studio).
  2. Download and install for your OS.
  3. Open Android Studio and set up an emulator.
  - ![Android Studio](./docs/android-studio.png)

---

## 8. Clone the Project

### What is Git?
Git is a version control system that lets you track changes, collaborate, and manage your codebase.

1. In Terminal or Command Prompt, navigate to the folder where you want the project.
2. Type:
   ```sh
   git clone https://github.com/fly-high-staffing-llc/AI-pharma-ecommerce-app.git
   cd AI-pharma-ecommerce-app/mobile-repo
   ```
   - If you see “git: command not found,” install Git from [git-scm.com](https://git-scm.com/downloads).

---

## 9. Install Project Dependencies

### What is npm install?
This command downloads all the libraries your project needs, as listed in `package.json`.

1. In the `mobile-repo` folder, type:
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

## 10. Run the App

### What does expo start do?
This command starts the Expo development server and lets you run the app on your phone or emulator.

1. In the same folder, type:
   ```sh
   expo start
   ```
   - ![expo start](./docs/expo-start.png)
2. Scan the QR code with your phone (Expo Go app) or run on an emulator.
3. You should see the Pharmacy E-Commerce mobile app.

#### Common Pitfalls
- **Port in use:**  If you see “Port 19000 is already in use,” stop the other process or change the port in your config.
- **Permission errors:**  Try running the command with `sudo` (Mac) or as Administrator (Windows).
- **Dependency errors:**  Delete `node_modules` and `package-lock.json`, then run `npm install` again.

---

## 11. FAQ

**Q: I get “EACCES: permission denied” when running npm install. What do I do?**  
A: Try running the command with `sudo` (Mac) or as Administrator (Windows). If the problem persists, check npm’s documentation on fixing permissions: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

**Q: How do I know if the mobile app is running?**  
A: You should see the app open on your phone (Expo Go) or emulator.

**Q: How do I stop the Expo server?**  
A: Press `Ctrl + C` in the terminal where `expo start` is running.

**Q: Where can I get more help?**  
A: Check the [React Native Docs](https://reactnative.dev/), [Expo Docs](https://docs.expo.dev/), or ask your team.

---

## 12. Useful Links
- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [VSCode Docs](https://code.visualstudio.com/docs)
- [Cursor Docs](https://docs.cursor.so/)
- [Git Docs](https://git-scm.com/doc) 