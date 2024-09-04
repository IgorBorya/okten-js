let target = document.getElementById("target");

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((result) => {
    let products = result.products;
    for (let product of products) {
      //   console.log(product.id, product.title, product.price, product.category);
      //   console.log("*****");
      let div = document.createElement("div");
      let p = document.createElement("p");
      let titleH2 = document.createElement("h2");
      titleH2.innerText = `Category - ${product.category}.  ${product.title}`;

      p.innerText = product.description;

      let img = document.createElement("img");
      img.src = product.thumbnail;

      div.appendChild(titleH2);
      div.appendChild(p);
      div.appendChild(img);
      target.appendChild(div);
    }
  });
