BOTE - A Note From the Founder
Hi, I'm Akash.
You can see what I've built here: https://bote-truth-engine-v2.web.app

A Little About Why I Built This
Lately, it feels like we're all swimming in a fog of digital information. Every day, we're hit with headlines, messages, and deals that are hard to trust. It's not just about "fake news"—it's about our safety, our privacy, and our peace of mind. I realized that the tools to fight this were mostly built for experts, leaving the rest of us to guess.

I wanted to change that.

So, I built BOTE. My goal was to create a simple, honest "clarity companion." Something you could turn to before you click, before you share, or before you worry, and just ask: "Is this real?" It's my attempt to bring a little bit of clarity back to our digital lives and to make the internet a safer, more transparent place.

What Can You Do With BOTE?
I designed BOTE to be a simple but powerful tool for anyone. Here's what it can do for you:

Instantly Check a Claim: Got a weird link, a news snippet, or a suspicious text? Paste it into the Truth Verifier. I've hooked it up to a powerful AI that gives you a simple 1-5 "Trust Score" and a plain-English explanation in seconds.

Create Your Own Verifiable Record: This is the part I'm most proud of. The Citizen Evidence Locker is your personal, secure vault. You can upload a photo, a document, or any file, and BOTE will create a permanent, timestamped record of it. It's like having your own digital notary, proving your file existed at a specific point in time.

Own Your Data: To use the locker, you create a private account with any email you want. Your evidence is tied only to you, secure, permanent, and accessible from any device. No linking to personal social accounts. True privacy.

The Toolkit I Used
I built this project with a focus on modern, scalable, and serverless technology. This keeps it fast, secure, and affordable to run.

The Interface: Just plain HTML, JavaScript, and Tailwind CSS. I wanted it to be fast, clean, and easy to maintain.

The "Server": The entire backend runs on Google Firebase.

Hosting: For fast global delivery.

Authentication: For the secure email/password accounts.

Firestore & Cloud Storage: This is the heart of the Evidence Locker—a secure database and file storage system.

Cloud Functions: A small, serverless function that acts as the secure gateway to the AI.

The Brains: The verification engine is powered by Google's Gemini AI Platform.

Want to Run It Yourself?
If you're a developer and want to tinker with the code, here’s how to get a copy running.

What you'll need:

Node.js (you can get it from nodejs.org)

The Firebase CLI (npm install -g firebase-tools)

The Setup:

Grab the code from my repo:

git clone [https://github.com/401Akashalluri/BOTE-Truth-Engine.git](https://github.com/401Akashalluri/BOTE-Truth-Engine.git)
cd BOTE-Truth-Engine

Install the backend bits:

cd functions
npm install
cd ..

Hook it up to your own Firebase project:
You'll need to create a new project on the Firebase Console and enable Authentication (Email/Password), Firestore, and Storage.

Plug in your keys:

You'll need to paste your firebaseConfig object into the public/index.html file.

You'll also need to set your Google AI API key for the backend:
firebase functions:config:set gemini.key="YOUR_API_KEY_HERE"

How It's Organized
Here's a map of the project folder:

.
├── .firebaserc         # Tells Firebase which project this is
├── .gitignore          # Tells Git what to ignore
├── README.md           # The file you're reading now
├── firebase.json       # Deployment rules for Firebase
├── public/
│   └── index.html      # The entire frontend app lives in this one file
└── functions/
    ├── index.js        # The backend code for the Truth Verifier
    └── package.json    # The backend's list of ingredients
