//Using IntersectionObserver API to detect when element is visible in viewport to trigger animation
const observer_text = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('text-animation');
        return;
    }
    });
    });
    const text = document.querySelectorAll(".animated-text");
    text.forEach((element) => observer_text.observe(element));

    const observer_image = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('img-animation');
            return;
        }
        });
        });
    const image = document.querySelectorAll(".animated-image");
    image.forEach((element) => observer_image.observe(element));


    if (localStorage.getItem("darkMode") === "true") 
        {
            document.getElementById("switch-btn").checked = true;
            document.body.classList.add("dark-mode");
            document.getElementById('logo-image').src  = "assets/news-items/Black and White Modern Vintage Badge Brand Logo (dark-mode).png";
            console.log('Dark')
        }
    else
        {
            document.getElementById('logo-image').src  = "assets/news-items/Black and White Modern Vintage Badge Brand Logo.png";
        }
    function toggleDarkMode() 
        {
            document.body.classList.toggle("dark-mode");
            if (!document.getElementById("switch-btn").checked) 
        {
            document.getElementById('logo-image').src  = "assets/news-items/Black and White Modern Vintage Badge Brand Logo.png";
            localStorage.setItem("darkMode", false);
        } 
        else {
            document.getElementById('logo-image').src  = "assets/news-items/Black and White Modern Vintage Badge Brand Logo (dark-mode).png";
            localStorage.setItem("darkMode", true);
        }
        }