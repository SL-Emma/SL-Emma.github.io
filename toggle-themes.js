document.querySelectorAll("#toggle-theme, #art-theme, #code-theme, #martial-theme").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const root = document.documentElement;
        const themeImage = document.getElementById("theme-image");
        const theme = e.target.getAttribute("href").substring(1); 

        if (theme === "matcha") {
            root.style.setProperty("--bg-color", "#040b00ff");
            root.style.setProperty("--bg-highlight-color", "#486213ff");
            root.style.setProperty("--highlight-color", "#D4D0B9");
            root.style.setProperty("--primary-font-color", "white");
            root.style.setProperty("--box-color", "#192f0eff");   
            if (themeImage) {
                themeImage.src = "./images/me3.jpg"; 
            }
        } else if (theme === "art") {
            root.style.setProperty("--bg-color", "#030022ff");
            root.style.setProperty("--bg-highlight-color", "#160967ff");
            root.style.setProperty("--highlight-color", "#3041d5ff");
            root.style.setProperty("--primary-font-color", "#a99aedff");
            root.style.setProperty("--box-color", "#140e3fff");   
            if (themeImage) {
                themeImage.src = "./images/art-theme.jpg"; 
            }

        } else if (theme === "martial") {
            root.style.setProperty("--bg-color", "#13000bff");
            root.style.setProperty("--bg-highlight-color", "#50071dff");
            root.style.setProperty("--highlight-color", "#d5303bff");
            root.style.setProperty("--primary-font-color", "#f3c1d8ff");
            root.style.setProperty("--box-color", "#27060dff");   
            if (themeImage) {
                themeImage.src = "./images/karate_me.jpg"; 
            }
        } else {
            root.style.setProperty("--bg-color", "#010116");
            root.style.setProperty("--bg-highlight-color", "#1b033e");
            root.style.setProperty("--highlight-color", "#a117ff");
            root.style.setProperty("--primary-font-color", "rgb(164, 148, 190)");
            root.style.setProperty("--box-color", "rgb(8, 0, 18)");
            if (themeImage) {
                themeImage.src = "./images/me2_gre2.png"; 
            }
        }
    });
});