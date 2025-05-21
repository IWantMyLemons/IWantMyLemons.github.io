function giveMe() {
    let gives = document.getElementsByTagName("giveme");
    for (const give of gives) {
        let src = give.attributes?.src?.nodeValue;
        if (src === undefined) {
            give.outerHTML = "<div style=\"background-color:pink;color:black\">ERR : src attribute is missing</div>";
            continue;
        }
        fetch(src).then((res) => {
            res.text().then((text) => {
                replaceExcecute(give, text);
            })
        })
    }
}

/**
 * Replaces an element with the html, also executes <script>
 * with and without src (WARNING : CONTAINS eval)
 * @param {Element} element 
 * @param {String} html 
 */
function replaceExcecute(element, html) {
    element.innerHTML = html;
    for (script of element.getElementsByTagName("script")) {
        if (script.src != "") {
            var tag = document.createElement("script");
            tag.src = script.src;
            document.head.appendChild(tag);
        }
        else {
            eval(script.innerHTML);
        }
    }
    element.outerHTML = element.innerHTML;
}

giveMe();