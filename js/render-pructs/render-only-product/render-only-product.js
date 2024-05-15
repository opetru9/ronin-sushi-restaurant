
function renderOnlyProduct(){

    const sectionElement = document.querySelector('.only-product')
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    // console.log(productId)

    const productCategory = urlParams.get('category')
    let renderedProduct;
    switch (productCategory){
        case "rolle" :
            renderedProduct = rolleProducts.find(prod => prod.id == productId);
        break
        case "tempura" :
            renderedProduct = tempuraProducts.find(prod => prod.id == productId);
        break
    }
    // console.log(renderedProduct)

    sectionElement.innerHTML =  `
    <div class="only-product__container">
        <div class="only-product__items">
            <div class="only-product__item">
                <img src="../${renderedProduct.img}" alt="${renderedProduct.name}">
            </div>
            <div class="only-product__item">
                <h1>${renderedProduct.name}</h1>
                <h3>${renderedProduct.price} ${renderedProduct.currency}</h3>
                <div class="weight">
                    <span>Masa:</span><span> ${renderedProduct.weight}g</span>
                </div>
                <p class="ingredients"> <span>Ingrediente:</span> ${renderedProduct.ingredients}</p>
                <div class="category">
                    Categorie: <span><a href="category.html?category=${renderedProduct.category}">${renderedProduct.category}</a></span> 
                </div>
            </div>
        </div>
    </div>
    `

    // let similarProd = document.createElement('section')
    // similarProd.innerHTML += `
    //     <div class="container">
    //         <div class="title-container">
    //             <h2 class="section-title">Produse Similare</h2>
    //         </div>
    //         <div class="slider"></div>
    //     </div>
    // `
    // similarProd.classList.add(`${renderedProduct.category}-carousel`)
    // similarProd.classList.add(`section-carousel`)
    // document.body.appendChild(similarProd)

    // const similarSliderElement = document.querySelector(" .tempura-carousel ")
    // similarSliderElement.classList.remove("tempura-carousel")
    // similarSliderElement.classList.add(`${renderedProduct.category}-carousel`)

}
renderOnlyProduct()

