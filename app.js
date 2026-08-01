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
    
// ConnectX Master Logic - Reels Feed System Added

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
    } else if (screenName === 'reels') {
        renderReelsFeed();
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

// Global Posts & Reels Array
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
        isReel: false,
        comments: [
            { user: "@rahul_dev", text: "Amazing platform!" }
        ]
    },
    { 
        id: 2, 
        user: "Aarav Sharma", 
        username: "@aarav_dev", 
        caption: "Amazing sunset views in cinematic style 🌅", 
        likes: 250, 
        liked: false, 
        isMyPost: false, 
        music: "Kesariya - Arijit Singh", 
        filter: "clarendon",
        isReel: true,
        comments: [
            { user: "@priya_99", text: "So beautiful!" }
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

// Follow / Unfollow System (+ Follower increase on follow)
function toggleFollowUser(targetUserHandle) {
    const handle = '@' + targetUserHandle.toLowerCase().replace(/\s+/g, '_');
    const index = userStats.followingList.indexOf(handle);

    if (index > -1) {
        userStats.followingList.splice(index, 1);
        alert("Unfollowed " + handle);
    } else {
        userStats.followingList.push(handle);
        // Automatically add a follower when user follows someone or simulated interaction
        userStats.followersList.push("@fan_" + Math.floor(Math.random() * 1000));
        alert("Successfully followed " + handle + " (+1 Following & +1 Follower)");
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

// Create Post / Reel Logic
function addNewPost() {
    const captionInput = document.getElementById('post-caption-input');
    const captionText = captionInput ? captionInput.value.trim() : '';
    const selectedFilter = document.getElementById('filter-select').value;
    const selectedMusic = document.getElementById('music-select').value;

    if (captionText === "") {
        alert("Please write something for your post!");
        return;
    }

    // Automatically flag as reel if music is selected or content implies video
    const isReelPost = selectedMusic !== "" || Math.random() > 0.5;

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
        isReel: isReelPost,
        comments: []
    };

    posts.unshift(newPost);
    captionInput.value = "";
    goTo('home');
}

// Render Reels Feed
function renderReelsFeed() {
    const container = document.getElementById('reels-container');
    if (!container) return;

    container.innerHTML = '';
    const reelsList = posts.filter(p => p.isReel);

    if (reelsList.length === 0) {
        container.innerHTML = '<p style="color: #888; text-align: center; font-size: 11px;">No reels available yet. Create one with music!</p>';
        return;
    }

    reelsList.forEach(reel => {
        const reelDiv = document.createElement('div');
        reelDiv.style.cssText = "background: #1a1a24; border-radius: 8px; padding: 10px; border: 1px solid #2a2a3c; margin-bottom: 8px; text-align: center;";
        
        reelDiv.innerHTML = `
            <div style="height: 100px; background: #252533; border-radius: 6px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #aaa; font-size: 11px; margin-bottom: 6px;">
                <span>▶️ [Vertical Reel Player]</span>
                <span style="font-size: 9px; color: #a855f7; margin-top: 2px;">🎵 ${reel.music || 'Original Audio'}</span>
            </div>
            <strong style="font-size: 11px; display: block; text-align: left;">${reel.user}</strong>
            <p style="font-size: 11px; margin: 2px 0; text-align: left; color: #ccc;">${reel.caption}</p>
            <div style="display: flex; gap: 12px; font-size: 11px; margin-top: 6px;">
                <span onclick="toggleLike(${reel.id})" style="cursor: pointer; color: ${reel.liked ? '#ec4899' : '#fff'};">
                    ${reel.liked ? '❤️' : '🤍'} ${reel.likes}
                </span>
                <span onclick="openComments(${reel.id})" style="cursor: pointer; color: #aaa;">💬 Comments</span>
            </div>
        `;
        container.appendChild(reelDiv);
    });
}

// Render Home Feed Posts
function renderFeed() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    container.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.style.cssText = "background: #1a1a24; border-radius: 10px; padding: 10px; border: 1px solid #2a2a3c; margin-bottom: 12px;";
        
        let musicTag = post.music ? `<div style="font-size: 10px; color: #a855f7; margin-bottom: 4px;">🎵 Playing: ${post.music}</div>` : '';
        let commentCount = post.comments ? post.comments.length : 0;
        let reelBadge = post.isReel ? `<span style="background: #a855f7; color: #fff; padding: 2px 6px; border-radius: 4px; font-size: 9px; float: right;">Reel</span>` : '';

        postDiv.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <div style="display: flex; align-items: center;">
                    <div style="width: 28px; height: 28px; border-radius: 50%; background: #a855f7; margin-right: 8px; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold;">${post.user.charAt(0)}</div>
                    <div>
                        <strong style="font-size: 12px;">${post.user}</strong>
                        <div style="font-size: 10px; color: #888;">${post.username}</div>
                    </div>
                </div>
                ${reelBadge}
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
        if(document.getElementById('screen-reels').classList.contains('active')) {
            renderReelsFeed();
        }
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
            
// ConnectX Master Logic - Messaging & Chat System Added

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
    } else if (screenName === 'reels') {
        renderReelsFeed();
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

// Global Posts & Reels Array
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
        isReel: false,
        comments: [
            { user: "@rahul_dev", text: "Amazing platform!" }
        ]
    },
    { 
        id: 2, 
        user: "Aarav Sharma", 
        username: "@aarav_dev", 
        caption: "Amazing sunset views in cinematic style 🌅", 
        likes: 250, 
        liked: false, 
        isMyPost: false, 
        music: "Kesariya - Arijit Singh", 
        filter: "clarendon",
        isReel: true,
        comments: [
            { user: "@priya_99", text: "So beautiful!" }
        ]
    }
];

// Direct Messages Chat Store
let chatConversations = {
    "@rahul_dev": [
        { sender: "@rahul_dev", text: "Hey! Welcome to ConnectX." },
        { sender: "@connectx_user", text: "Thanks Rahul! Great app." }
    ]
};

let activeChatUser = null;
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

// Follow / Unfollow System
function toggleFollowUser(targetUserHandle) {
    const handle = '@' + targetUserHandle.toLowerCase().replace(/\s+/g, '_');
    const index = userStats.followingList.indexOf(handle);

    if (index > -1) {
        userStats.followingList.splice(index, 1);
        alert("Unfollowed " + handle);
    } else {
        userStats.followingList.push(handle);
        userStats.followersList.push("@fan_" + Math.floor(Math.random() * 1000));
        alert("Successfully followed " + handle + " (+1 Following & +1 Follower)");
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

// Direct Messaging Chat Functions
function openChatWith(userHandle) {
    activeChatUser = userHandle;
    goTo('messages');
    
    const chatBox = document.getElementById('active-chat-box');
    const receiverTitle = document.getElementById('chat-receiver-name');
    
    chatBox.style.display = 'block';
    receiverTitle.innerText = "Chat with " + userHandle;

    renderChatMessages();
}

function closeChatWindow() {
    activeChatUser = null;
    document.getElementById('active-chat-box').style.display = 'none';
}

function renderChatMessages() {
    const container = document.getElementById('chat-messages-container');
    if (!container || !activeChatUser) return;

    container.innerHTML = '';
    if (!chatConversations[activeChatUser]) {
        chatConversations[activeChatUser] = [];
    }

    const messages = chatConversations[activeChatUser];
    if (messages.length === 0) {
        container.innerHTML = '<div style="color: #888; text-align: center;">No messages yet. Say hello!</div>';
        return;
    }

    messages.forEach(msg => {
        const isMe = msg.sender === userProfile.username;
        const alignStyle = isMe ? "text-align: right; background: #252533; color: #fff;" : "text-align: left; background: #1a1a24; color: #a855f7;";
        
        container.innerHTML += `
            <div style="padding: 6px 8px; border-radius: 6px; font-size: 11px; ${alignStyle}">
                <div style="font-size: 8px; color: #888; margin-bottom: 2px;">${msg.sender}</div>
                <span>${msg.text}</span>
            </div>
        `;
    });
    container.scrollTop = container.scrollHeight;
}

function sendDirectMessage() {
    const input = document.getElementById('chat-input-text');
    const text = input ? input.value.trim() : '';

    if (text === "" || !activeChatUser) return;

    if (!chatConversations[activeChatUser]) {
        chatConversations[activeChatUser] = [];
    }

    chatConversations[activeChatUser].push({
        sender: userProfile.username,
        text: text
    });

    input.value = "";
    renderChatMessages();
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

// Create Post / Reel Logic
function addNewPost() {
    const captionInput = document.getElementById('post-caption-input');
    const captionText = captionInput ? captionInput.value.trim() : '';
    const selectedFilter = document.getElementById('filter-select').value;
    const selectedMusic = document.getElementById('music-select').value;

    if (captionText === "") {
        alert("Please write something for your post!");
        return;
    }

    const isReelPost = selectedMusic !== "" || Math.random() > 0.5;

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
        isReel: isReelPost,
        comments: []
    };

    posts.unshift(newPost);
    captionInput.value = "";
    goTo('home');
}

// Render Reels Feed
function renderReelsFeed() {
    const container = document.getElementById('reels-container');
    if (!container) return;

    container.innerHTML = '';
    const reelsList = posts.filter(p => p.isReel);

    if (reelsList.length === 0) {
        container.innerHTML = '<p style="color: #888; text-align: center; font-size: 11px;">No reels available yet. Create one with music!</p>';
        return;
    }

    reelsList.forEach(reel => {
        const reelDiv = document.createElement('div');
        reelDiv.style.cssText = "background: #1a1a24; border-radius: 8px; padding: 10px; border: 1px solid #2a2a3c; margin-bottom: 8px; text-align: center;";
        
        reelDiv.innerHTML = `
            <div style="height: 100px; background: #252533; border-radius: 6px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #aaa; font-size: 11px; margin-bottom: 6px;">
                <span>▶️ [Vertical Reel Player]</span>
                <span style="font-size: 9px; color: #a855f7; margin-top: 2px;">🎵 ${reel.music || 'Original Audio'}</span>
            </div>
            <strong style="font-size: 11px; display: block; text-align: left;">${reel.user}</strong>
            <p style="font-size: 11px; margin: 2px 0; text-align: left; color: #ccc;">${reel.caption}</p>
            <div style="display: flex; gap: 12px; font-size: 11px; margin-top: 6px;">
                <span onclick="toggleLike(${reel.id})" style="cursor: pointer; color: ${reel.liked ? '#ec4899' : '#fff'};">
                    ${reel.liked ? '❤️' : '🤍'} ${reel.likes}
                </span>
                <span onclick="openComments(${reel.id})" style="cursor: pointer; color: #aaa;">💬 Comments</span>
            </div>
        `;
        container.appendChild(reelDiv);
    });
}

// Render Home Feed Posts
function renderFeed() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    container.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.style.cssText = "background: #1a1a24; border-radius: 10px; padding: 10px; border: 1px solid #2a2a3c; margin-bottom: 12px;";
        
        let musicTag = post.music ? `<div style="font-size: 10px; color: #a855f7; margin-bottom: 4px;">🎵 Playing: ${post.music}</div>` : '';
        let commentCount = post.comments ? post.comments.length : 0;
        let reelBadge = post.isReel ? `<span style="background: #a855f7; color: #fff; padding: 2px 6px; border-radius: 4px; font-size: 9px; float: right;">Reel</span>` : '';

        postDiv.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <div style="display: flex; align-items: center;">
                    <div style="width: 28px; height: 28px; border-radius: 50%; background: #a855f7; margin-right: 8px; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold;">${post.user.charAt(0)}</div>
                    <div>
                        <strong style="font-size: 12px;">${post.user}</strong>
                        <div style="font-size: 10px; color: #888;">${post.username}</div>
                    </div>
                </div>
                ${reelBadge}
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
        if(document.getElementById('screen-reels').classList.contains('active')) {
            renderReelsFeed();
        }
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

// ConnectX Master Logic - Clean Data Store (No Demo Users)

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
    } else if (screenName === 'reels') {
        renderReelsFeed();
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
    followersList: [],
    followingList: []
};

// Global Clean Arrays (No initial dummy content)
let posts = [];
let chatConversations = {};

let activeChatUser = null;
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

// Follow / Unfollow System
function toggleFollowUser(targetUserHandle) {
    const handle = '@' + targetUserHandle.toLowerCase().replace(/\s+/g, '_');
    const index = userStats.followingList.indexOf(handle);

    if (index > -1) {
        userStats.followingList.splice(index, 1);
        alert("Unfollowed " + handle);
    } else {
        userStats.followingList.push(handle);
        alert("Successfully followed " + handle);
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

// Direct Messaging Chat Functions
function openChatWith(userHandle) {
    activeChatUser = userHandle;
    goTo('messages');
    
    const chatBox = document.getElementById('active-chat-box');
    const receiverTitle = document.getElementById('chat-receiver-name');
    
    chatBox.style.display = 'block';
    receiverTitle.innerText = "Chat with " + userHandle;

    renderChatMessages();
}

function closeChatWindow() {
    activeChatUser = null;
    document.getElementById('active-chat-box').style.display = 'none';
}

function renderChatMessages() {
    const container = document.getElementById('chat-messages-container');
    if (!container || !activeChatUser) return;

    container.innerHTML = '';
    if (!chatConversations[activeChatUser]) {
        chatConversations[activeChatUser] = [];
    }

    const messages = chatConversations[activeChatUser];
    if (messages.length === 0) {
        container.innerHTML = '<div style="color: #888; text-align: center;">No messages yet. Say hello!</div>';
        return;
    }

    messages.forEach(msg => {
        const isMe = msg.sender === userProfile.username;
        const alignStyle = isMe ? "text-align: right; background: #252533; color: #fff;" : "text-align: left; background: #1a1a24; color: #a855f7;";
        
        container.innerHTML += `
            <div style="padding: 6px 8px; border-radius: 6px; font-size: 11px; ${alignStyle}">
                <div style="font-size: 8px; color: #888; margin-bottom: 2px;">${msg.sender}</div>
                <span>${msg.text}</span>
            </div>
        `;
    });
    container.scrollTop = container.scrollHeight;
}

function sendDirectMessage() {
    const input = document.getElementById('chat-input-text');
    const text = input ? input.value.trim() : '';

    if (text === "" || !activeChatUser) return;

    if (!chatConversations[activeChatUser]) {
        chatConversations[activeChatUser] = [];
    }

    chatConversations[activeChatUser].push({
        sender: userProfile.username,
        text: text
    });

    input.value = "";
    renderChatMessages();
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
        renderFeed();
    }
}

// Create Post / Reel Logic
function addNewPost() {
    const captionInput = document.getElementById('post-caption-input');
    const captionText = captionInput ? captionInput.value.trim() : '';
    const selectedFilter = document.getElementById('filter-select').value;
    const selectedMusic = document.getElementById('music-select').value;

    if (captionText === "") {
        alert("Please write something for your post!");
        return;
    }

    const isReelPost = selectedMusic !== "";

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
        isReel: isReelPost,
        comments: []
    };

    posts.unshift(newPost);
    captionInput.value = "";
    goTo('home');
}

// Render Reels Feed
function renderReelsFeed() {
    const container = document.getElementById('reels-container');
    if (!container) return;

    container.innerHTML = '';
    const reelsList = posts.filter(p => p.isReel);

    if (reelsList.length === 0) {
        container.innerHTML = '<p style="color: #888; text-align: center; font-size: 11px;">No reels available. Create a post with background music to add a reel!</p>';
        return;
    }

    reelsList.forEach(reel => {
        const reelDiv = document.createElement('div');
        reelDiv.style.cssText = "background: #1a1a24; border-radius: 8px; padding: 10px; border: 1px solid #2a2a3c; margin-bottom: 8px; text-align: center;";
        
        reelDiv.innerHTML = `
            <div style="height: 100px; background: #252533; border-radius: 6px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #aaa; font-size: 11px; margin-bottom: 6px;">
                <span>▶️ [Vertical Reel Player]</span>
                <span style="font-size: 9px; color: #a855f7; margin-top: 2px;">🎵 ${reel.music || 'Original Audio'}</span>
            </div>
            <strong style="font-size: 11px; display: block; text-align: left;">${reel.user}</strong>
            <p style="font-size: 11px; margin: 2px 0; text-align: left; color: #ccc;">${reel.caption}</p>
            <div style="display: flex; gap: 12px; font-size: 11px; margin-top: 6px;">
                <span onclick="toggleLike(${reel.id})" style="cursor: pointer; color: ${reel.liked ? '#ec4899' : '#fff'};">
                    ${reel.liked ? '❤️' : '🤍'} ${reel.likes}
                </span>
                <span onclick="openComments(${reel.id})" style="cursor: pointer; color: #aaa;">💬 Comments</span>
            </div>
        `;
        container.appendChild(reelDiv);
    });
}

// Render Home Feed Posts
function renderFeed() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    container.innerHTML = '';

    if (posts.length === 0) {
        container.innerHTML = '<p style="color: #888; text-align: center; font-size: 12px; margin-top: 20px;">No posts in feed yet. Tap ➕ Create to publish your first post!</p>';
        return;
    }

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.style.cssText = "background: #1a1a24; border-radius: 10px; padding: 10px; border: 1px solid #2a2a3c; margin-bottom: 12px;";
        
        let musicTag = post.music ? `<div style="font-size: 10px; color: #a855f7; margin-bottom: 4px;">🎵 Playing: ${post.music}</div>` : '';
        let commentCount = post.comments ? post.comments.length : 0;
        let reelBadge = post.isReel ? `<span style="background: #a855f7; color: #fff; padding: 2px 6px; border-radius: 4px; font-size: 9px; float: right;">Reel</span>` : '';

        postDiv.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <div style="display: flex; align-items: center;">
                    <div style="width: 28px; height: 28px; border-radius: 50%; background: #a855f7; margin-right: 8px; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold;">${post.user.charAt(0)}</div>
                    <div>
                        <strong style="font-size: 12px;">${post.user}</strong>
                        <div style="font-size: 10px; color: #888;">${post.username}</div>
                    </div>
                </div>
                ${reelBadge}
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
        if(document.getElementById('screen-reels').classList.contains('active')) {
            renderReelsFeed();
        }
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
    
// ConnectX Master Logic - AI Match & Real User System Added

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
    } else if (screenName === 'reels') {
        renderReelsFeed();
    }
}

