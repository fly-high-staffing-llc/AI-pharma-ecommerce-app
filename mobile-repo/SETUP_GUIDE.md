# Mobile App Setup Guide (React Native + Expo)

This guide helps you set up the mobile app on **macOS** and **Windows**.

---

## 1. Prerequisites
- Node.js (LTS)
- npm
- VSCode
- Cursor
- Expo CLI
- React Native CLI (optional)
- Xcode (macOS, for iOS)
- Android Studio (for Android)
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

## 5. Install Expo CLI
- Run:
  ```sh
  npm install -g expo-cli
  expo --version
  ```
- ![Expo CLI](./docs/expo-cli.png)

---

## 6. Install React Native CLI (optional)
- Run:
  ```sh
  npm install -g react-native-cli
  ```
- ![React Native CLI](./docs/react-native-cli.png)

---

## 7. Install Xcode (macOS) or Android Studio
- Xcode: https://apps.apple.com/us/app/xcode/id497799835
- Android Studio: https://developer.android.com/studio
- ![Xcode](./docs/xcode.png)
- ![Android Studio](./docs/android-studio.png)

---

## 8. Install Dependencies
- In the repo root:
  ```sh
  npm install
  ```
- ![npm install](./docs/npm-install.png)

---

## 9. Run the App
- Start Expo:
  ```sh
  expo start
  ```
- ![expo start](./docs/expo-start.png)

---

## 10. Troubleshooting
- For iOS, ensure Xcode is installed and command line tools are set up.
- For Android, ensure Android Studio and emulator are configured.
- For dependency errors, delete `node_modules` and run `npm install` again.

---

## 11. Useful Links
- React Native: https://reactnative.dev/
- Expo: https://docs.expo.dev/
- VSCode: https://code.visualstudio.com/
- Cursor: https://www.cursor.so/ 