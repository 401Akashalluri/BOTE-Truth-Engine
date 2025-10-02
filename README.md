BOTE - Blockchain-OSINT Truth Engine
Founder: Akash
Live Application: https://bote-truth-engine-v2.web.app

About The Project
In an era defined by the rapid spread of digital information, it has become increasingly difficult for everyday citizens to distinguish fact from fiction. The Blockchain-OSINT Truth Engine (BOTE) is a citizen-centric web application designed to combat misinformation, scams, and fraudulent content by providing accessible and trustworthy verification tools.

This platform empowers users to verify the authenticity of digital content in real-time and to create permanent, verifiable records of their own evidence. BOTE's mission is to provide a "clarity companion" for the digital age, making the internet a safer and more transparent place for everyone.

Key Features
AI-Powered Truth Verifier: Submit any URL, news snippet, or text query to receive an instant analysis and a simple 1-5 "Trust Score," powered by Google's AI.

Citizen Evidence Locker: Securely upload your own files (photos, documents, etc.) to create a permanent, timestamped record on a cloud-based ledger.

Secure & Private User Accounts: Create a private account using any email and password to ensure that your anchored evidence is secure, permanent, and accessible only to you from any device.

Real-time & Responsive UI: A clean, modern, and mobile-friendly interface built with Tailwind CSS.

Built With
This project was built using a modern, scalable, and serverless technology stack.

Frontend: HTML5, Tailwind CSS, Vanilla JavaScript (ESM)

Backend & Hosting: Google Firebase

Firebase Hosting: For global, low-latency web hosting.

Firebase Authentication: For secure email/password user accounts.

Firestore: As a real-time, secure NoSQL database for the evidence ledger.

Cloud Storage: For secure user file uploads.

Cloud Functions: As a serverless backend to securely proxy requests to the AI.

AI Engine: Google AI Platform (Gemini Model)

Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js: Make sure you have Node.js installed. You can download it from nodejs.org.

Firebase CLI: You need to have the Firebase command-line tools installed.

npm install -g firebase-tools

Installation & Setup
Clone the repo

git clone [https://github.com/your-username/BOTE-Truth-Engine.git](https://github.com/your-username/BOTE-Truth-Engine.git)
cd BOTE-Truth-Engine

Install Backend Dependencies
The backend Cloud Function has its own dependencies.

cd functions
npm install
cd ..

Set Up Your Firebase Project

Create a new project on the Firebase Console.

Add a web app to your project to get your firebaseConfig object.

Enable Authentication (Email/Password provider).

Enable Firestore and Cloud Storage.

Configure the Application

Frontend Config: Open public/index.html and replace the placeholder firebaseConfig object with the one from your Firebase project.

Backend API Key: Set your Google AI API key in the local environment by running this command:

firebase functions:config:set gemini.key="YOUR_API_KEY_HERE"

Run Locally (Optional)
You can test the entire application locally using the Firebase Emulator Suite.

firebase emulators:start

Deployment
To deploy the application to the web, run the following command from the root of the project folder:

firebase deploy

Project Structure
.
├── .firebaserc         # Firebase project configuration
├── .gitignore          # Files for Git to ignore
├── README.md           # This file
├── firebase.json       # Firebase deployment rules (hosting, functions)
├── public/
│   └── index.html      # The complete single-page application (UI and frontend logic)
└── functions/
    ├── index.js        # The backend Cloud Function for the Truth Verifier
    ├── package.json    # Backend dependencies
    └── ...

Contact
Akash - Founder

Project Link: https://github.com/your-username/BOTE-Truth-Engine


### **How to Add This to Your Project**

**1. Create the File**
* Go to your main project folder: `C:\BOTE-WebApp`.
* Create a new file and name it `README.md`.

**2. Paste and Save**
* Open the new `README.md` file.
* Copy the code above and paste it in.
* **Important:** Remember to replace the placeholder GitHub links (`https://github.com/401Akashalluri/BOTE-Truth-Engine.git`) with your actual GitHub repository URL.
* Save the file.

**3. Upload it to GitHub**
* Now, open your terminal (in `PS C:\BOTE-WebApp>`) and run these three commands to save and upload your new README file.

    ```powershell
    # 1. Add the new README file to be tracked
    git add README.md

    # 2. Save this change with a message
    git commit -m "Docs: Add professional README file"

    # 3. Push the change to your GitHub repository
    git push
