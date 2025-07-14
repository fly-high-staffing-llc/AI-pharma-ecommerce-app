# Mobile App Setup Guide (React Native + Expo)

This guide will help you set up the mobile app on **macOS** and **Windows**. Every step is explained for beginners, with screenshots and troubleshooting tips.

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

## 5. Install Expo CLI
1. Open Terminal (Mac) or Command Prompt (Windows).
2. Type:
   ```sh
   npm install -g expo-cli
   expo --version
   ```
   - This installs Expo CLI globally and checks the version.
   - ![Expo CLI](./docs/expo-cli.png)

---

## 6. Install React Native CLI (optional)
1. Type:
   ```sh
   npm install -g react-native-cli
   ```
   - ![React Native CLI](./docs/react-native-cli.png)

---

## 7. Install Xcode (macOS) or Android Studio
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
1. In Terminal or Command Prompt, navigate to the folder where you want the project.
2. Type:
   ```sh
   git clone https://github.com/fly-high-staffing-llc/AI-pharma-ecommerce-app.git
   cd AI-pharma-ecommerce-app/mobile-repo
   ```
   - If you see “git: command not found,” install Git from [git-scm.com](https://git-scm.com/downloads).

---

## 9. Install Project Dependencies
1. In the `mobile-repo` folder, type:
   ```sh
   npm install
   ```
   - This will download all required packages.
   - ![npm install](./docs/npm-install.png)
2. If you see errors, try deleting the `node_modules` folder and running `npm install` again.

---

## 10. Run the App
1. In the same folder, type:
   ```sh
   expo start
   ```
   - ![expo start](./docs/expo-start.png)
2. Scan the QR code with your phone (Expo Go app) or run on an emulator.
3. You should see the Pharmacy E-Commerce mobile app.

---

## 11. Troubleshooting
- **iOS:**  Ensure Xcode is installed and command line tools are set up.
- **Android:**  Ensure Android Studio and emulator are configured.
- **Permission errors:**  Try running the command with `sudo` (Mac) or as Administrator (Windows).
- **Dependency errors:**  Delete `node_modules` and `package-lock.json`, then run `npm install` again.

---

## 12. Useful Links
- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [VSCode](https://code.visualstudio.com/)
- [Cursor](https://www.cursor.so/) 