// User Profile Data (with Gender, Age, Location, Hobbies saved permanently)
let userProfile = {
    name: "ConnectX Member",
    username: "@connectx_user",
    gender: "Male", // "Male" or "Female"
    age: 21,
    location: "Delhi",
    hobbies: "coding, music, gaming",
    bio: "Welcome to my profile!",
    avatar: "C"
};

let userStats = {
    followersList: [],
    followingList: []
};

// Real user database pool for AI matching (Only real human profiles, opposite gender filter applied)
let realUsersDatabase = [
    { name: "Priya Sharma", username: "@priya_sharma", gender: "Female", age: 20, location: "Delhi", hobbies: "music, reading, art", bio: "Art lover & coder" },
    { name: "Aarav Gupta", username: "@aarav_g", gender: "Male", age: 22, location: "Mumbai", hobbies: "gaming, coding, cricket", bio: "Tech enthusiast" },
    { name: "Sneha Patel", username: "@sneha_p", gender: "Female", age: 21, location: "Bangalore", hobbies: "dancing, coding, travel", bio: "Wanderlust" },
    { name: "Rohan Verma", username: "@rohan_v", gender: "Male", age: 23, location: "Delhi", hobbies: "music, gym, photography", bio: "Fitness & Shutterbug" }
];

let posts = [];
let chatConversations = {};
let activeChatUser = null;
let activePostIdForComments = null;
let currentAiMatchedUser = null;

