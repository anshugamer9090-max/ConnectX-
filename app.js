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
// ConnectX App Logic & Features

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

    if (screenName === 'home') {
        renderFeed();
    }
}

// Sample Posts Data
let posts = [
    { id: 1, user: "ConnectX Official", username: "@connectx_official", caption: "Welcome to the new era of social media! 🚀", likes: 142, liked: false },
    { id: 2, user: "Aarav Sharma", username: "@aarav_dev", caption: "Building amazing things with HTML, CSS & JS! 💻✨", likes: 38, liked: false }
];

// Render Feed Posts dynamically
function renderFeed() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    container.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.style.cssText = "background: #1a1a24; border-radius: 10px; padding: 10px; border: 1px solid #2a2a3c; margin-bottom: 12px;";
        
        postDiv.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 8px;">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: #a855f7; margin-right: 8px;"></div>
                <div>
                    <strong style="font-size: 12px;">${post.user}</strong>
                    <div style="font-size: 10px; color: #888;">${post.username}</div>
                </div>
            </div>
            <p style="font-size: 12px; margin: 6px 0;">${post.caption}</p>
            <div style="display: flex; gap: 15px; margin-top: 8px; font-size: 13px; align-items: center;">
                <span onclick="toggleLike(${post.id})" style="cursor: pointer; color: ${post.liked ? '#ec4899' : '#fff'};">
                    ${post.liked ? '❤️' : '🤍'} ${post.likes} Likes
                </span>
                <span style="cursor: pointer; color: #aaa;">💬 Comment</span>
            </div>
        `;
        container.appendChild(postDiv);
    });
}

// Like Button Logic
function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        if (post.liked) {
            post.likes -= 1;
            post.liked = false;
        } else {
            post.likes += 1;
            post.liked = true;
        }
        renderFeed();
    }
}
// ConnectX Master Logic - Navigation, Feed & Post Creation

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

    if (screenName === 'home') {
        renderFeed();
    }
}

// Global Posts Array
let posts = [
    { id: 1, user: "ConnectX Official", username: "@connectx_official", caption: "Welcome to the new era of social media! 🚀", likes: 142, liked: false },
    { id: 2, user: "Aarav Sharma", username: "@aarav_dev", caption: "Building amazing things with HTML, CSS & JS! 💻✨", likes: 38, liked: false }
];

// Render Feed Posts dynamically
function renderFeed() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    container.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.style.cssText = "background: #1a1a24; border-radius: 10px; padding: 10px; border: 1px solid #2a2a3c; margin-bottom: 12px;";
        
        postDiv.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 8px;">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: #a855f7; margin-right: 8px;"></div>
                <div>
                    <strong style="font-size: 12px;">${post.user}</strong>
                    <div style="font-size: 10px; color: #888;">${post.username}</div>
                </div>
            </div>
            <p style="font-size: 12px; margin: 6px 0;">${post.caption}</p>
            <div style="display: flex; gap: 15px; margin-top: 8px; font-size: 13px; align-items: center;">
                <span onclick="toggleLike(${post.id})" style="cursor: pointer; color: ${post.liked ? '#ec4899' : '#fff'};">
                    ${post.liked ? '❤️' : '🤍'} ${post.likes} Likes
                </span>
                <span style="cursor: pointer; color: #aaa;">💬 Comment</span>
            </div>
        `;
        container.appendChild(postDiv);
    });
}

// Like Button Toggle Logic
function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        if (post.liked) {
            post.likes -= 1;
            post.liked = false;
        } else {
            post.likes += 1;
            post.liked = true;
        }
        renderFeed();
    }
}

// Add New Post from Create Screen
function addNewPost() {
    const captionInput = document.getElementById('post-caption-input');
    const captionText = captionInput ? captionInput.value.trim() : '';

    if (captionText === "") {
        alert("Please write something for your post!");
        return;
    }

    const newPost = {
        id: posts.length + 1,
        user: "ConnectX Member",
        username: "@connectx_user",
        caption: captionText,
        likes: 0,
        liked: false
    };

    posts.unshift(newPost); // Add new post at the top
    captionInput.value = ""; // Clear input
    goTo('home'); // Redirect to feed
}
