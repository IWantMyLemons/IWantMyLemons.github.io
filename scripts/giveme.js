function giveMe() {
    let gives = document.getElementsByTagName("giveme");
    for (const give of gives) {
        let src = give.attributes?.src?.nodeValue;    
        fetch(src).then((res) => {
            res.text().then((text) => {
                give.innerHTML = text;
            })
        })
    }
}

addEventListener("load", (_) => {
    giveMe();
})