// Profile Management Functions
function saveInitialProfile() {
    const name = document.getElementById('setup-name').value.trim();
    const username = document.getElementById('setup-username').value.trim();
    const gender = document.getElementById('setup-gender').value;
    const age = parseInt(document.getElementById('setup-age').value) || 20;
    const location = document.getElementById('setup-location').value.trim();
    const hobbies = document.getElementById('setup-hobbies').value.trim();
    const bio = document.getElementById('setup-bio').value.trim();

    if(name) userProfile.name = name;
    if(username) userProfile.username = username.startsWith('@') ? username : '@' + username;
    userProfile.gender = gender;
    userProfile.age = age;
    if(location) userProfile.location = location;
    if(hobbies) userProfile.hobbies = hobbies;
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
        document.getElementById('edit-gender').value = userProfile.gender;
        document.getElementById('edit-age').value = userProfile.age;
        document.getElementById('edit-location').value = userProfile.location;
        document.getElementById('edit-hobbies').value = userProfile.hobbies;
        document.getElementById('edit-bio').value = userProfile.bio;
    } else {
        box.style.display = 'none';
    }
}

function saveProfileChanges() {
    const name = document.getElementById('edit-name').value.trim();
    const username = document.getElementById('edit-username').value.trim();
    const gender = document.getElementById('edit-gender').value;
    const age = parseInt(document.getElementById('edit-age').value) || userProfile.age;
    const location = document.getElementById('edit-location').value.trim();
    const hobbies = document.getElementById('edit-hobbies').value.trim();
    const bio = document.getElementById('edit-bio').value.trim();

    if(name) userProfile.name = name;
    if(username) userProfile.username = username.startsWith('@') ? username : '@' + username;
    userProfile.gender = gender;
    userProfile.age = age;
    if(location) userProfile.location = location;
    if(hobbies) userProfile.hobbies = hobbies;
    if(bio) userProfile.bio = bio;
    userProfile.avatar = userProfile.name.charAt(0).toUpperCase();

    document.getElementById('edit-profile-box').style.display = 'none';
    updateProfileUI();
}

