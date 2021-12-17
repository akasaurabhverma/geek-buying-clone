const carouselImage = document.getElementById("carousel-image");

const imageList = [];

async function createCarousel() {

    const carouselURL = "http://localhost:3000/api/carousel";

    const response = await fetch(carouselURL);

    const res = await response.json();

    imageList.push(...res);

    carouselImage.src = res[0];
}

createCarousel()
    .then(() => {
        let i = 0, len = imageList.length;

        setInterval(() => {
            carouselImage.src = imageList[++i % len];
        }, 3000);
    });

