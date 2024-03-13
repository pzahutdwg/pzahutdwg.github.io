// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration time
    const cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`; // Construct the cookie string
    document.cookie = cookie; // Set the cookie
    console.log(getCookie(name))
}

// Function to get a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split(';'); // Split all cookies into an array
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim(); // Trim whitespace
        const [cookieName, cookieValue] = cookie.split('='); // Split cookie into name and value
        if (cookieName === name) {
            return decodeURIComponent(cookieValue); // Return the decoded cookie value
        }
    }
    return null; // Return null if cookie not found
}

// Code by ChatGPT 3.5