
const tempuraProducts = [
    {
        name:"Tempura",
        price:100,
        currency:"MDL",
        img:"img/tempura/tempura.jpg",
        ingredients:"Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
        id : 21,
        category : "tempura",
        weight: 100
    },
    {
        name:"Tempura 2",
        price:200,
        currency:"MDL",
        img:"img/tempura/tempura.jpg",
        ingredients:"Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
        id : 22,
        category : "tempura",
        weight: 200
    },
    {
        name:"Tempura 3",
        price:300,
        currency:"MDL",
        img:"img/tempura/tempura.jpg",
        ingredients:"Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
        id : 23,
        category : "tempura",
        weight: 300
    },
    {
        name:"Tempura 4",
        price:400,
        currency:"MDL",
        img:"img/tempura/tempura.jpg",
        ingredients:"Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
        id : 24,
        category : "tempura",
        weight: 400
    },
    {
        name:"Tempura 5",
        price:500,
        currency:"MDL",
        img:"img/tempura/tempura.jpg",
        ingredients:"Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
        id : 25,
        category : "tempura",
        weight: 500
    },
    {
        name:"Tempura 6",
        price:600,
        currency:"MDL",
        img:"img/tempura/tempura.jpg",
        ingredients:"Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
        id : 26,
        category : "tempura",
        weight: 600
    },
    {
        name:"Tempura 7",
        price:700,
        currency:"MDL",
        img:"img/tempura/tempura.jpg",
        ingredients:"Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
        id : 27,
        category : "tempura",
        weight: 700
    },
   
]

const tempuraSliderElement = document.querySelector(" .tempura-carousel .slider")
console.log(tempuraSliderElement)
function renderTempuraProducts(){
    if(tempuraSliderElement){
        for( i=0; i<tempuraProducts.length; i++ ){
            console.log(tempuraProducts[i].img)
             tempuraSliderElement.innerHTML += `
                 <div class="slider_item">
                     <a href="only-product.html?category=${tempuraProducts[i].category}&id=${tempuraProducts[i].id}">
                         <img src="${tempuraProducts[i].img}" alt="${tempuraProducts[i].name}">
                     </a>
                     <h3><a href="only-product.html?category=${tempuraProducts[i].category}&id=${tempuraProducts[i].id}">${tempuraProducts[i].name}</a></h3>
                     <h4>${tempuraProducts[i].price} ${tempuraProducts[i].currency}</h4>
                 </div>
                 `
        }
    }
}
renderTempuraProducts()