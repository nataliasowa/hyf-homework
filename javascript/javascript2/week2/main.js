console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);

//Add filter by max price
const maximumPrice = document.getElementById("maximumPrice");

let userInputPrice = maximumPrice.addEventListener("input", getTheMaximumPrice);

function getTheMaximumPrice(e) {
  const maximumValue = number(e.target.value);
  if (maximumValue) {
    const outcome = products.filter(
      (product) => product.price <= maximumValue
    );
    renderProducts(outcome);
  } 
}
//Add filter by name
const inputName = document.getElementById("inputName");

let userInputName = inputName.addEventListener("keyup", getTheInputName);

function getTheInputName(e) {
    const filteredProducts = e.target.value.toLowerCase();
    const outcome = products.filter((product) => 
    product.name.toLowerCase().includes (filteredProducts)
      );
      renderProducts(outcome);
  }