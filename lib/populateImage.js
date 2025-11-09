function populateImage(image, setName) {

    const img = document.createElement('img');
    img.src = image.url;
    img.title = image.title;
    img.alt = image.title;
    img.id = image.id;
    img.setAttribute("draggable", "true");
    img.dataset.set = setName;
    img.classList.add('populatedImages');

    img.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", img.id);
        });

    return img;
}

export{populateImage}