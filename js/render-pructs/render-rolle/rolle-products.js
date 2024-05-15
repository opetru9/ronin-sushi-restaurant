
const rolleProducts = [
    {
        name:"Phildaefia",
        price:100,
        currency:"MDL",
        img:"img/rolle.img/Vegetarian-Sushi-Rolls-9707-I-1.jpg",
        ingredients:"Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
        id : 0,
        category : "rolle",
        weight: 300
    },
    {
        name:"Phildaefia 2",
        price:150,
        currency:"MDL",
        img:"img/rolle.img/Vegetarian-Sushi-Rolls-9707-I-1.jpg",
        ingredients:"Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
        id : 1,
        category : "rolle",
        weight: 100
    },
    {
        name:"Phildaefia 3",
        price:250,
        currency:"MDL",
        img:"img/rolle.img/Vegetarian-Sushi-Rolls-9707-I-1.jpg",
        ingredients:"Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
        id : 2,
        category : "rolle",
        weight: 200
    },
    {
        name:"Phildaefia 4",
        price:350,
        currency:"MDL",
        img:"img/rolle.img/Vegetarian-Sushi-Rolls-9707-I-1.jpg",
        ingredients:"Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
        id : 3,
        category : "rolle",
        weight: 300
    },
    {
        name:"Phildaefia 5",
        price:450,
        currency:"MDL",
        img:"img/rolle.img/Vegetarian-Sushi-Rolls-9707-I-1.jpg",
        ingredients:"Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
        id : 4,
        category : "rolle",
        weight: 400
    },
    {
        name:"Phildaefia 6",
        price:550,
        currency:"MDL",
        img:"img/rolle.img/Vegetarian-Sushi-Rolls-9707-I-1.jpg",
        ingredients:"Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
        id : 5,
        category : "rolle",
        weight: 500
    },
    {
        name:"Phildaefia 7",
        price:650,
        currency:"MDL",
        img:"img/rolle.img/Vegetarian-Sushi-Rolls-9707-I-1.jpg",
        ingredients:"Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
        id : 6,
        category : "rolle",
        weight: 600
    },
   
]

const rolleSliderElement = document.querySelector(".rolle-carousel .slider")

function renderRolleProducts(){
    if(rolleSliderElement){
        for( i=0; i<rolleProducts.length; i++ ){
             rolleSliderElement.innerHTML += `
                 <div class="slider_item">
                     <a href="only-product.html?category=${rolleProducts[i].category}&id=${rolleProducts[i].id}">
                         <img src="${rolleProducts[i].img}" alt="${rolleProducts[i].name}">
                     </a>
                     <h3><a href="only-product.html?category=${rolleProducts[i].category}&id=${rolleProducts[i].id}">${rolleProducts[i].name}</a></h3>
                     <h4>${rolleProducts[i].price} ${rolleProducts[i].currency}</h4>
                 </div>
                 `
        }
    }
}
renderRolleProducts()