function updateProfileUI() {
    document.getElementById('profile-display-name').innerText = userProfile.name;
    document.getElementById('profile-display-username').innerText = userProfile.username;
    document.getElementById('profile-display-details').innerText = `${userProfile.gender} | ${userProfile.age} yrs | ${userProfile.location}`;
    document.getElementById('profile-display-bio').innerText = userProfile.bio;
    document.getElementById('profile-avatar-box').innerText = userProfile.avatar;

    const myPostsCount = posts.filter(p => p.isMyPost).length;
    document.getElementById('count-posts').innerText = myPostsCount;
    document.getElementById('count-followers').innerText = userStats.followersList.length;
    document.getElementById('count-following').innerText = userStats.followingList.length;

    renderProfileGrid();
}

// AI Match Screen Handler (Checks if data exists once, otherwise prompts user only once)
function openAiMatchScreen() {
    goTo('aimatch');
    const promptBox = document.getElementById('ai-match-setup-prompt');
    const resultsBox = document.getElementById('ai-match-results-box');
    const card = document.getElementById('ai-matched-profile-card');

    card.style.display = 'none';

    // Check if required matching data is missing or incomplete
    if (!userProfile.age || !userProfile.location || !userProfile.hobbies) {
        promptBox.style.display = 'block';
        resultsBox.style.display = 'none';
        document.getElementById('ai-req-age').value = userProfile.age || '';
        document.getElementById('ai-req-location').value = userProfile.location || '';
        document.getElementById('ai-req-hobbies').value = userProfile.hobbies || '';
    } else {
        promptBox.style.display = 'none';
        resultsBox.style.display = 'block';
    }
}

