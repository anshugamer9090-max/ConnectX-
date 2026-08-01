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
// ConnectX Master Logic - Navigation, Feed, Post Creation & Profile Grid

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
    } else if (screenName === 'userprofile') {
        renderProfileGrid();
    }
}

// Global Posts Array (User ke posts track karne ke liye)
let posts = [
    { id: 1, user: "ConnectX Official", username: "@connectx_official", caption: "Welcome to the new era of social media! 🚀", likes: 142, liked: false, isMyPost: false },
    { id: 2, user: "Aarav Sharma", username: "@aarav_dev", caption: "Building amazing things with HTML, CSS & JS! 💻✨", likes: 38, liked: false, isMyPost: false }
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

// Add New Post & Tag as My Post
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
        liked: false,
        isMyPost: true // Yeh mark karega ki ye user ka khud ka post hai
    };

    posts.unshift(newPost);
    captionInput.value = "";
    goTo('home');
}

// Render Profile Grid (Sirf user ke banaye gaye posts grid me dikhenge)
function renderProfileGrid() {
    const gridContainer = document.getElementById('profile-grid');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';

    // Filter only current user's posts
    const myPosts = posts.filter(p => p.isMyPost);

    if (myPosts.length === 0) {
        gridContainer.innerHTML = `<p style="font-size: 11px; color: #888; grid-column: span 3; text-align: center;">No posts yet. Create one!</p>`;
        return;
    }

    myPosts.forEach(post => {
        const gridItem = document.createElement('div');
        gridItem.style.cssText = "width: 100%; height: 50px; background: #252533; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #aaa; text-align: center; padding: 2px; overflow: hidden;";
        gridItem.innerText = post.caption;
        gridContainer.appendChild(gridItem);
    });
}
// ConnectX Master Logic - Profile, Counters, Follows, Filters & Music

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
    } else if (screenName === 'userprofile') {
        updateProfileUI();
    }
}

// User Profile Data Store
let userProfile = {
    name: "ConnectX Member",
    username: "@connectx_user",
    bio: "Welcome to my profile!",
    avatar: "C"
};

// Counters & Dynamic Lists
let userStats = {
    followersList: ["@system_bot", "@explore_user"],
    followingList: ["@connectx_official"]
};

// Global Posts Array
let posts = [
    { id: 1, user: "ConnectX Official", username: "@connectx_official", caption: "Welcome to the new era of social media! 🚀", likes: 142, liked: false, isMyPost: false, music: "", filter: "none" },
    { id: 2, user: "Aarav Sharma", username: "@aarav_dev", caption: "Building amazing things with HTML, CSS & JS! 💻✨", likes: 38, liked: false, isMyPost: false, music: "", filter: "none" }
];

// 1. Initial Setup Save
function saveInitialProfile() {
    const name = document.getElementById('setup-name').value.trim();
    const username = document.getElementById('setup-username').value.trim();
    const bio = document.getElementById('setup-bio').value.trim();

    if(name) userProfile.name = name;
    if(username) userProfile.username = username.startsWith('@') ? username : '@' + username;
    if(bio) userProfile.bio = bio;
    userProfile.avatar = userProfile.name.charAt(0).toUpperCase();

    goTo('home');
}

// 2. Profile Details Update Form Toggle
function toggleEditProfileMode() {
    const box = document.getElementById('edit-profile-box');
    if(box.style.display === 'none' || box.style.display === '') {
        box.style.display = 'block';
        document.getElementById('edit-name').value = userProfile.name;
        document.getElementById('edit-username').value = userProfile.username;
        document.getElementById('edit-bio').value = userProfile.bio;
    } else {
        box.style.display = 'none';
    }
}

function saveProfileChanges() {
    const name = document.getElementById('edit-name').value.trim();
    const username = document.getElementById('edit-username').value.trim();
    const avatar = document.getElementById('edit-avatar').value.trim();
    const bio = document.getElementById('edit-bio').value.trim();

    if(name) userProfile.name = name;
    if(username) userProfile.username = username.startsWith('@') ? username : '@' + username;
    if(bio) userProfile.bio = bio;
    if(avatar) userProfile.avatar = avatar;

    document.getElementById('edit-profile-box').style.display = 'none';
    updateProfileUI();
}

