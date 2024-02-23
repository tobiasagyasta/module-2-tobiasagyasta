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
    console.log(image);
    image.forEach((element) => observer_image.observe(element));