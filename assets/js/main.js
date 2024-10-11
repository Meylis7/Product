
// var ==========================
let burger = document.querySelector(".burger");
let nav_bg = document.querySelector(".nav");

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

window.onclick = function (e) {
    if (nav_bg.classList.contains('active') && !e.target.closest('.burger') && !e.target.closest('.nav ul')) {
        nav_bg.classList.remove('active')
    }
}


// Clicks ======================================================
if (burger != undefined) {
    burger.addEventListener('click', function () {
        sleep(2).then(() => {
            nav_bg.classList.toggle('active');
            burger.classList.toggle('active');
        });
    });
}