// 3. Update Profile Screen UI & Stats Counter
function updateProfileUI() {
    document.getElementById('profile-display-name').innerText = userProfile.name;
    document.getElementById('profile-display-username').innerText = userProfile.username;
    document.getElementById('profile-display-bio').innerText = userProfile.bio;
    document.getElementById('profile-avatar-box').innerText = userProfile.avatar;

    const myPostsCount = posts.filter(p => p.isMyPost).length;
    document.getElementById('count-posts').innerText = myPostsCount;
    document.getElementById('count-followers').innerText = userStats.followersList.length;
    document.getElementById('count-following').innerText = userStats.followingList.length;

    renderProfileGrid();
}

// 4. Follow & Unfollow Feature Logic
function toggleFollowUser(targetUserHandle) {
    const handle = '@' + targetUserHandle.toLowerCase().replace(/\s+/g, '_');
    const index = userStats.followingList.indexOf(handle);

    if (index > -1) {
        userStats.followingList.splice(index, 1);
        alert("Unfollowed " + handle);
    } else {
        userStats.followingList.push(handle);
        alert("Successfully followed " + handle + " (+1 Following)");
    }
    updateProfileUI();
}

// View Followers/Following Lists with Removal option
function openFollowersList() {
    const box = document.getElementById('connections-view-box');
    const title = document.getElementById('connections-title');
    const content = document.getElementById('connections-list-content');
    
    title.innerText = "Followers (" + userStats.followersList.length + ")";
    box.style.display = 'block';
    content.innerHTML = '';

    if(userStats.followersList.length === 0) {
        content.innerHTML = "No followers yet.";
        return;
    }

    userStats.followersList.forEach((follower, idx) => {
        content.innerHTML += `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <span>${follower}</span>
            <button onclick="removeFollower(${idx})" style="background:#e11d48; color:#fff; border:none; padding:2px 6px; border-radius:4px; font-size:9px; cursor:pointer;">Remove</button>
        </div>`;
    });
}

function openFollowingList() {
    const box = document.getElementById('connections-view-box');
    const title = document.getElementById('connections-title');
    const content = document.getElementById('connections-list-content');
    
    title.innerText = "Following (" + userStats.followingList.length + ")";
    box.style.display = 'block';
    content.innerHTML = '';

    if(userStats.followingList.length === 0) {
        content.innerHTML = "Not following anyone.";
        return;
    }

    userStats.followingList.forEach((following, idx) => {
        content.innerHTML += `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <span>${following}</span>
            <button onclick="unfollowUser(${idx})" style="background:#e11d48; color:#fff; border:none; padding:2px 6px; border-radius:4px; font-size:9px; cursor:pointer;">Unfollow</button>
        </div>`;
    });
}

function removeFollower(index) {
    userStats.followersList.splice(index, 1);
    openFollowersList();
    updateProfileUI();
}

function unfollowUser(index) {
    userStats.followingList.splice(index, 1);
    openFollowingList();
    updateProfileUI();
}

// 5. Filters & Music Selection logic during Post Creation
function applyFilterPreview() {
    const selectedFilter = document.getElementById('filter-select').value;
    const box = document.getElementById('media-preview-box');
    
    // Simulating CSS filter previews
    box.style.filter = selectedFilter === 'none' ? 'none' : 'grayscale(30%) contrast(120%) brightness(110%)';
}

function filterMusicList() {
    const query = document.getElementById('music-search').value.toLowerCase();
    const select = document.getElementById('music-select');
    const options = select.options;

    for (let i = 0; i < options.length; i++) {
        let txt = options[i].text.toLowerCase();
        options[i].style.display = txt.includes(query) ? '' : 'none';
    }
}