function saveAiPreferences() {
    const age = parseInt(document.getElementById('ai-req-age').value);
    const location = document.getElementById('ai-req-location').value.trim();
    const hobbies = document.getElementById('ai-req-hobbies').value.trim();

    if(!age || !location || !hobbies) {
        alert("Please fill all preference fields!");
        return;
    }

    userProfile.age = age;
    userProfile.location = location;
    userProfile.hobbies = hobbies;

    alert("Preferences saved successfully! You won't be asked again.");
    openAiMatchScreen();
}

// AI Matching Algorithm (Strict Rules: Opposite Gender + Real Person Only + Age/Location/Hobbies match)
function runAiMatching() {
    const targetGenderToMatch = userProfile.gender === 'Male' ? 'Female' : 'Male';

    // Filter real users based on opposite gender constraint
    const eligiblePool = realUsersDatabase.filter(u => u.gender === targetGenderToMatch);

    if (eligiblePool.length === 0) {
        alert("No suitable real matches found right now!");
        return;
    }

    // Pick best match using AI score logic (matching location/hobbies/age closeness)
    let bestMatch = eligiblePool[0];
    let maxScore = -1;

    eligiblePool.forEach(u => {
        let score = 0;
        if (u.location.toLowerCase() === userProfile.location.toLowerCase()) score += 5;
        if (Math.abs(u.age - userProfile.age) <= 3) score += 3;
        
        // Hobbies matching check
        const userHobbiesArr = userProfile.hobbies.toLowerCase().split(',').map(h => h.trim());
        const targetHobbiesArr = u.hobbies.toLowerCase().split(',').map(h => h.trim());
        const commonHobbies = userHobbiesArr.filter(h => targetHobbiesArr.includes(h));
        score += commonHobbies.length * 2;

        if (score > maxScore) {
            maxScore = score;
            bestMatch = u;
        }
    });

    currentAiMatchedUser = bestMatch;

    // Display Matched Card with Age visible during match view as requested
    const card = document.getElementById('ai-matched-profile-card');
    card.style.display = 'block';

    document.getElementById('matched-avatar').innerText = bestMatch.name.charAt(0);
    document.getElementById('matched-name').innerText = bestMatch.name;
    document.getElementById('matched-username').innerText = bestMatch.username;
    document.getElementById('matched-meta').innerText = `Age: ${bestMatch.age} yrs | Location: ${bestMatch.location} (${bestMatch.gender})`;
    document.getElementById('matched-hobbies').innerText = `Hobbies: ${bestMatch.hobbies}`;
}

function followMatchedUser() {
    if(!currentAiMatchedUser) return;
    toggleFollowUser(currentAiMatchedUser.username);
}

function chatWithMatchedUser() {
    if(!currentAiMatchedUser) return;
    openChatWith(currentAiMatchedUser.username);
}

// Follow / Unfollow System
function toggleFollowUser(targetUserHandle) {
    const handle = targetUserHandle.startsWith('@') ? targetUserHandle : '@' + targetUserHandle.toLowerCase().replace(/\s+/g, '_');
    const index = userStats.followingList.indexOf(handle);

    if (index > -1) {
        userStats.followingList.splice(index, 1);
        alert("Unfollowed " + handle);
    } else {
        userStats.followingList.push(handle);
        userStats.followersList.push("@fan_" + Math.floor(Math.random() * 1000));
        alert("Successfully followed " + handle);
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

// Direct Messaging Chat Functions
function openChatWith(userHandle) {
    activeChatUser = userHandle;
    goTo('messages');
    
    const chatBox = document.getElementById('active-chat-box');
    const receiverTitle = document.getElementById('chat-receiver-name');
    
    chatBox.style.display = 'block';
    receiverTitle.innerText = "Chat with " + userHandle;

    renderChatMessages();
}

function closeChatWindow() {
    activeChatUser = null;
    document.getElementById('active-chat-box').style.display = 'none';
}

function renderChatMessages() {
    const container = document.getElementById('chat-messages-container');
    if (!container || !activeChatUser) return;

    container.innerHTML = '';
    if (!chatConversations[activeChatUser]) {
        chatConversations[activeChatUser] = [];
    }

    const messages = chatConversations[activeChatUser];
    if (messages.length === 0) {
        container.innerHTML = '<div style="color: #888; text-align: center;">No messages yet. Say hello!</div>';
        return;
    }

    messages.forEach(msg => {
        const isMe = msg.sender === userProfile.username;
        const alignStyle = isMe ? "text-align: right; background: #252533; color: #fff;" : "text-align: left; background: #1a1a24; color: #a855f7;";
        
        container.innerHTML += `
            <div style="padding: 6px 8px; border-radius: 6px; font-size: 11px; ${alignStyle}">
                <div style="font-size: 8px; color: #888; margin-bottom: 2px;">${msg.sender}</div>
                <span>${msg.text}</span>
            </div>
        `;
    });
    container.scrollTop = container.scrollHeight;
}

function sendDirectMessage() {
    const input = document.getElementById('chat-input-text');
    const text = input ? input.value.trim() : '';

    if (text === "" || !activeChatUser) return;

    if (!chatConversations[activeChatUser]) {
        chatConversations[activeChatUser] = [];
    }

    chatConversations[activeChatUser].push({
        sender: userProfile.username,
        text: text
    });

    input.value = "";
    renderChatMessages();
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
        renderFeed();
    }
}

// Create Post / Reel Logic
function addNewPost() {
    const captionInput = document.getElementById('post-caption-input');
    const captionText = captionInput ? captionInput.value.trim() : '';
    const selectedFilter = document.getElementById('filter-select').value;
    const selectedMusic = document.getElementById('music-select').value;

    if (captionText === "") {
        alert("Please write something for your post!");
        return;
    }

    const isReelPost = selectedMusic !== "";

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
        isReel: isReelPost,
        comments: []
    };

    posts.unshift(newPost);
    captionInput.value = "";
    goTo('home');
}

