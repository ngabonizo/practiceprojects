//save the data
const products = [
  {
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  name: 'Black and Gray Athletic Cottom Socks - 6 pairs',
  rating: {
    stars: 4.5,
    count: 87
  },
  priceCents: 1090 //js works better without float eg 10.90 cents
},
{
 image: 'images/products/intermediate-composite-basketball.jpg',
 name: 'Intermediate Size Basketball',
 rating:{
  stars: 4,
  count: 127
 },
 priceCents: 2095
},
{
  image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name:'Adults Plain Cotton T-Shirt - 2 Pack',
  rating: {
    stars: 4.5,
    count: 45
  },
  priceCents: 999
},
{
  image: 'images/products/black-2-slot-toaster.jpg',
  name: '2 Slot Toaster - Black',
  rating: {
    stars: 5,
    count: 2197
  },
  priceCents: 1899
},
{
  image: 'images/products/6-piece-white-dinner-plate-set.jpg',
  name: '6 Piece White Dinner Plate Set',
  rating: {
    stars: 4,
    count: 37
  },
  priceCents: 2067
},
{
  image: 'images/products/6-piece-non-stick-baking-set.webp',
  name: '6 - Piece Nonstick, Carbon Steel Oven BakeWare Baking Set',
  rating: {
    stars: 4.5,
    count: 175
  },
  priceCents: 3499
}
];

//3.combine the HTML and save to webpage
let productsHTML = '';

//2.generate the HTML
products.forEach((product) => {
  productsHTML += `
  <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}"></div>
        <div class="product-name-container">${product.name}</div>
      <div class="product-rating-container">
        <img src="images/ratings/rating-${product.rating.stars * 10}.png " class="product-rating-image">
        <div class="product-count">${product.rating.count}</div>
      </div>
      <div class="product-price-container">$${product.priceCents / 100}</div>
      <div class="product-quantity-container">
        <select class="select-button">
          <option value="1" selected>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div class="added-to-cart-message"></div>
      <button class="add-to-cart-button">Add to Cart</button>
      </div>
  `;

  console.log(productsHTML);
})



//4.use dom to put html to page
document.querySelector('.js-product-grid').innerHTML = productsHTML;

//productHTML is repeating itself
