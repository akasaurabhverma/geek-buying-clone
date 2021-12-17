const URL = "http://localhost:3000/api/products";

fetch(URL)
    .then(response => response.json())
    .then(res => {
        res.forEach(product => {
            console.table(product)
        });
    });