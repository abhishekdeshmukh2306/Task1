// price.js

document.addEventListener('DOMContentLoaded', function () {
  // Add hover effect on pricing plans
  const plans = document.querySelectorAll('.plan');
  plans.forEach(plan => {
    plan.addEventListener('mouseenter', function () {
      this.classList.add('hovered');
    });

    plan.addEventListener('mouseleave', function () {
      this.classList.remove('hovered');
    });
  });

  // Add click event to toggle featured class
  const toggleFeatured = function () {
    plans.forEach(plan => {
      plan.classList.remove('featured');
    });

    this.classList.add('featured');
  };

  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', toggleFeatured);
  });
});

