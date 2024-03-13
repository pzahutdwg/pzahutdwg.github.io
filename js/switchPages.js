const page = document.getElementById("content");
page.style.opacity = '1';

function switchToPage(pageName) {
    page.style.opacity = '0';
    // Wait before switching pages
    setTimeout(() => {
        window.location.href = pageName;
    }, 1000);
}