// Render Reels Feed
function renderReelsFeed() {
    const container = document.getElementById('reels-container');
    if (!container) return;

    container.innerHTML = '';
    const reelsList = posts.filter(p => p.isReel);

    if (reelsList.length === 0) {
        container.innerHTML = '<p style="color: #888; text-align: center; font-size: 11px;">No reels available. Create a post with background music to add a reel!</p>';
        return;
    }

    reelsList.forEach(reel => {
        const reelDiv = document.createElement('div');
        reelDiv.style.cssText = "background: #1a1a24; border-radius: 8px; padding: 10px; border: 1px solid #2a2a3c; margin-bottom: 8px; text-align: center;";
        
        reelDiv.innerHTML = `
            <div style="height: 100px; background: #252533; border-radius: 6px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #aaa; font-size: 11px; margin-bottom: 6px;">
                <span>▶️ [Vertical Reel Player]</span>
                <span style="font-size: 9px; color: #a855f7; margin-top: 2px;">🎵 ${reel.music || 'Original Audio'}</span>
            </div>
            <strong style="font-size: 11px; display: block; text-align: left;">${reel.user}</strong>
            <p style="font-size: 11px; margin: 2px 0; text-align: left; color: #ccc;">${reel.caption}</p>
            <div style="display: flex; gap: 12px; font-size: 11px; margin-top: 6px;">
                <span onclick="toggleLike(${reel.id})" style="cursor: pointer; color: ${reel.liked ? '#ec4899' : '#fff'};">
                    ${reel.liked ? '❤️' : '🤍'} ${reel.likes}
                </span>
                <span onclick="openComments(${reel.id})" style="cursor: pointer; color: #aaa;">💬 Comments</span>
            </div>
        `;
        container.appendChild(reelDiv);
    });
}

// Render Home Feed Posts
function renderFeed() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    container.innerHTML = '';

    if (posts.length === 0) {
        container.innerHTML = '<p style="color: #888; text-align: center; font-size: 12px; margin-top: 20px;">No posts in feed yet. Tap ➕ Create to publish your first post!</p>';
        return;
    }

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.style.cssText = "background: #1a1a24; border-radius: 10px; padding: 10px; border: 1px solid #2a2a3c; margin-bottom: 12px;";
        
        let musicTag = post.music ? `<div style="font-size: 10px; color: #a855f7; margin-bottom: 4px;">🎵 Playing: ${post.music}</div>` : '';
        let commentCount = post.comments ? post.comments.length : 0;
        let reelBadge = post.isReel ? `<span style="background: #a855f7; color: #fff; padding: 2px 6px; border-radius: 4px; font-size: 9px; float: right;">Reel</span>` : '';

        postDiv.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <div style="display: flex; align-items: center;">
                    <div style="width: 28px; height: 28px; border-radius: 50%; background: #a855f7; margin-right: 8px; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold;">${post.user.charAt(0)}</div>
                
// ConnectX Master Logic - AI Match, Real Users, Messaging & Notifications

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
    } else if (screenName === 'reels') {
        renderReelsFeed();
    } else if (screenName === 'notifications') {
        renderNotifications();
    }
}

// User Profile Data
let userProfile = {
    name: "ConnectX Member",
    username: "@connectx_user",
    gender: "Male",
    age: 21,
    location: "Delhi",
    hobbies: "coding, music, gaming",
    bio: "Welcome to my profile!",
    avatar: "C"
};

let userStats = {
    followersList: [],
    followingList: []
};

// Real User Database Pool for AI Matching
let realUsersDatabase = [
    { name: "Priya Sharma", username: "@priya_sharma", gender: "Female", age: 20, location: "Delhi", hobbies: "music, reading, art", bio: "Art lover & coder" },
    { name: "Aarav Gupta", username: "@aarav_g", gender: "Male", age: 22, location: "Mumbai", hobbies: "gaming, coding, cricket", bio: "Tech enthusiast" },
    { name: "Sneha Patel", username: "@sneha_p", gender: "Female", age: 21, location: "Bangalore", hobbies: "dancing, coding, travel", bio: "Wanderlust" },
    { name: "Rohan Verma", username: "@rohan_v", gender: "Male", age: 23, location: "Delhi", hobbies: "music, gym, photography", bio: "Fitness & Shutterbug" }
];

let posts = [];
let chatConversations = {};
let notificationsList = [];
let activeChatUser = null;
let activePostIdForComments = null;
let currentAiMatchedUser = null;

// Notification Helper
function addNotification(text) {
    notificationsList.unshift({
        id: Date.now(),
        text: text,
        time: "Just now"
    });
}

function renderNotifications() {
    const container = document.getElementById('notifications-list-container');
    if (!container) return;

    container.innerHTML = '';
    if (notificationsList.length === 0) {
        container.innerHTML = '<p style="color: #888; text-align: center; font-size: 11px;">No new notifications yet.</p>';
        return;
    }

    notificationsList.forEach(notif => {
        container.innerHTML += `
            <div style="background: #1a1a24; padding: 8px; border-radius: 6px; border: 1px solid #2a2a3c; display: flex; justify-content: space-between; align-items: center;">
                <span>${notif.text}</span>
                <span style="font-size: 9px; color: #888;">${notif.time}</span>
            </div>
        `;
    });
}

