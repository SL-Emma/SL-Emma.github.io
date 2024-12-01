
document.getElementById("toggle-theme").addEventListener("click", (e) => {
    e.preventDefault();

    // check current background color and toggle
    const root = document.documentElement;
    const isMatcha = root.style.getPropertyValue("--bg-color") === "#010116";

    if (isMatcha) {
        // switch to greenish theme
        root.style.setProperty("--bg-color", "#394931");
        root.style.setProperty("--bg-highlight-color", "#90997F");
        root.style.setProperty("--highlight-color", "#D4D0B9");
        root.style.setProperty("--primary-font-color", "white");
        root.style.setProperty("--box-color", "#394931");   
    } else {
        // switch back to original theme
        root.style.setProperty("--bg-color", "#010116");
        root.style.setProperty("--bg-highlight-color", "#1b033e");
        root.style.setProperty("--highlight-color", "#a117ff");
        root.style.setProperty("--primary-font-color", "rgb(164, 148, 190)");
        root.style.setProperty("--box-color", "rgb(8, 0, 18)");
    }
});

