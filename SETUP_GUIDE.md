# Project Setup Guide – Pharmacy E-Commerce Platform

This guide provides step-by-step instructions for setting up all prerequisites and tools required to develop, run, and contribute to the Pharmacy E-Commerce Platform on both **macOS** and **Windows**.

---

## 1. Prerequisites Overview
- Node.js (LTS)
- npm (comes with Node.js)
- Visual Studio Code (VSCode)
- Cursor (AI coding assistant)
- Angular CLI (for frontend)
- React Native CLI & Expo (for mobile)
- Python 3.x (for some AI tools)
- MongoDB (database)
- GraphQL tools (Apollo, etc.)
- Git

---

## 2. Node.js & npm

### macOS
- Download from: https://nodejs.org/en/download
- Or use Homebrew:
  ```sh
  brew install node
  ```
- Verify:
  ```sh
  node -v
  npm -v
  ```

### Windows
- Download from: https://nodejs.org/en/download
- Run the installer and follow prompts.
- Verify in Command Prompt:
  ```sh
  node -v
  npm -v
  ```

---

## 3. Visual Studio Code (VSCode)
- Download: https://code.visualstudio.com/
- Install recommended extensions:
  - Prettier
  - ESLint
  - GitLens
  - Angular Essentials (for frontend)
  - React Native Tools (for mobile)

---

## 4. Cursor (AI Coding Assistant)
- Download: https://www.cursor.so/
- Install and sign in with your GitHub or Google account.
- Follow onboarding to connect to your codebase.

---

## 5. Angular CLI (Frontend)
- Install globally:
  ```sh
  npm install -g @angular/cli
  ```
- Verify:
  ```sh
  ng version
  ```

---

## 6. React Native & Expo (Mobile)

### macOS & Windows
- Install Expo CLI:
  ```sh
  npm install -g expo-cli
  ```
- Install React Native CLI (optional, for advanced native modules):
  ```sh
  npm install -g react-native-cli
  ```
- Install Xcode (macOS, for iOS):
  - From the App Store: https://apps.apple.com/us/app/xcode/id497799835
- Install Android Studio (for Android):
  - https://developer.android.com/studio
- Verify Expo:
  ```sh
  expo --version
  ```

---

## 7. AI Tools Setup (ai-service-repo)
- Python 3.x: https://www.python.org/downloads/
- Install pip (if not included): https://pip.pypa.io/en/stable/installation/
- Install required Python packages (if any, see ai-service-repo/README.md)
- Node.js-based AI tools:
  - Install dependencies:
    ```sh
    cd ai-service-repo
    npm install
    ```
- For LLMs or image recognition:
  - Follow specific instructions in ai-service-repo/README.md
  - For Tesseract OCR: https://github.com/tesseract-ocr/tesseract
  - For TensorFlow.js: https://www.tensorflow.org/js

---

## 8. Middleware Setup (Node.js + Express)
- Install dependencies:
  ```sh
  cd backend-repo
  npm install
  ```
- For BFF/middleware:
  - See backend-repo/MIDDLEWARE_PROMPTS.md for architecture
  - Start the server:
    ```sh
    npm start
    ```

---

## 9. Database & GraphQL Setup
- **MongoDB:**
  - Download: https://www.mongodb.com/try/download/community
  - Or use Docker:
    ```sh
    docker run -d -p 27017:27017 --name mongo mongo:latest
    ```
  - GUI: [MongoDB Compass](https://www.mongodb.com/products/compass)
- **GraphQL:**
  - Apollo Server (Node.js):
    ```sh
    npm install apollo-server-express graphql
    ```
  - See backend-repo/product-service, user-service, and order-service for schemas and resolvers.

---

## 10. Git
- Download: https://git-scm.com/downloads
- Configure user:
  ```sh
  git config --global user.name "Your Name"
  git config --global user.email "your-email@example.com"
  ```

---

## 11. Troubleshooting & Tips
- If you encounter permission issues, check your user access and credentials.
- For mobile, ensure Xcode (macOS) or Android Studio (Windows/macOS) is installed and configured.
- For AI tools, check Python and Node.js versions match requirements.
- Use `.env` files for environment variables (never commit secrets).
- For more, see each repo’s README.md and TECHNICAL_STANDARDS.md.

---

## 12. Useful Links
- Node.js: https://nodejs.org/
- VSCode: https://code.visualstudio.com/
- Cursor: https://www.cursor.so/
- Angular: https://angular.io/
- React Native: https://reactnative.dev/
- Expo: https://docs.expo.dev/
- MongoDB: https://www.mongodb.com/
- Apollo GraphQL: https://www.apollographql.com/
- Git: https://git-scm.com/

---

> For any issues, check the README in each repo or contact the project maintainer. 