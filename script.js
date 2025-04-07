document.addEventListener("DOMContentLoaded", function () {
    // Load Lottie Animation
    lottie.loadAnimation({
        container: document.getElementById('lottie-skill-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'resources/coding-animation.json'
    });

    
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
          items: 3,             // number of items to show
          loop: true,           // loop through items
          margin: 10,           // margin between items
          nav: true,            // show navigation
          dots: true,           // show dots navigation
          autoplay: true,       // enable autoplay
          autoplayTimeout: 3000, // delay between transitions
          responsive: {
            0: {
              items: 1         // 1 item on small screens
            },
            768: {
              items: 2         // 2 items on medium screens
            },
            1024: {
              items: 3         // 3 items on larger screens
            }
          }
        });
    });

    // Theme Toggle (Light/Dark) Switch
    const toggle = document.getElementById("theme-toggle");
    const modeLabel = document.getElementById("mode-label");

    // Load saved theme preference
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
        toggle.checked = true;
        modeLabel.textContent = "Light Mode";
    } else {
        modeLabel.textContent = "Dark Mode";
    }

    toggle.addEventListener("change", () => {
        document.body.classList.toggle("light");
        const isLight = document.body.classList.contains("light");
        modeLabel.textContent = isLight ? "Light Mode" : "Dark Mode";
        localStorage.setItem("theme", isLight ? "light" : "dark");
    });
});
