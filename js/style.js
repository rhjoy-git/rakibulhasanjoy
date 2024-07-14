// visiblity screen change title will change <!--  -->
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "RH'Joy | portfolio";
            $("#favicon").attr("href", "img/favicon.png");
        } else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "img/favhand.png");
        }
    });
// <!-- visibility screen work end -->
//  <!-- on scroll top -->
document.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
});

// <!-- on scroll top btn end -->
//<!-- ScrollSpy sart -->
let links = document.querySelectorAll("#navbar li a");
let section = document.querySelectorAll(".head-section");
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 65;
        let height = sec.offsetHeight
        let id = sec.getAttribute('id');

        if (top >= offset && top <= offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('#navbar li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
//<!-- ScrollSpy end -->
//<!--  smooth scrolling-->
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 64,
    }, 100, 'linear')
});
//  <!-- dropdpwnMenu on screen 1024px -->
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn .fa-solid");
const dropdpwnMenu = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", () => {
    dropdpwnMenu.classList.toggle("open");
    const isOpen = dropdpwnMenu.classList.contains("open");
    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
})
//  <!-- dropdpwnMenu end -->
// Social icon activision start
let socialIcons = document.querySelectorAll("#social-icon li");
socialIcons.forEach(socialIcon => {
    socialIcon.addEventListener("click", function () {
        for (let sibling of socialIcon.parentNode.children) {
            sibling.classList.remove('active');
        }
        socialIcon.classList.add('active');
    })
});
// Social icon activision end

// <!-- typed js effect starts -->
let typed = new Typed(".typing-text", {
    strings: ["Frontend Development", "Web Design", "Web Development"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 300,
});
// <!-- typed js effect ends -->