let body = document.getElementById("doby");

fetch("https://dummyjson.com/products?limit=16")
  .then((res) => res.json())
  .then((json) => {
    for (let i = 0; i < json.products.length; i++) {
      body.innerHTML += `<div class="product">
                          <img src="${json.products[i].images[0]}" />
                          <div class="thumbnail">
                            <div class="left">
                              <div>${json.products[i].title}</div>
                              <div>${json.products[i].price}$</div>
                            </div>
                            <div class="right">
                              <div>Rating: ${json.products[i].rating}</div>
                              <div>Brand: ${json.products[i].brand}</div>
                            </div>
                          </div>
                        </div>`;
    }
  });
