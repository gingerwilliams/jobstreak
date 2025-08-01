# Chrome Extension

https://chromewebstore.google.com/search/JobStreak

npm create vite@latest jobstreak-extension 
cd jobstreak-extension
npm install @crxjs/vite-plugin
npm run build
npm run dev

chrome://extensions
Enable Developer Mode
Click “Load unpacked”
Select the dist folder

# Summary of File Structure
```
JobStreak/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── contentScript.js
│   ├── background.js
│   ├── board/
│       └── linkedin.js
│   ├── constants/
│       └── index.js
├── public/
│   └── icon.png
├── index.html
├── package.json
├── vite.config.js
└── manifest.config.js
```

# Code Documentation
When you right-click and select "Save to JobStreak", the following occurs:

1. Background Script (background.js) - The persistent, global script that handles
    - Listening for events across the browser
    - Setting up context menu items
    - Sending messages to tabs/content scripts
    - OUR SCRIPT
    - Adds a context menu item
    - Detects the context menu click.
    <!-- - Sends a message to the active tab with { action: 'extractAndSaveJob' }. -->
    - Sends a message to contentScript 

2. Content Script (contentScript.js) - This script is injected into the job listing page and interacts with the actual page content (the DOM)
    - Captures job listings using document.querySelectorAll
    - Saves new listings to chrome.storage.local
    - Listens for messages from the background script
    - OUR SCRIPT
    - Listens for this message. (chrome.runtime.onMessage.addListener)
    - Triggers your captureJobListings() function to collect job data and store it in chrome.storage.local.


background.js and contentScript.js files serve very different roles in your Chrome extension, but they communicate with each other through chrome.runtime.sendMessage and chrome.tabs.sendMessage