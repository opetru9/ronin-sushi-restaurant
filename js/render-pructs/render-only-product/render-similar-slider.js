function renderSimilarSlider(){

    const urlParams = new URLSearchParams(window.location.search);
    const productCategory = urlParams.get('category')

    const similarSliderElement = document.querySelector(" .similar-carousel ")
    similarSliderElement.classList.add(`${productCategory}-carousel`)
}
renderSimilarSlider()