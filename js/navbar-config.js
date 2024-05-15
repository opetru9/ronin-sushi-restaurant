
function renderHamMenu(){
    const ham_menu = document.querySelector(".ham-menu")
    const off_screen_menu = document.querySelector(".off-screen-menu")
    ham_menu.addEventListener("click", () => {
        ham_menu.classList.toggle("active")
        off_screen_menu.classList.toggle("active")
    })
}
renderHamMenu()

function HideOverNavbar() {
    const navbarElement = document.querySelector(".main-navbar");
    const logoElement = document.querySelector(".logo");
    const ham_menu = document.querySelector(".ham-menu")

    document.addEventListener('scroll', () => {
        let scroll = document.documentElement.scrollTop;

        const backOnTopElement = document.querySelector(".back-on-top")
        
        if (scroll == 0) {
            navbarElement.classList.remove("active");
            logoElement.classList.remove("active");
            ham_menu.classList.remove("scroll");

            backOnTopElement.classList.remove("active")

        } else if(scroll >= 400){

            backOnTopElement.classList.add("active")

        }else  {
            navbarElement.classList.add("active");
            logoElement.classList.add("active");
            ham_menu.classList.add("scroll");
        }
        
        // console.log(scroll)

    });
}
HideOverNavbar();

function adaptiveSkinnyNavbar(){
    const orderInfo = document.querySelector(".order-data")
    const openInfo = document.querySelector(".open")
    if(innerWidth > 900){
        orderInfo.innerHTML=`
                    <span>Comanda acum:
                        <b> 
                            <a href="tel:+37360011911">+060011911</a> /
                            <a href="tel:+37369184145">+069184145</a>
                        </b>
                    </span>
        `
        openInfo.innerHTML =`
                    <span>
                        Suntem deschisi in fiecare zi! <b> 8:00 - 22:00 </b>
                    </span>
        `
    }else{
        orderInfo.innerHTML =`
            <b> 
                <a href="tel:+37360011911">+060011911</a> /
                <a href="tel:+37369184145">+069184145</a>
            </b>
        `
        openInfo.innerHTML =`
                    <span>
                        <b> 8:00 - 22:00 </b>
                    </span>
        `
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            orderInfo.innerHTML = `
                <span>Comanda acum:
                    <b> 
                        <a href="tel:+37360011911">+060011911</a> /
                        <a href="tel:+37369184145">+069184145</a>
                    </b>
                </span>
            `;
            openInfo.innerHTML = `
                <span>
                    Suntem deschisi in fiecare zi! <b> 8:00 - 22:00 </b>
                </span>
            `;
        } else {
            orderInfo.innerHTML = `
                <b> 
                    <a href="tel:+37360011911">+060011911</a> /
                    <a href="tel:+37369184145">+069184145</a>
                </b>
            `;
            openInfo.innerHTML = `
                <span>
                    <b> 8:00 - 22:00 </b>
                </span>
            `;
        }
    });
}
adaptiveSkinnyNavbar()