// 6. Create Post & Add to Feed
function addNewPost() {
    const captionInput = document.getElementById('post-caption-input');
    const captionText = captionInput ? captionInput.value.trim() : '';
    const selectedFilter = document.getElementById('filter-select').value;
    const selectedMusic = document.getElementById('music-select').value;

    if (captionText === "") {
        alert("Please write something for your post!");
        return;
    }

    const newPost = {
        id: posts.length + 1,
        user: userProfile.name,
        username: userProfile.username,
        caption: captionText,
        likes: 0,
        liked: false,
        isMyPost: true,
        filter: selectedFilter,
        music: selectedMusic
    };

    posts.unshift(newPost);
    captionInput.value = "";
    goTo('home');
}

// 7. Render Feed Posts
function renderFeed() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    container.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.style.cssText = "background: #1a1a24; border-radius: 10px; padding: 10px; border: 1px solid #2a2a3c; margin-bottom: 12px;";
        
        let musicTag = post.music ? `<div style="font-size: 10px; color: #a855f7; margin-bottom: 4px;">🎵 Playing: ${post.music}</div>` : '';

        postDiv.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 8px;">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: #a855f7; margin-right: 8px; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold;">${post.user.charAt(0)}</div>
                <div>
                    <strong style="font-size: 12px;">${post.user}</strong>
                    <div style="font-size: 10px; color: #888;">${post.username}</div>
                </div>
            </div>
            ${musicTag}
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

// 8. Render Profile Grid Box
function renderProfileGrid() {
    const gridContainer = document.getElementById('profile-grid');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';
    const myPosts = posts.filter(p => p.isMyPost);

    if (myPosts.length === 0) {
        gridContainer.innerHTML = `<p style="font-size: 11px; color: #888; grid-column: span 3; text-align: center;">No posts yet. Create one!</p>`;
        return;
    }

    myPosts.forEach(post => {
        const gridItem = document.createElement('div');
        gridItem.style.cssText = "width: 100%; height: 45px; background: #252533; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #aaa; text-align: center; padding: 2px; overflow: hidden;";
        gridItem.innerText = post.caption;
        gridContainer.empty ? '' : gridContainer.appendChild(gridItem);
    });
    }
// ConnectX Master Logic - Comments System Added

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
    } else if (screenName === 'userprofile') {
        updateProfileUI();
    }
}

// User Profile Data
let userProfile = {
    name: "ConnectX Member",
    username: "@connectx_user",
    bio: "Welcome to my profile!",
    avatar: "C"
};

let userStats = {
    followersList: ["@system_bot", "@explore_user"],
    followingList: ["@connectx_official"]
};

// Global Posts with Comments Array
let posts = [
    { 
        id: 1, 
        user: "ConnectX Official", 
        username: "@connectx_official", 
        caption: "Welcome to the new era of social media! 🚀", 
        likes: 142, 
        liked: false, 
        isMyPost: false, 
        music: "Blinding Lights - The Weeknd", 
        filter: "none",
        comments: [
            { user: "@rahul_dev", text: "Amazing platform!" },
            { user: "@priya_99", text: "Excited for this! 🔥" }
        ]
    },
    { 
        id: 2, 
        user: "Aarav Sharma", 
        username: "@aarav_dev", 
        caption: "Building amazing things with HTML, CSS & JS! 💻✨", 
        likes: 38, 
        liked: false, 
        isMyPost: false, 
        music: "", 
        filter: "clarendon",
        comments: [
            { user: "@coder_boy", text: "Great code setup!" }
        ]
    }
];

let activePostIdForComments = null;

// Profile Management Functions
function saveInitialProfile() {
    const name = document.getElementById('setup-name').value.trim();
    const username = document.getElementById('setup-username').value.trim();
    const bio = document.getElementById('setup-bio').value.trim();

    if(name) userProfile.name = name;
    if(username) userProfile.username = username.startsWith('@') ? username : '@' + username;
    if(bio) userProfile.bio = bio;
    userProfile.avatar = userProfile.name.charAt(0).toUpperCase();

    goTo('home');
}

