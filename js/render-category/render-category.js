const titleContainer = document.querySelector('.categry_products__title-container')
const categoryProductsContainer = document.querySelector('.categry_products__items')

const urlParams = new URLSearchParams(window.location.search);
const productCategory = urlParams.get('category')
switch (productCategory){
        case "rolle" :
            renderedProduct = rolleProducts;
        break
        case "tempura" :
            renderedProduct = tempuraProducts;
        break
    }
function renderCategory(){
    titleContainer.innerHTML= `
        <h2 class="categry_products__title">
            ${productCategory}
        </h2>
    `
    for( i=0; i<renderedProduct.length; i++ ){
        categoryProductsContainer.innerHTML += `
            <div class="categry_products__item">
                <a href="only-product.html?category=${renderedProduct[i].category}&id=${renderedProduct[i].id}">
                    <img src="${renderedProduct[i].img}" alt="${renderedProduct[i].name}">
                </a>
                <h2><a href="only-product.html?category=${renderedProduct[i].category}&id=${renderedProduct[i].id}">${renderedProduct[i].name}</a></h2>
                <h3>${renderedProduct[i].price} ${renderedProduct[i].currency}</h3>
            </div> 
    `}
}
renderCategory()