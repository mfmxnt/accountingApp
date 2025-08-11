document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('show');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            answer.classList.toggle('show');
            
            // Close other open FAQs
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('show');
                }
            });
        });
    });
    
    // Animate elements when they scroll into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.focus-box, .step, .testimonial');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.focus-box, .step, .testimonial').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // First-Time Taxpayer Quiz (simplified version)
    const startQuizBtn = document.getElementById('start-quiz');
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', function() {
            document.getElementById('quiz-intro').style.display = 'none';
            document.getElementById('quiz-q1').style.display = 'block';
        });
    }
    
    // Tax Filing Status Helper
    const filingStatusHelp = document.querySelectorAll('.filing-status-help');
    filingStatusHelp.forEach(help => {
        help.addEventListener('click', function(e) {
            e.preventDefault();
            alert("Single: You're unmarried\nHead of Household: You pay for more than half of household costs\nMarried Filing Jointly: You're married and filing together\nMarried Filing Separately: You're married but filing separately");
        });
    });
    
    // Tax Deadline Countdown (from previous example)
    // Could be enhanced with special messaging for first-timers
});