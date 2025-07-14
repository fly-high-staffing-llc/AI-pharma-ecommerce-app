# AI Service Setup Guide (Node.js, Python, AI/ML)

This guide helps you set up the AI service on **macOS** and **Windows**.

---

## 1. Prerequisites
- Node.js (LTS)
- npm
- Python 3.x
- pip
- VSCode
- Cursor
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

## 3. Install Python & pip
- Download Python: https://www.python.org/downloads/
- Verify:
  ```sh
  python --version
  pip --version
  ```
- ![Python Install](./docs/python.png)

---

## 4. Install VSCode
- Download: https://code.visualstudio.com/
- ![VSCode Download](./docs/vscode.png)

---

## 5. Install Cursor
- Download: https://www.cursor.so/
- ![Cursor Download](./docs/cursor.png)

---

## 6. Install Dependencies
- Node.js:
  ```sh
  npm install
  ```
- Python (if required):
  ```sh
  pip install -r requirements.txt
  ```
- ![npm install](./docs/npm-install.png)
- ![pip install](./docs/pip-install.png)

---

## 7. Run the App
- Start Node.js service:
  ```sh
  npm start
  ```
- ![npm start](./docs/npm-start.png)

---

## 8. AI/ML Tools
- For Tesseract OCR: https://github.com/tesseract-ocr/tesseract
- For TensorFlow.js: https://www.tensorflow.org/js
- ![AI Tools](./docs/ai-tools.png)

---

## 9. Troubleshooting
- For Python errors, check your Python version and pip packages.
- For Node.js errors, delete `node_modules` and run `npm install` again.

---

## 10. Useful Links
- Node.js: https://nodejs.org/
- Python: https://www.python.org/
- Tesseract: https://github.com/tesseract-ocr/tesseract
- TensorFlow.js: https://www.tensorflow.org/js 