const form = document.getElementById("form");

form.addEventListener("submit", addProduct);

function addProduct(e) {
    e.preventDefault();

    const product = new Product(form.itemCode.value, form.price.value, form.name.value, form.title.value, form.brand.value, form.image.value, form.desc.value)

    //console.table(product);
    postProductToDatabase(JSON.stringify(product));
}


//Constructor function that will return product details as object
function Product(itemCode, price, name, longTitle, brand, poster, description) {
    this.itemCode = itemCode;
    this.price = price;
    this.name = name;
    this.longTitle = longTitle;
    this.brand = brand;
    this.poster = poster;
    this.description = description;
}


async function postProductToDatabase(product) {
    const URL = `http://127.0.0.1:3000/api/products`;
    const response = await fetch(URL, {
        method: "POST",
        body: product,
        headers: {
            "content-type": "application/json"
        }
    });
}