const searchParams = new URLSearchParams(window.location.search);
const currentPage = parseInt(searchParams.get("page")) | 0;

const pageSize = 3;

const galleryElement = document.getElementById("gallery");
const nextElement = document.getElementById("next-button");
const backElement = document.getElementById("back-button");

searchParams.set("page", currentPage + 1)
nextElement.href = "?" + searchParams.toString()
searchParams.set("page", currentPage - 1)
backElement.href = "?" + searchParams.toString()
searchParams.set("page", currentPage)

function updateGallery(gallery) {
    const new_images = gallery
        .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
        .map((image) => image.toHTMLElement());

    galleryElement.replaceChildren(...new_images);
};

import("./gallery_data.js").then((gallery_data) => {
    updateGallery(gallery_data.default)
})
