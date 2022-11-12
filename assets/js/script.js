

const headerTopCloseBtn = document.querySelector(".header-top-close-btn button ");
const headerTop = document.querySelector(".header-top");

function headerTopClose (){
    headerTopCloseBtn.addEventListener("click", function () {

        headerTop.style.display = "none";
        
    })
}

headerTopClose();






$(".filter").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    prefix: "$"
});











