
class ImageEntry {
    constructor(id, filepath, title, description, date_created) {
        this.id = id
        this.filepath = filepath
        this.title = title
        this.description = description
        this.date_created = date_created
    }

    toHTMLElement() {
        const parentDiv = document.createElement('div');
        parentDiv.innerHTML = `
        <a class="gallery-entry" href="image.html?id=${this.id}">
            <img class="gallery-image" src="gallery/${this.filepath}" alt="${this.description}" title="${this.description}">
            ${this.title}
        </a>
        `.trim()
        return parentDiv.firstChild;
    }
}

export default [
    new ImageEntry(0, "001-sona.webp", "old fursona", "old attempt on a fursona using copper rust colors :3"),
    new ImageEntry(1, "002-toy.webp", "toy", "Random pooltoy drawing"),
    new ImageEntry(2, "003-dergon.webp", "dergon", "lineless dragon"),
    new ImageEntry(3, "004-tech.webp", "tech", "it me! :3"),
    new ImageEntry(4, "005-bigfurrymen.png", "big furry men", "tried drawing uhh... large furry men?"),
    new ImageEntry(5, "006-proots.png", "proots", "alt sona"),
    new ImageEntry(6, "007-navtoy.png", "navtoy", "p-p-pooltoy lizor"),
    new ImageEntry(7, "008-tingtang.png", "tingtang", "eviscerate funny, brain think anglerfish"),
    new ImageEntry(8, "009-cozy.png", "cozy", "cozy :3"),
    new ImageEntry(9, "010-realisticnav.png", "realisticnav", "ok, this one is just plushsuit kink art"),
    new ImageEntry(10, "011-anvil.webp", "meal", "bunger king"),
    new ImageEntry(11, "012-navflation.gif", "navflation", "funny image i made :3"),
    new ImageEntry(12, "013-web.png", "cool tetris development", "me coding :3333"),
]