# AI Service Setup Guide (Node.js, Python, AI/ML)

This guide will help you set up the AI service on **macOS** and **Windows**. Every step is explained for beginners, with screenshots and troubleshooting tips.

---

## 1. Prerequisites
You will need:
- **Node.js (LTS)**: Runs JavaScript outside the browser and is required for Node-based AI tools.
- **npm**: Node's package manager, comes with Node.js.
- **Python 3.x**: Required for some AI/ML tools and scripts.
- **pip**: Python package manager, comes with Python.
- **VSCode**: Code editor for writing and debugging code.
- **Cursor**: AI coding assistant for productivity.
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

## 3. Install Python & pip
1. Go to [python.org/downloads](https://www.python.org/downloads/).
2. Download the latest Python 3.x installer for your OS.
3. Run the installer and check "Add Python to PATH" during install.
   - ![Python Install](./docs/python.png)
4. Open Terminal or Command Prompt and type:
   ```sh
   python --version
   pip --version
   ```
   - You should see version numbers.

---

## 4. Install VSCode
1. Go to [code.visualstudio.com](https://code.visualstudio.com/).
2. Click **Download for Mac** or **Download for Windows**.
3. Open the installer and follow the prompts.
   - ![VSCode Download](./docs/vscode.png)
4. Open VSCode from your Applications or Start Menu.

---

## 5. Install Cursor
1. Go to [cursor.so](https://www.cursor.so/).
2. Click **Download** and install for your OS.
3. Open Cursor and sign in with GitHub or Google.
   - ![Cursor Download](./docs/cursor.png)

---

## 6. Clone the Project
1. In Terminal or Command Prompt, navigate to the folder where you want the project.
2. Type:
   ```sh
   git clone https://github.com/fly-high-staffing-llc/AI-pharma-ecommerce-app.git
   cd AI-pharma-ecommerce-app/ai-service-repo
   ```
   - If you see “git: command not found,” install Git from [git-scm.com](https://git-scm.com/downloads).

---

## 7. Install Dependencies
1. In the `ai-service-repo` folder, type:
   ```sh
   npm install
   ```
   - This will download all required Node.js packages.
   - ![npm install](./docs/npm-install.png)
2. If you see a `requirements.txt` file, install Python packages:
   ```sh
   pip install -r requirements.txt
   ```
   - ![pip install](./docs/pip-install.png)
3. If you see errors, try deleting the `node_modules` folder and running `npm install` again.

---

## 8. Run the AI Service
1. In the same folder, type:
   ```sh
   npm start
   ```
   - ![npm start](./docs/npm-start.png)
2. You should see a message like `AI service running on port 5000`.

---

## 9. AI/ML Tools
- For Tesseract OCR: [Tesseract Install Guide](https://github.com/tesseract-ocr/tesseract)
- For TensorFlow.js: [TensorFlow.js Docs](https://www.tensorflow.org/js)
- ![AI Tools](./docs/ai-tools.png)

---

## 10. Troubleshooting
- **Python errors:**  Check your Python version and pip packages.
- **Node.js errors:**  Delete `node_modules` and `package-lock.json`, then run `npm install` again.
- **Permission errors:**  Try running the command with `sudo` (Mac) or as Administrator (Windows).

---

## 11. Useful Links
- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [Tesseract](https://github.com/tesseract-ocr/tesseract)
- [TensorFlow.js](https://www.tensorflow.org/js) 