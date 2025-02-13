
let noCount = 0;
const yesBtn = document.querySelector('.yes-btn');
const sureText = document.getElementById('sureText');

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            } else {
            entry.target.classList.remove('animate');
        }
    });
}); 


const textElements = document.querySelectorAll('.text-left');
const questionElement = document.querySelectorAll('.question');

textElements.forEach((element) => observer.observe(element));
questionElement.forEach((element) => observer.observe(element));

// Observe elements
observer.observe(document.querySelector('.header'));
observer.observe(document.getElementById('text1'));
observer.observe(document.getElementById('text2'));
observer.observe(document.getElementById('question'));
observer.observe(document.getElementById('buttons'));

function accepted() {
    document.body.innerHTML = `
        <div class="container">
            <div class="header" style="opacity: 1; margin: 0;">
                Yay! ❤️<br>
                Happy Valentine's Day!
            </div>
        </div>
    `;
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function rejected() {
    noCount++;
    let scale = 1 + (noCount * 0.2);
    yesBtn.style.transform = `scale(${scale})`;
    
    let really = "really ".repeat(noCount);
    sureText.style.opacity = '1';
    sureText.textContent = `Are you ${really}sure?`;
}