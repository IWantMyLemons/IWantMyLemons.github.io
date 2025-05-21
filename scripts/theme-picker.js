const DEFAULT_THEME = "catppuccin-mocha-red"

/**
 * Sets the page theme
 * @param {String} themeName 
 */
function setTheme(themeName) {
    document.getElementById("theme")?.remove();

    let link = document.createElement("link");
    link.href = `/style/theme-${themeName}.css`;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.id = "theme";

    document.head.appendChild(link);
}

const searchParams = new URLSearchParams(window.location.search);
let theme = searchParams.get("theme") ?? DEFAULT_THEME;

setTheme(theme);