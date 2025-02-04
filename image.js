const main_image = document.getElementById("main_image");
const title = document.getElementById("title");
const description = document.getElementById("description");

const searchParams = new URLSearchParams(window.location.search);
const id = parseInt(searchParams.get("id")) | 0;

import("./gallery_data.js").then((gallery_data) => {
    const image = gallery_data.default[id]

    main_image.src = `gallery/${image.filepath}`;
    title.textContent = image.title;
    description.textContent = image.description;
})