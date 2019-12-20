let $showProductsButton = document.getElementById( 'js-show-products' );

$showProductsButton.addEventListener( 'click', showProducts );
let products = [
    {
        name: 'Sugar',
        image_url: 'https://via.placeholder.com/150',
        price: 'N 10,000',
    },
    {
        name: 'Spice',
        image_url: 'https://via.placeholder.com/150',
        price: 'N 20,000',
    },
    {
        name: 'Anything Nice',
        image_url: 'https://via.placeholder.com/150',
        price: 'N 30,000',
    },
];

let shownProducts = false;

function showProducts() {

    if ( shownProducts ) {
        return;
    }
    let $productList = document.getElementById('js-product-list');
    let productsContent = '';

    products.forEach( function ( product ) {
        let productContent = `<div class="product">
                                <img src="${product.image_url}" class="product-image" alt=""/>
                                <div class="product-content">
                                    <span class="product-title">${product.name}</span>
                                    <span class="product-price">${product.price}</span>
                                </div>
                            </div>`;
        productsContent = productsContent + productContent;
    } );
    $productList.innerHTML = productsContent;

    shownProducts = true;
}