// Profile Management Functions
function saveInitialProfile() {
    const name = document.getElementById('setup-name').value.trim();
    const username = document.getElementById('setup-username').value.trim();
    const gender = document.getElementById('setup-gender').value;
    const age = parseInt(document.getElementById('setup-age').value) || 20;
    const location = document.getElementById('setup-location').value.trim();
    const hobbies = document.getElementById('setup-hobbies').value.trim();
    const bio = document.getElementById('setup-bio').value.trim();

    if(name) userProfile.name = name;
    if(username) userProfile.username = username.startsWith('@') ? username : '@' + username;
    userProfile.gender = gender;
    userProfile.age = age;
    if(location) userProfile.location = location;
    if(hobbies) userProfile.hobbies = hobbies;
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
        document.getElementById('edit-gender').value = userProfile.gender;
        document.getElementById('edit-age').value = userProfile.age;
        document.getElementById('edit-location').value = userProfile.location;
        document.getElementById('edit-hobbies').value = userProfile.hobbies;
        document.getElementById('edit-bio').value = userProfile.bio;
    } else {
        box.style.display = 'none';
    }
}

function saveProfileChanges() {
    const name = document.getElementById('edit-name').value.trim();
    const username = document.getElementById('edit-username').value.trim();
    const gender = document.getElementById('edit-gender').value;
    const age = parseInt(document.getElementById('edit-age').value) || userProfile.age;
    const location = document.getElementById('edit-location').value.trim();
    const hobbies = document.getElementById('edit-hobbies').value.trim();
    const bio = document.getElementById('edit-bio').value.trim();

    if(name) userProfile.name = name;
    if(username) userProfile.username = username.startsWith('@') ? username : '@' + username;
    userProfile.gender = gender;
    userProfile.age = age;
    if(location) userProfile.location = location;
    if(hobbies) userProfile.hobbies = hobbies;
    if(bio) userProfile.bio = bio;
    userProfile.avatar = userProfile.name.charAt(0).toUpperCase();

    document.getElementById('edit-profile-box').style.display = 'none';
    updateProfileUI();
}

function updateProfileUI() {
    document.getElementById('profile-display-name').innerText = userProfile.name;
    document.getElementById('profile-display-username').innerText = userProfile.username;
    document.getElementById('profile-display-details').innerText = `${userProfile.gender} | ${userProfile.age} yrs | ${userProfile.location}`;
    document.getElementById('profile-display-bio').innerText = userProfile.bio;
    document.getElementById('profile-avatar-box').innerText = userProfile.avatar;

    const myPostsCount = posts.filter(p => p.isMyPost).length;
    document.getElementById('count-posts').innerText = myPostsCount;
    document.getElementById('count-followers').innerText = userStats.followersList.length;
    document.getElementById('count-following').innerText = userStats.followingList.length;

    renderProfileGrid();
}

// AI Match Screen Handler
function openAiMatchScreen() {
    goTo('aimatch');
    const promptBox = document.getElementById('ai-match-setup-prompt');
    const resultsBox = document.getElementById('ai-match-results-box');
    const card = document.getElementById('ai-matched-profile-card');

    card.style.display = 'none';

    if (!userProfile.age || !userProfile.location || !userProfile.hobbies) {
        promptBox.style.display = 'block';
        resultsBox.style.display = 'none';
        document.getElementById('ai-req-age').value = userProfile.age || '';
        document.getElementById('ai-req-location').value = userProfile.location || '';
        document.getElementById('ai-req-hobbies').value = userProfile.hobbies || '';
    } else {
        promptBox.style.display = 'none';
        resultsBox.style.display = 'block';
    }
}

function saveAiPreferences() {
    const age = parseInt(document.getElementById('ai-req-age').value);
    const location = document.getElementById('ai-req-location').value.trim();
    const hobbies = document.getElementById('ai-req-hobbies').value.trim();

    if(!age || !location || !hobbies) {
        alert("Please fill all preference fields!");
        return;
    }

    userProfile.age = age;
    userProfile.location = location;
    userProfile.hobbies = hobbies;

    alert("Preferences saved successfully!");
    openAiMatchScreen();
}

// AI Matching Logic (Strict Opposite Gender)
function runAiMatching() {
    const targetGenderToMatch = userProfile.gender === 'Male' ? 'Female' : 'Male';
    const eligiblePool = realUsersDatabase.filter(u => u.gender === targetGenderToMatch);

    if (eligiblePool.length === 0) {
        alert("No suitable real matches found right now!");
        return;
    }

    let bestMatch = eligiblePool[0];
    let maxScore = -1;

    eligiblePool.forEach(u => {
        let score = 0;
        if (u.location.toLowerCase() === userProfile.location.toLowerCase()) score += 5;
        if (Math.abs(u.age - userProfile.age) <= 3) score += 3;
        
        const userHobbiesArr = userProfile.hobbies.toLowerCase().split(',').map(h => h.trim());
        const targetHobbiesArr = u.hobbies.toLowerCase().split(',').map(h => h.trim());
        const commonHobbies = userHobbiesArr.filter(h => targetHobbiesArr.includes(h));
        score += commonHobbies.length * 2;

        if (score > maxScore) {
            maxScore = score;
            bestMatch = u;
        }
    });

    currentAiMatchedUser = bestMatch;

    const card = document.getElementById('ai-matched-profile-card');
    card.style.display = 'block';

    document.getElementById('matched-avatar').innerText = bestMatch.name.charAt(0);
    document.getElementById('matched-name').innerText = bestMatch.name;
    document.getElementById('matched-username').innerText = bestMatch.username;
    document.getElementById('matched-meta').innerText = `Age: ${bestMatch.age} yrs | Location: ${bestMatch.location} (${bestMatch.gender})`;
    document.getElementById('matched-hobbies').innerText = `Hobbies: ${bestMatch.hobbies}`;
}

function followMatchedUser() {
    if(!currentAiMatchedUser) return;
    toggleFollowUser(currentAiMatchedUser.username);
}

function chatWithMatchedUser() {
    if(!currentAiMatchedUser) return;
    openChatWith(currentAiMatchedUser.username);
}

