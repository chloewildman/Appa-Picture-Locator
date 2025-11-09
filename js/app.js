import { populateImage } from "../lib/populateImage.js";


// API fetch
const apiURL = "./models/data.json";

async function fetchImagesData() {
    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err)
    }
}

(async () => {
    const images = await fetchImagesData();

    const allImages = [
        ...images.appa.map(img => ({ ...img})),
        ...images.notAppa.map(img => ({ ...img}))
    ];

    allImages.forEach(img => {
        img.sortNumber = Math.random();
    });

    allImages.sort((a, b) => a.sortNumber - b.sortNumber);

    allImages.forEach(image => {
        const img = populateImage(image, image.set);

        document.getElementById('imgContainer').appendChild(img);
    })
})();

// Drop zones

const zones = ['dropzoneAppa', 'dropzoneNotAppa']

zones.forEach(zone => {
    const dropzone = document.getElementById(zone);
    dropzone.addEventListener('drop', e => {
        e.preventDefault();
        const imgId = e.dataTransfer.getData('text/plain');
        const img = document.getElementById(imgId);
        const imgSet = img.dataset.set;

        if (
            (zone === "dropzoneAppa" && imgSet === "appa")
            ||
            (zone === "dropzoneNotAppa" && imgSet === "notAppa")) {
            feedback(dropzone,"lightgreen");
            successMessage();
            dropzone.appendChild(img);
        } else if
            ((zone === "dropzoneAppa" && imgSet === "notAppa")
            ||
            (zone === "dropzoneNotAppa" && imgSet === "appa")) {
            feedback(dropzone,"#F47174");
            failMessage();
        }

    });

    dropzone.addEventListener('dragover', e => {
        e.preventDefault();
        dropzone.style.backgroundColor = 'lightblue';
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.style.backgroundColor = "";
    });

})

// Helper functions
const feedback = (dropzone, color) => {
    dropzone.style.backgroundColor=color;
    setTimeout(() => {dropzone.style.backgroundColor = "";}, 300);
}

const failMessage = () => {
  const message = document.getElementById('confirmationMessage');
  message.innerHTML = "Um...No...";

  presentMessage(message);
};

const successMessage = () => {
  const message = document.getElementById('confirmationMessage');
  message.innerHTML = "Yes! That's correct!";

  presentMessage(message);
};

const presentMessage = (message) => {
    message.classList.add('message', 'fade-in');

    setTimeout(() => {
    message.classList.remove('fade-in');
    message.classList.add('fade-out');
  }, 800);

  setTimeout(() => {
    message.innerHTML = "";
    message.classList.remove('fade-out', 'message');
  }, 1200);
}
