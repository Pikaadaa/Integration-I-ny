const ratio = .1

var options = {
    root: null,
    rootMargin: "0px",
    treshold: .1
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})

var btnBurger = document.getElementById('menu-burger');
var main = document.getElementById('main');
var footer = document.getElementById('footer');
var modalMenu = document.getElementById('modal-menu');
var isModalVisible = false;

btnBurger.addEventListener('click', function () {
    if (isModalVisible) {
        main.style.display = 'block';
        footer.style.display = 'block';
        modalMenu.style.display = 'none';
        modalMenu.classList.remove('active');
        isModalVisible = false;
    } else {
        main.style.display = 'none';
        footer.style.display = 'none';
        modalMenu.style.display = 'block';
        modalMenu.classList.add('active');
        isModalVisible = true;
    }
});