// Follow / Unfollow System
function toggleFollowUser(targetUserHandle) {
    const handle = targetUserHandle.startsWith('@') ? targetUserHandle : '@' + targetUserHandle.toLowerCase().replace(/\s+/g, '_');
    const index = userStats.followingList.indexOf(handle);

    if (index > -1) {
        userStats.followingList.splice(index, 1);
        alert("Unfollowed " + handle);
    } else {
        userStats.followingList.push(handle);
        userStats.followersList.push("@fan_" + Math.floor(Math.random() * 1000));
        addNotification(`${handle} started following you 👤`);
        alert("Successfully followed " + handle);
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

// Direct Messaging Chat Functions
function openChatWith(userHandle) {
    activeChatUser = userHandle;
    goTo('messages');
    
    const chatBox = document.getElementById('active-chat-box');
    const receiverTitle = document.getElementById('chat-receiver-name');
    
    chatBox.style.display = 'block';
    receiverTitle.innerText = "Chat with " + userHandle;

    renderChatMessages();
}

function closeChatWindow() {
    activeChatUser = null;
    document.getElementById('active-chat-box').style.display = 'none';
}

function renderChatMessages() {
    const container = document.getElementById('chat-messages-container');
    if (!container || !activeChatUser) return;

    container.innerHTML = '';
    if (!chatConversations[activeChatUser]) {
        chatConversations[activeChatUser] = [];
    }

    const messages = chatConversations[activeChatUser];
    if (messages.length === 0) {
        container.innerHTML = '<div style="color: #888; text-align: center;">No messages yet. Say hello!</div>';
        return;
    }

    messages.forEach(msg => {
        const isMe = msg.sender === userProfile.username;
        const alignStyle = isMe ? "text-align: right; background: #252533; color: #fff;" : "text-align: left; background: #1a1a24; color: #a855f7;";
        
        container.innerHTML += `
            <div style="padding: 6px 8px; border-radius: 6px; font-size: 11px; ${alignStyle}">
                <div style="font-size: 8px; color: #888; margin-bottom: 2px;">${msg.sender}</div>
                <span>${msg.text}</span>
            </div>
        `;
    });
    container.scrollTop = container.scrollHeight;
}

function sendDirectMessage() {
    const input = document.getElementById('chat-input-text');
    const text = input ? input.value.trim() : '';

    if (text === "" || !activeChatUser) return;

    if (!chatConversations[activeChatUser]) {
        chatConversations[activeChatUser] = [];
    }

    chatConversations[activeChatUser].push({
        sender: userProfile.username,
        text: text
    });

    input.value = "";
    renderChatMessages();
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
        addNotification(`${userProfile.username} commented on your post 💬`);
        renderCommentsList();
        renderFeed();
    }
}

// Create Post / Reel Logic
function addNewPost() {
    const captionInput = document.getElementById('post-caption-input');
    const captionText = captionInput ? captionInput.value.trim() : '';
    const selectedFilter = document.getElementById('filter-select').value;
    const selectedMusic = document.getElementById('music-select').value;

    if (captionText === "") {
        alert("Please write something for your post!");
        return;
    }

    const isReelPost = selectedMusic !== "";

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
        isReel: isReelPost,
        comments: []
    };

    posts.unshift(newPost);
    captionInput.value = "";
    goTo('home');
}

// Render Reels Feed
function renderReelsFeed() {
    const container = document.getElementById('reels-container');
    if (!container) return;

    container.innerHTML = '';
    const reelsList = posts.filter(p => p.isReel);

    if (reelsList.length === 0) {
        container.innerHTML = '<p style="color: #888; text-align: center; font-size: 11px;">No reels available. Create a post with background music to add a reel!</p>';
        return;
    }

    reelsList.forEach(reel => {
        const reelDiv = document.createElement('div');
        reelDiv.style.cssText = "background: #1a1a24; border-radius: 8px; padding: 10px; border: 1px solid #2a2a3c; margin-bottom: 8px; text-align: center;";
        
        reelDiv.innerHTML = `
            <div style="height: 100px; background: #252533; border-radius: 6px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #aaa; font-size: 11px; margin-bottom: 6px;">
                <span>▶️ [Vertical Reel Player]</span>
                <span style="font-size: 9px; color: #a855f7; margin-top: 2px;">🎵 ${reel.music || 'Original Audio'}</span>
            </div>
            <strong style="font-size: 11px; display: block; text-align: left;">${reel.user}</strong>
            <p style="font-size: 11px; margin: 2px 0; text-align: left; color: #ccc;">${reel.caption}</p>
            <div style="display: flex; gap: 12px; font-size: 11px; margin-top: 6px;">
                <span onclick="toggleLike(${reel.id})" style="cursor: pointer; color: ${reel.liked ? '#ec4899' : '#fff'};">
                    ${reel.liked ? '❤️' : '🤍'} ${reel.likes}
                </span>
                <span onclick="openComments(${reel.id})" style="cursor: pointer; color: #aaa;">💬 Comments</span>
            </div>
        `;
        container.appendChild(reelDiv);
    });
}

// Render Home Feed Posts
function renderFeed() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    container.innerHTML = '';

    if (posts.length === 0) {
        container.innerHTML = '<p style="color: #888; text-align: center; font-size: 12px; margin-top: 20px;">No posts in feed yet. Tap ➕ Create to publish your first post!</p>';
        return;
    }

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.style.cssText = "background: #1a1a24; border-radius: 10px; padding: 10px; border: 1px solid #2a2a3c; margin-bottom: 12px;";
        
        let musicTag = post.music ? `<div style="font-size: 10px; color: #a855f7; margin-bottom: 4px;">🎵 Playing: ${post.music}</div>` : '';
        let commentCount = post.comments ? post.comments.length : 0;
        let reelBadge = post.isReel ? `<span styl
