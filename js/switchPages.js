const page = document.getElementById("content");
setTimeout(() => {
    page.style.opacity = '1';
}, 1000);

function switchToPage(pageName) {
    page.style.opacity = '0';
    // Wait before switching pages
    setTimeout(() => {
        window.location.href = pageName;
    }, 1000);
}