function toggleEditProfileMode() {
    const box = document.getElementById('edit-profile-box');
    if(box.style.display === 'none' || box.style.display === '') {
        box.style.display = 'block';
        document.getElementById('edit-name').value = userProfile.name;
        document.getElementById('edit-username').value = userProfile.username;
        document.getElementById('edit-bio').value = userProfile.bio;
    } else {
        box.style.display = 'none';
    }
}

function saveProfileChanges() {
    const name = document.getElementById('edit-name').value.trim();
    const username = document.getElementById('edit-username').value.trim();
    const avatar = document.getElementById('edit-avatar').value.trim();
    const bio = document.getElementById('edit-bio').value.trim();

    if(name) userProfile.name = name;
    if(username) userProfile.username = username.startsWith('@') ? username : '@' + username;
    if(bio) userProfile.bio = bio;
    if(avatar) userProfile.avatar = avatar;

    document.getElementById('edit-profile-box').style.display = 'none';
    updateProfileUI();
}

function updateProfileUI() {
    document.getElementById('profile-display-name').innerText = userProfile.name;
    document.getElementById('profile-display-username').innerText = userProfile.username;
    document.getElementById('profile-display-bio').innerText = userProfile.bio;
    document.getElementById('profile-avatar-box').innerText = userProfile.avatar;

    const myPostsCount = posts.filter(p => p.isMyPost).length;
    document.getElementById('count-posts').innerText = myPostsCount;
    document.getElementById('count-followers').innerText = userStats.followersList.length;
    document.getElementById('count-following').innerText = userStats.followingList.length;

    renderProfileGrid();
}

function toggleFollowUser(targetUserHandle) {
    const handle = '@' + targetUserHandle.toLowerCase().replace(/\s+/g, '_');
    const index = userStats.followingList.indexOf(handle);

    if (index > -1) {
        userStats.followingList.splice(index, 1);
        alert("Unfollowed " + handle);
    } else {
        userStats.followingList.push(handle);
        alert("Successfully followed " + handle + " (+1 Following)");
    }
    updateProfileUI();
}

function openFollowersList() {
    const box = document.getElementById('connections-view-box');
    const title = document.getElementById('connections-title');
    const content = document.getElementById('connections-list-content');
    
    title.innerText = "Followers (" + userStats.followersList.length + ")";
    box.style.display = 'block';
    content.innerHTML = '';

    if(userStats.followersList.length === 0) {
        content.innerHTML = "No followers yet.";
        return;
    }

    userStats.followersList.forEach((follower, idx) => {
        content.innerHTML += `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <span>${follower}</span>
            <button onclick="removeFollower(${idx})" style="background:#e11d48; color:#fff; border:none; padding:2px 6px; border-radius:4px; font-size:9px; cursor:pointer;">Remove</button>
        </div>`;
    });
}

function openFollowingList() {
    const box = document.getElementById('connections-view-box');
    const title = document.getElementById('connections-title');
    const content = document.getElementById('connections-list-content');
    
    title.innerText = "Following (" + userStats.followingList.length + ")";
    box.style.display = 'block';
    content.innerHTML = '';

    if(userStats.followingList.length === 0) {
        content.innerHTML = "Not following anyone.";
        return;
    }

    userStats.followingList.forEach((following, idx) => {
        content.innerHTML += `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <span>${following}</span>
            <button onclick="unfollowUser(${idx})" style="background:#e11d48; color:#fff; border:none; padding:2px 6px; border-radius:4px; font-size:9px; cursor:pointer;">Unfollow</button>
        </div>`;
    });
}

function removeFollower(index) {
    userStats.followersList.splice(index, 1);
    openFollowersList();
    updateProfileUI();
}

function unfollowUser(index) {
    userStats.followingList.splice(index, 1);
    openFollowingList();
    updateProfileUI();
}

// Comments Feature Logic
function openComments(postId) {
    activePostIdForComments = postId;
    goTo('comments');
    renderCommentsList();
}

