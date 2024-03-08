let lightMode = true;
const darkSheet = document.getElementById("darkMode");
const colorSwitch = document.getElementById("colorSwitch");

function changeSheet() {

    // Toggle color mode
    lightMode = !lightMode;
    colorSwitch.innerText = "";

    // Change stylesheet links
    if (lightMode == false) {
        console.log("Dark mode is on.");
        darkSheet.media = "";
        colorSwitch.innerText = "Enable Light Mode";
    } else {
        console.log("Light mode is on.");
        darkSheet.media = "none";
        colorSwitch.innerText = "Enable Dark Mode";
    }
}