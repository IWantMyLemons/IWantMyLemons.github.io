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

function updateGallery() {
    const new_images = gallery
        .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
        .map((image) => image.toHTMLElement());

    galleryElement.replaceChildren(...new_images)
}

class ImageEntry {
    constructor(filepath, title, description, date_created) {
        this.filepath = filepath
        this.title = title
        this.description = description
        this.date_created = date_created
    }

    toHTMLElement() {
        const parentDiv = document.createElement('div');
        parentDiv.innerHTML = `
        <div class="gallery-entry">
            <img class="gallery-image" src="gallery/${this.filepath}" alt="${this.description}" title="${this.description}">
            ${this.title}
        </div>
        `.trim()
        return parentDiv.firstChild;
    }
}

const gallery = [
    new ImageEntry("001-sona.webp", "old fursona", "old attempt on a fursona using copper rust colors :3"),
    new ImageEntry("002-toy.webp", "toy", "Random pooltoy drawing"),
    new ImageEntry("003-dergon.webp", "dergon", "lineless dragon"),
    new ImageEntry("004-tech.webp", "tech", "it me! :3"),
    new ImageEntry("005-bigfurrymen.png", "big furry men", "tried drawing uhh... large furry men?"),
    new ImageEntry("006-proots.png", "proots", "alt sona"),
    new ImageEntry("007-navtoy.png", "navtoy", "p-p-pooltoy lizor"),
    new ImageEntry("008-tingtang.png", "tingtang", "eviscerate funny, brain think anglerfish"),
    new ImageEntry("009-cozy.png", "cozy", "cozy :3"),
    new ImageEntry("010-realisticnav.png", "realisticnav", "ok, this one is just plushsuit kink art"),
    new ImageEntry("011-anvil.webp", "meal", "bunger king"),
    new ImageEntry("012-navflation.gif", "navflation", "funny image i made :3"),
    new ImageEntry("013-web.png", "cool tetris development", "me coding :3333"),
]

updateGallery()