function renderCommentsList() {
    const container = document.getElementById('comments-list-box');
    if (!container) return;

    const post = posts.find(p => p.id === activePostIdForComments);
    if (!post) return;

    container.innerHTML = '';

    if (!post.comments || post.comments.length === 0) {
        container.innerHTML = '<p style="color: #888; text-align: center;">No comments yet. Be the first!</p>';
        return;
    }

    post.comments.forEach(c => {
        container.innerHTML += `
            <div style="background: #1a1a24; padding: 6px 8px; border-radius: 6px; margin-bottom: 6px; border: 1px solid #2a2a3c;">
                <strong style="color: #a855f7;">${c.user}</strong>: <span>${c.text}</span>
            </div>
        `;
    });
}

function postComment() {
    const input = document.getElementById('comment-input');
    const text = input ? input.value.trim() : '';

    if (text === "") {
        alert("Please write a comment!");
        return;
    }

    const post = posts.find(p => p.id === activePostIdForComments);
    if (post) {
        if (!post.comments) post.comments = [];
        post.comments.push({
            user: userProfile.username,
            text: text
        });
        input.value = "";
        renderCommentsList();
    }
}

// Create Post Logic
function addNewPost() {
    const captionInput = document.getElementById('post-caption-input');
    const captionText = captionInput ? captionInput.value.trim() : '';
    const selectedFilter = document.getElementById('filter-select').value;
    const selectedMusic = document.getElementById('music-select').value;

    if (captionText === "") {
        alert("Please write something for your post!");
        return;
    }

    const newPost = {
        id: posts.length + 1,
        user: userProfile.name,
        username: userProfile.username,
        caption: captionText,
        likes: 0,
        liked: false,
        isMyPost: true,
        filter: selectedFilter,
        music: selectedMusic,
        comments: []
    };

    posts.unshift(newPost);
    captionInput.value = "";
    goTo('home');
}

// Render Feed Posts
function renderFeed() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    container.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.style.cssText = "background: #1a1a24; border-radius: 10px; padding: 10px; border: 1px solid #2a2a3c; margin-bottom: 12px;";
        
        let musicTag = post.music ? `<div style="font-size: 10px; color: #a855f7; margin-bottom: 4px;">🎵 Playing: ${post.music}</div>` : '';
        let commentCount = post.comments ? post.comments.length : 0;

        postDiv.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 8px;">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: #a855f7; margin-right: 8px; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold;">${post.user.charAt(0)}</div>
                <div>
                    <strong style="font-size: 12px;">${post.user}</strong>
                    <div style="font-size: 10px; color: #888;">${post.username}</div>
                </div>
            </div>
            ${musicTag}
            <p style="font-size: 12px; margin: 6px 0;">${post.caption}</p>
            <div style="display: flex; gap: 15px; margin-top: 8px; font-size: 13px; align-items: center;">
                <span onclick="toggleLike(${post.id})" style="cursor: pointer; color: ${post.liked ? '#ec4899' : '#fff'};">
                    ${post.liked ? '❤️' : '🤍'} ${post.likes} Likes
                </span>
                <span onclick="openComments(${post.id})" style="cursor: pointer; color: #aaa;">💬 Comments (${commentCount})</span>
            </div>
        `;
        container.appendChild(postDiv);
    });
}

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

function renderProfileGrid() {
    const gridContainer = document.getElementById('profile-grid');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';
    const myPosts = posts.filter(p => p.isMyPost);

    if (myPosts.length === 0) {
        gridContainer.innerHTML = `<p style="font-size: 11px; color: #888; grid-column: span 3; text-align: center;">No posts yet. Create one!</p>`;
        return;
    }

    myPosts.forEach(post => {
        const gridItem = document.createElement('div');
        gridItem.style.cssText = "width: 100%; height: 45px; background: #252533; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #aaa; text-align: center; padding: 2px; overflow: hidden;";
        gridItem.innerText = post.caption;
        gridContainer.appendChild(gridItem);
    });
        }
    
