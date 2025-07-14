# AI Service Setup Guide (Node.js, Python, AI/ML)

This guide will help you set up the AI service on **macOS** and **Windows**. Every step is explained for beginners, with screenshots, explanations, troubleshooting, and FAQ.

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

### What is Node.js?
Node.js lets you run JavaScript code outside the browser. It’s required for running Node-based AI tools and scripts.

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

## 3. Install Python & pip

### What is Python?
Python is a popular programming language used for AI, ML, and scripting.

### What is pip?
pip is Python’s package manager. It lets you install and manage Python libraries.

1. Go to [python.org/downloads](https://www.python.org/downloads/).
2. Download the latest Python 3.x installer for your OS.
3. Run the installer and check "Add Python to PATH" during install.
   - ![Python Install](./docs/python.png)
4. Open Terminal or Command Prompt and type:
   ```sh
   python --version
   pip --version
   ```
   **Expected Output:**
   ```
   Python 3.x.x
   pip 23.x.x
   ```

#### Common Pitfalls
- **python: command not found:** Restart your terminal or check your PATH variable.
- **pip not found:** Reinstall Python and ensure pip is included.

---

## 4. Install VSCode

### What is VSCode?
VSCode is a free, powerful code editor with extensions for Python, Node.js, and more.

1. Go to [code.visualstudio.com](https://code.visualstudio.com/).
2. Click **Download for Mac** or **Download for Windows**.
3. Open the installer and follow the prompts.
   - ![VSCode Download](./docs/vscode.png)
4. Open VSCode from your Applications or Start Menu.

---

## 5. Install Cursor

### What is Cursor?
Cursor is an AI coding assistant that helps you write, refactor, and understand code faster.

1. Go to [cursor.so](https://www.cursor.so/).
2. Click **Download** and install for your OS.
3. Open Cursor and sign in with GitHub or Google.
   - ![Cursor Download](./docs/cursor.png)

---

## 6. Clone the Project

### What is Git?
Git is a version control system that lets you track changes, collaborate, and manage your codebase.

1. In Terminal or Command Prompt, navigate to the folder where you want the project.
2. Type:
   ```sh
   git clone https://github.com/fly-high-staffing-llc/AI-pharma-ecommerce-app.git
   cd AI-pharma-ecommerce-app/ai-service-repo
   ```
   - If you see “git: command not found,” install Git from [git-scm.com](https://git-scm.com/downloads).

---

## 7. Install Dependencies

### What is npm install?
This command downloads all the Node.js libraries your project needs, as listed in `package.json`.

### What is pip install?
This command downloads all the Python libraries your project needs, as listed in `requirements.txt`.

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

#### Common Pitfalls
- **EACCES: permission denied:** Try running with `sudo` (Mac) or as Administrator (Windows).
- **npm ERR! code ENOENT:** Make sure you are in the correct folder.
- **pip not found:** Reinstall Python and ensure pip is included.

---

## 8. Run the AI Service

### What does npm start do?
This command starts your Node.js AI service so it can handle API requests.

1. In the same folder, type:
   ```sh
   npm start
   ```
   - ![npm start](./docs/npm-start.png)
2. You should see a message like `AI service running on port 5000`.

#### Common Pitfalls
- **Port in use:**  If you see “Port 5000 is already in use,” stop the other process or change the port in your config.
- **Permission errors:**  Try running the command with `sudo` (Mac) or as Administrator (Windows).
- **Dependency errors:**  Delete `node_modules` and `package-lock.json`, then run `npm install` again.

---

## 9. AI/ML Tools

### What is Tesseract?
Tesseract is an open-source OCR (Optical Character Recognition) engine.

### What is TensorFlow.js?
TensorFlow.js is a JavaScript library for training and deploying ML models in the browser and on Node.js.

- For Tesseract OCR: [Tesseract Install Guide](https://github.com/tesseract-ocr/tesseract)
- For TensorFlow.js: [TensorFlow.js Docs](https://www.tensorflow.org/js)
- ![AI Tools](./docs/ai-tools.png)

---

## 10. FAQ

**Q: I get “EACCES: permission denied” when running npm install. What do I do?**  
A: Try running the command with `sudo` (Mac) or as Administrator (Windows). If the problem persists, check npm’s documentation on fixing permissions: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

**Q: How do I know if the AI service is running?**  
A: You should see a message like `AI service running on port 5000` in your terminal.

**Q: How do I stop the service?**  
A: Press `Ctrl + C` in the terminal where `npm start` is running.

**Q: Where can I get more help?**  
A: Check the [Node.js Docs](https://nodejs.org/), [Python Docs](https://www.python.org/doc/), or ask your team.

---

## 11. Useful Links
- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [Tesseract](https://github.com/tesseract-ocr/tesseract)
- [TensorFlow.js](https://www.tensorflow.org/js)
- [VSCode Docs](https://code.visualstudio.com/docs)
- [Cursor Docs](https://docs.cursor.so/)
- [Git Docs](https://git-scm.com/doc) 