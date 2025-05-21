function giveMe() {
    console.log("GIB ME")
    let gives = document.getElementsByTagName("giveme");
    for (const give of gives) {
        let src = give.attributes?.src?.nodeValue;
        if (src === undefined) {
            give.outerHTML = "<div style=\"background-color:pink;color:black\">ERR : src attribute is missing</div>";
            continue;
        }
        fetch(src).then((res) => {
            res.text().then((text) => {
                give.outerHTML = text;
            })
        })
    }
}

addEventListener("DOMContentLoaded", (_) => {
    giveMe();
})