// ConnectX - Main JavaScript Logic & Navigation
console.log("ConnectX app.js loaded successfully!");

function goTo(screenName) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));
    
    // Show the targeted screen
    const targetScreen = document.getElementById('screen-' + screenName);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    // Update header badge title
    const badge = document.getElementById('badge');
    if (badge) {
        badge.innerText = screenName.toUpperCase();
    }
}
// ConnectX Navigation Logic
console.log("ConnectX screens loaded successfully!");

function goTo(screenName) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));
    
    const targetScreen = document.getElementById('screen-' + screenName);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    const badge = document.getElementById('badge');
    if (badge) {
        badge.innerText = screenName.toUpperCase();
    }
}
